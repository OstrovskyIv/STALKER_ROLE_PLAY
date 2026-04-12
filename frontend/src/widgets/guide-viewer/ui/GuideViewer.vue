<script setup lang="ts">
import { ref, computed } from 'vue'
import { guidesData, guideCategories, type GuideItem } from '@entities/guides'
import { BackButton } from '@shared/ui'

const guideImages = import.meta.glob<{ default: string }>('@shared/assets/images/guides/**/*.webp', { eager: true })

const searchQuery = ref('')
const activeCategory = ref('mutants')

const filteredGuides = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const source = (guidesData || []) as GuideItem[]

  if (!query) {
    return source.filter(g => g.category === activeCategory.value)
  }

  return source.filter(item => {
    const title = item.title || ''
    const desc = item.description || ''
    return title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)
  })
})

const getImageUrl = (imageName: string | undefined): string => {
  if (!imageName) return ''
  const keys = Object.keys(guideImages)
  const matchedKey = keys.find(key => key.endsWith(imageName))

  if (matchedKey && guideImages[matchedKey]) {
    return guideImages[matchedKey].default
  }

  return ''
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
</script>

<template>
  <div class="w-full max-w-[1750px] h-[92vh] flex flex-col md:flex-row bg-black/40 border-2 border-white/10 rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full md:w-[380px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black/30">
      <div class="p-6 md:p-8 flex flex-col gap-5">
        <BackButton to="/" />
        <h2 class="text-white font-capture text-2xl tracking-tighter">ПДА: СПРАВОЧНИК</h2>
        <input v-model="searchQuery" type="text" placeholder="ПОИСК..."
               class="w-full bg-black/60 border border-[#9241b8]/40 p-4 rounded-xl text-white font-capture text-sm outline-none focus:border-[#9241b8] transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
      </div>

      <div class="flex md:flex-col overflow-x-auto md:overflow-y-auto p-4 gap-2 no-scrollbar">
        <button v-for="cat in guideCategories" :key="cat.id" @click="activeCategory = cat.id; searchQuery = ''"
                :class="['shrink-0 md:shrink-1 text-left p-4 md:px-8 md:py-5 rounded-xl font-capture text-[10px] md:text-base tracking-widest transition-all uppercase',
            (activeCategory === cat.id && !searchQuery) ? 'bg-[#9241b8] text-white shadow-[0_0_20px_#9241b866]' : 'text-zinc-500 hover:text-white hover:bg-white/5']">
          {{ cat.title }}
        </button>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto no-scrollbar p-6 md:p-12 bg-black/10 relative">
      <div v-if="filteredGuides.length" class="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
        <div v-for="guide in filteredGuides" :key="guide.id"
             :class="[
               'group relative rounded-[2.5rem] p-[2px] transition-all duration-700 overflow-hidden',
               isExtreme(guide.lethality) ? 'animate-extreme-border shadow-[0_0_50px_rgba(146,65,184,0.3)]' : 'bg-white/5 hover:bg-white/10'
             ]">

          <div v-if="isExtreme(guide.lethality)" class="absolute inset-[-100%] animate-slow-spin bg-[conic-gradient(from_0deg,#ff0000,#9241b8,#ff0000)] opacity-30"></div>

          <div class="relative h-full w-full bg-[#0a0a0a] rounded-[2.4rem] p-6 md:p-8 flex flex-col gap-6 z-10">

            <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div class="relative shrink-0">
                <div :class="[
                  'w-48 h-48 rounded-3xl overflow-hidden border-2 transition-all duration-500 group-hover:scale-105',
                  isExtreme(guide.lethality) ? 'border-[#9241b8] shadow-[0_0_30px_rgba(146,65,184,0.4)]' : 'border-white/10'
                ]">
                  <img :src="getImageUrl(guide.imageName)" :alt="guide.title" class="w-full h-full object-contain bg-zinc-900/30" loading="lazy" />
                </div>
                <div v-if="isExtreme(guide.lethality)" class="absolute -top-2 -right-2 bg-red-600 text-white font-capture text-[10px] px-3 py-1 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)] border border-white/20">КРИТИЧЕСКАЯ УГРОЗА</div>
              </div>

              <div class="flex-1 flex flex-col gap-4 text-center md:text-left">
                <div class="border-l-4 border-[#9241b8] pl-5 flex flex-col gap-1">
                  <h3 class="text-white font-capture text-2xl md:text-4xl uppercase italic leading-none tracking-tight" v-html="highlightText(guide.title, searchQuery)"></h3>
                  <div class="flex items-center justify-center md:justify-start gap-3">
                    <span class="text-zinc-600 font-capture text-[10px] tracking-widest uppercase">Опасность:</span>
                    <span :class="['font-capture text-sm uppercase italic', getLethalityClass(guide.lethality)]">{{ guide.lethality }}</span>
                  </div>
                </div>

                <p class="text-zinc-400 font-sans italic text-sm md:text-base leading-relaxed opacity-80" v-html="highlightText(guide.description, searchQuery)"></p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-if="guide.features" class="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex flex-col gap-1">
                <span class="text-[#9241b8] font-capture text-[10px] uppercase tracking-widest opacity-60">Особенности</span>
                <span class="text-zinc-200 font-sans text-xs italic leading-tight">{{ guide.features }}</span>
              </div>
              <div v-if="guide.trophies" class="bg-emerald-500/[0.03] border border-emerald-500/10 p-4 rounded-2xl flex flex-col gap-1">
                <span class="text-emerald-500 font-capture text-[10px] uppercase tracking-widest opacity-60">Трофеи</span>
                <span class="text-zinc-200 font-sans text-xs italic leading-tight">{{ guide.trophies }}</span>
              </div>
              <div v-if="guide.danger" class="md:col-span-2 bg-red-500/[0.03] border border-red-500/10 p-4 rounded-2xl flex flex-col gap-1">
                <span class="text-red-500 font-capture text-[10px] uppercase tracking-widest opacity-60">Поведение</span>
                <span class="text-zinc-200 font-sans text-xs italic leading-tight">{{ guide.danger }}</span>
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

@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes extreme-border {
  0%, 100% { background: #ff0000; }
  50% { background: #9241b8; }
}

.animate-extreme-text {
  animation: extreme-glow 3s infinite linear;
}

.animate-slow-spin {
  animation: slow-spin 8s infinite linear;
}

.animate-extreme-border {
  animation: extreme-border 4s infinite ease-in-out;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>