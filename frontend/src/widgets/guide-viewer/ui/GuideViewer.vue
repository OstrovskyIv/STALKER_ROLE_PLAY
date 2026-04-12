<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { guidesData, guideCategories, type GuideItem } from '@entities/guides'
import { BackButton } from '@shared/ui'

const guideImages = import.meta.glob<{ default: string }>('@shared/assets/images/guides/**/*.webp', { eager: true })

const searchQuery = ref('')
const activeCategory = ref('mutants')
const contentRef = ref<HTMLElement | null>(null)
const isHeaderCollapsed = ref(false)

const filteredGuides = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const source = (guidesData || []) as GuideItem[]
  if (!query) return source.filter(g => g.category === activeCategory.value)
  return source.filter(item => (item.title?.toLowerCase().includes(query)) || (item.description?.toLowerCase().includes(query)))
})

const getImageUrl = (imageName: string | undefined): string => {
  if (!imageName) return ''
  const keys = Object.keys(guideImages)
  const matchedKey = keys.find(key => key.endsWith(imageName))
  return (matchedKey && guideImages[matchedKey]) ? guideImages[matchedKey].default : ''
}

const isExtreme = (level: string | undefined) => {
  if (!level) return false
  const l = level.toLowerCase()
  return l === 'экстремальная' || l === 'экстремально' || l === 'очень высокая'
}

const getLethalityClass = (level: string | undefined) => {
  if (!level) return 'text-zinc-500'
  const l = level.toLowerCase()
  if (l === 'низкая') return 'text-emerald-400'
  if (l === 'средняя') return 'text-yellow-400'
  if (l === 'высокая') return 'text-red-500'
  if (isExtreme(level)) return 'animate-extreme-text font-black'
  return 'text-zinc-500'
}

const highlightText = (text: string | undefined, query: string) => {
  if (!text) return ''
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<span class="bg-[#9241b8] text-white px-0.5 rounded">$1</span>')
}

const handleScroll = (e: Event) => {
  if (window.innerWidth >= 1024) return
  const target = e.target as HTMLElement
  isHeaderCollapsed.value = target.scrollTop > 20
}

