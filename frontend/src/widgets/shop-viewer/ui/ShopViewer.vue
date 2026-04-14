<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { shopData, type ShopCategory, type ShopItem } from '@entities/shop'
import { BackButton } from '@shared/ui'
import coinImg from '@shared/assets/images/ui/draws/coin.webp'

const shopImages = import.meta.glob<{ default: string }>('@shared/assets/images/shop/**/*.webp', { eager: true })

const searchQuery = ref('')
const activeCategory = ref('weapons')
const scrollContainer = ref<HTMLElement | null>(null)
const isHeaderCollapsed = ref(false)

const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const data = shopData as ShopCategory[]

  if (!query) {
    const currentCategory = data.find(c => c.id === activeCategory.value)
    return currentCategory?.items || []
  }

  const allItems: ShopItem[] = data.flatMap(c => c.items)
  return allItems.filter(item =>
    item.name.toLowerCase().includes(query) ||
    (item.details && item.details.toLowerCase().includes(query))
  )
})

watch(activeCategory, () => {
  isHeaderCollapsed.value = false
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0
  }
})

const getImageUrl = (imageName: string): string => {
  const keys = Object.keys(shopImages)
  const matchedKey = keys.find(key => key.toLowerCase().endsWith(imageName.toLowerCase()))
  if (matchedKey && shopImages[matchedKey]) {
    return shopImages[matchedKey].default
  }
  return ''
}

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escapedQuery})`, 'gi')
  return text.replace(regex, '<span class="bg-[#9241b8] text-white px-1 rounded-sm">$1</span>')
}

const handleScroll = (e: Event) => {
  if (window.innerWidth >= 768) return
  const target = e.target as HTMLElement
  isHeaderCollapsed.value = target.scrollTop > 40
}

onMounted(() => {
  const scrollArea = scrollContainer.value
  if (scrollArea) scrollArea.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  const scrollArea = scrollContainer.value
  if (scrollArea) scrollArea.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-full max-w-[1750px] h-[92vh] flex flex-col md:flex-row bg-black/40 border-2 border-white/10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full md:w-[400px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black/20 shrink-0 transition-all duration-500">

      <div :class="[
        'transition-all duration-500 ease-in-out overflow-hidden flex flex-col',
        isHeaderCollapsed ? 'max-h-0 opacity-0 p-0 pointer-events-none' : 'max-h-[300px] opacity-100 p-6 md:p-8 gap-4'
      ]">
        <BackButton to="/" />
        <input v-model="searchQuery" type="text" placeholder="ПОИСК ТОВАРА..."
               class="w-full bg-black/40 border border-[#9241b8]/50 p-4 rounded-xl text-white font-capture text-xs md:text-base outline-none focus:border-[#9241b8] transition-all"
        />
      </div>

      <div :class="[
        'flex md:flex-col overflow-x-auto md:overflow-y-auto no-scrollbar sticky top-0 z-20 transition-all duration-500 bg-zinc-950/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-b-0 border-white/5',
        isHeaderCollapsed ? 'p-2' : 'p-4 md:p-6'
      ]">
        <div class="flex md:flex-col gap-2 w-full px-2 md:px-0 items-center md:items-stretch">
          <button v-for="cat in shopData" :key="cat.id" @click="activeCategory = cat.id; searchQuery = ''"
                  :class="['shrink-0 text-center md:text-left px-5 py-3 md:py-5 rounded-xl font-capture text-[10px] md:text-lg tracking-widest transition-all uppercase whitespace-nowrap md:whitespace-normal leading-tight',
              (activeCategory === cat.id && !searchQuery) ? 'bg-[#9241b8] text-white shadow-[0_0_20px_#9241b866]' : 'text-zinc-500 hover:text-white']"
          >
            {{ cat.title }}
          </button>
        </div>
      </div>

      <div :class="[
        'mt-auto p-6 md:p-10 bg-[#9241b8]/5 border-t border-white/5 transition-all duration-500 hidden md:block',
        isHeaderCollapsed ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100'
      ]">
        <div class="flex flex-col gap-4 animate-glow-text">
          <p class="text-white font-sans font-medium text-[10px] md:text-sm uppercase leading-tight opacity-80 italic">
            Всё оружие в <span class="text-yellow-400 font-bold">золотых обвесах</span> + <span class="text-blue-400 font-bold">патроны</span>.
          </p>
          <p class="text-white font-capture text-xs md:text-lg uppercase leading-tight">
            ЦЕНА НА <span class="text-[#9241b8]">ОДИН МЕСЯЦ!</span>
          </p>
          <p class="text-white font-capture text-sm md:text-xl uppercase leading-tight tracking-tighter">
            ПРОДЛЕНИЕ <span class="text-emerald-400">СКИДКА 50%</span>!
          </p>
        </div>
      </div>
    </div>

    <div ref="scrollContainer" class="flex-1 overflow-y-auto no-scrollbar relative bg-black/10 scroll-smooth">
      <div class="p-4 md:p-12">
        <div v-if="filteredItems.length > 0" class="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 pb-20">
          <div v-for="item in filteredItems" :key="item.name"
               class="bg-black/30 border border-white/5 rounded-2xl md:rounded-[2rem] p-3 md:p-6 flex flex-col gap-3 md:gap-4 hover:border-[#9241b8]/50 transition-all group">

            <div class="w-full aspect-square bg-zinc-900/50 rounded-xl overflow-hidden relative border border-white/5">
              <img :src="getImageUrl(item.imageName)" loading="lazy" class="w-full h-full object-contain transition-transform group-hover:scale-110" :alt="item.name" />
            </div>

            <div class="flex flex-col gap-1">
              <h3 class="text-white font-capture text-[10px] md:text-xl truncate" v-html="highlightText(item.name, searchQuery)"></h3>
              <p v-if="item.details" class="text-zinc-500 font-sans text-[9px] md:text-sm uppercase italic leading-tight" v-html="highlightText(item.details, searchQuery)"></p>
            </div>

            <div class="mt-auto pt-2 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span class="text-[#9241b8] font-capture text-base md:text-2xl">{{ item.price }}</span>
                <img :src="coinImg" class="h-4 md:h-6 object-contain" alt="coin" />
              </div>
              <div class="w-1.5 h-1.5 rounded-full bg-[#9241b8] animate-pulse"></div>
            </div>
          </div>
        </div>

        <div v-else class="w-full h-[50vh] flex items-center justify-center">
          <p class="text-zinc-600 font-capture text-xl uppercase italic tracking-widest animate-pulse">Сектор пуст...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
@keyframes glow-text {
  0%, 100% { text-shadow: 0 0 10px rgba(146, 65, 184, 0); transform: scale(1); }
  50% { text-shadow: 0 0 20px rgba(146, 65, 184, 0.8); transform: scale(1.01); }
}
.animate-glow-text { animation: glow-text 3s infinite ease-in-out; }
</style>