onMounted(() => {
  const scrollArea = contentRef.value
  if (scrollArea) scrollArea.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  const scrollArea = contentRef.value
  if (scrollArea) scrollArea.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-full max-w-[1750px] h-[95vh] md:h-[90vh] flex flex-col lg:flex-row bg-black/40 border-2 border-white/10 rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full lg:w-[350px] xl:w-[400px] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-black/30 shrink-0 transition-all duration-500">

      <div :class="[
        'transition-all duration-500 ease-in-out overflow-hidden flex flex-col',
        isHeaderCollapsed ? 'max-h-0 opacity-0 p-0 transform -translate-y-full' : 'max-h-[400px] opacity-100 p-6 xl:p-8 gap-4'
      ]">
        <BackButton to="/" />
        <h2 class="text-white font-capture text-xl xl:text-2xl tracking-tighter">ПДА: СПРАВОЧНИК</h2>
        <input v-model="searchQuery" type="text" placeholder="ПОИСК..."
               class="w-full bg-black/60 border border-[#9241b8]/40 p-3 xl:p-4 rounded-xl text-white font-capture text-xs xl:text-sm outline-none focus:border-[#9241b8] transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
      </div>

      <div :class="[
        'flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-2 no-scrollbar bg-black/40 lg:bg-transparent sticky top-0 z-20 transition-all duration-500',
        isHeaderCollapsed ? 'p-2' : 'p-4'
      ]">
        <button v-for="cat in guideCategories" :key="cat.id"
                @click="activeCategory = cat.id; searchQuery = ''; isHeaderCollapsed = false"
                :class="['shrink-0 lg:shrink-1 text-left px-5 py-3 xl:px-8 xl:py-5 rounded-xl font-capture text-[10px] xl:text-base transition-all uppercase',
            (activeCategory === cat.id && !searchQuery) ? 'bg-[#9241b8] text-white shadow-[0_0_15px_#9241b866]' : 'text-zinc-500 hover:text-white hover:bg-white/5']">
          {{ cat.title }}
        </button>
      </div>
    </div>

    <div ref="contentRef" class="flex-1 overflow-y-auto no-scrollbar p-4 xl:p-12 bg-black/10 relative scroll-smooth">
      <div v-if="filteredGuides.length" class="grid grid-cols-1 2xl:grid-cols-2 gap-6 xl:gap-10">
        <div v-for="guide in filteredGuides" :key="guide.id"
             :class="[
               'group relative rounded-[2rem] xl:rounded-[2.5rem] p-[1.5px] xl:p-[2px] transition-all duration-700 overflow-hidden',
               isExtreme(guide.lethality) ? 'animate-extreme-border shadow-[0_0_50px_rgba(146,65,184,0.3)]' : 'bg-white/5 hover:bg-white/10'
             ]">

          <div v-if="isExtreme(guide.lethality)" class="absolute inset-[-100%] animate-slow-spin bg-[conic-gradient(from_0deg,#ff0000,#9241b8,#ff0000)] opacity-30"></div>

          <div class="relative h-full w-full bg-[#0a0a0a] rounded-[1.9rem] xl:rounded-[2.4rem] p-5 xl:p-8 flex flex-col gap-5 xl:gap-8 z-10">

            <div class="flex flex-col sm:flex-row gap-6 xl:gap-8 items-center sm:items-start">
              <div class="relative shrink-0">
                <div :class="[
                  'w-32 h-32 xl:w-48 xl:h-48 rounded-2xl xl:rounded-3xl overflow-hidden border-2 transition-all duration-500 group-hover:scale-105',
                  isExtreme(guide.lethality) ? 'border-[#9241b8] shadow-[0_0_30px_rgba(146,65,184,0.4)]' : 'border-white/10'
                ]">
                  <img :src="getImageUrl(guide.imageName)" :alt="guide.title" class="w-full h-full object-contain bg-zinc-900/30" loading="lazy" />
                </div>
                <div v-if="isExtreme(guide.lethality)" class="absolute -top-2 -right-2 bg-red-600 text-white font-capture text-[8px] xl:text-[10px] px-2 xl:px-3 py-1 rounded-full animate-pulse border border-white/20">УГРОЗА</div>
              </div>

              <div class="flex-1 flex flex-col gap-3 text-center sm:text-left">
                <div class="border-l-4 border-[#9241b8] pl-4 xl:pl-5 flex flex-col gap-1">
                  <h3 class="text-white font-capture text-xl xl:text-4xl uppercase italic leading-none" v-html="highlightText(guide.title, searchQuery)"></h3>
                  <div v-if="guide.lethality" class="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <span class="text-zinc-600 font-capture text-[9px] uppercase">Класс:</span>
                    <span :class="['font-capture text-[10px] xl:text-sm uppercase italic', getLethalityClass(guide.lethality)]">{{ guide.lethality }}</span>
                  </div>
                </div>
                <p class="text-zinc-400 font-sans italic text-xs xl:text-base leading-relaxed opacity-80" v-html="highlightText(guide.description, searchQuery)"></p>
              </div>
            </div>

            <!-- Характеристики -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
              <div v-if="guide.features" class="bg-white/[0.03] border border-white/5 p-3 xl:p-4 rounded-xl xl:rounded-2xl flex flex-col gap-1">
                <span class="text-[#9241b8] font-capture text-[9px] uppercase tracking-widest opacity-60">Особенности</span>
                <span class="text-zinc-200 font-sans text-[10px] xl:text-xs italic leading-tight">{{ guide.features }}</span>
              </div>
              <div v-if="guide.trophies" class="bg-emerald-500/[0.03] border border-emerald-500/10 p-3 xl:p-4 rounded-xl xl:rounded-2xl flex flex-col gap-1">
                <span class="text-emerald-500 font-capture text-[9px] uppercase tracking-widest opacity-60">Трофеи</span>
                <span class="text-zinc-200 font-sans text-[10px] xl:text-xs italic leading-tight">{{ guide.trophies }}</span>
              </div>
              <div v-if="guide.danger" class="sm:col-span-2 bg-red-500/[0.03] border border-red-500/10 p-3 xl:p-4 rounded-xl xl:rounded-2xl flex flex-col gap-1">
                <span class="text-red-500 font-capture text-[9px] uppercase tracking-widest opacity-60">Поведение</span>
                <span class="text-zinc-200 font-sans text-[10px] xl:text-xs italic leading-tight">{{ guide.danger }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes extreme-glow {
  0% { color: #ff0000; text-shadow: 0 0 15px #ff0000; }
  50% { color: #9241b8; text-shadow: 0 0 25px #9241b8; }
  100% { color: #ff0000; text-shadow: 0 0 15px #ff0000; }
}
@keyframes slow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes extreme-border { 0%, 100% { background: #ff0000; } 50% { background: #9241b8; } }
.animate-extreme-text { animation: extreme-glow 3s infinite linear; }
.animate-slow-spin { animation: slow-spin 8s infinite linear; }
.animate-extreme-border { animation: extreme-border 4s infinite ease-in-out; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>