<script setup lang="ts">
import { ref, computed } from 'vue'
import { shopData, type ShopCategory, type ShopItem } from '@entities/shop'

const shopImages = import.meta.glob<{ default: string }>('@shared/assets/images/shop/*.webp', { eager: true })

const searchQuery = ref('')
const activeCategory = ref('weapons')

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

const getImageUrl = (imageName: string): string => {
  const keys = Object.keys(shopImages)
  const matchedKey = keys.find(key => key.toLowerCase().endsWith(imageName.toLowerCase()))

  if (matchedKey) {
    const imageModule = shopImages[matchedKey]
    if (imageModule) {
      return imageModule.default
    }
  }

  return ''
}

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escapedQuery})`, 'gi')
  return text.replace(regex, '<span class="bg-[#9241b8] text-white px-1 rounded-sm">$1</span>')
}
</script>

<template>
  <div class="w-full max-w-[1700px] h-[95vh] md:h-[90vh] flex flex-col md:flex-row bg-black/40 border-2 border-white/10 rounded-[1rem] md:rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full md:w-[400px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black/20">
      <div class="p-6 md:p-10 border-b border-white/10">
        <input v-model="searchQuery" type="text" placeholder="ПОИСК ПО ВСЕМУ МАГАЗИНУ..."
               class="w-full bg-black/40 border border-[#9241b8]/50 p-4 rounded-xl text-white font-capture text-xs md:text-base outline-none focus:border-[#9241b8] transition-all"
        />
      </div>

      <div class="flex md:flex-col overflow-x-auto md:overflow-y-auto p-4 gap-2 no-scrollbar">
        <button v-for="cat in shopData" :key="cat.id" @click="activeCategory = cat.id; searchQuery = ''"
                :class="['shrink-0 md:shrink-1 text-left p-4 md:p-6 rounded-xl font-capture text-[10px] md:text-lg tracking-widest transition-all uppercase',
            (activeCategory === cat.id && !searchQuery) ? 'bg-[#9241b8] text-white shadow-[0_0_20px_#9241b866]' : 'text-zinc-500 hover:bg-white/5']"
        >
          {{ cat.title }}
        </button>
      </div>

      <div class="mt-auto p-10 hidden md:block">
        <p class="text-[#9241b8] font-capture text-[10px] uppercase leading-relaxed opacity-70 italic">
          * ЦЕНА НА ВСЕ ТОВАРЫ РАССЧИТАНА НА ОДИН МЕСЯЦ! ПРИ ПРОДЛЕНИИ СКИДКА 50% ОТ СТОИМОСТИ.
        </p>
      </div>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden relative">
      <div class="p-6 md:p-12 overflow-y-auto no-scrollbar">

        <div v-if="searchQuery" class="mb-8 text-zinc-500 font-capture text-xs md:text-sm uppercase tracking-[0.2em]">
          РЕЗУЛЬТАТЫ ПОИСКА ПО ЗАПРОСУ: <span class="text-[#9241b8]">{{ searchQuery }}</span>
        </div>

        <div v-if="filteredItems.length > 0" class="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 pb-20">
          <div v-for="item in filteredItems" :key="item.name"
               class="bg-black/30 border border-white/5 rounded-2xl md:rounded-[2rem] p-4 md:p-6 flex flex-col gap-4 hover:border-[#9241b8]/50 transition-all group">

            <div class="w-full aspect-square bg-zinc-900/50 rounded-xl overflow-hidden relative">
              <img :src="getImageUrl(item.imageName)"
                   loading="lazy"
                   class="w-full h-full object-contain transition-transform group-hover:scale-110"
                   :alt="item.name" />
            </div>

            <div class="flex flex-col gap-1">
              <h3 class="text-white font-capture text-xs md:text-xl truncate" v-html="highlightText(item.name, searchQuery)"></h3>
              <p v-if="item.details" class="text-zinc-500 font-sans text-[10px] md:text-sm uppercase italic" v-html="highlightText(item.details, searchQuery)"></p>
            </div>

            <div class="mt-auto pt-2 border-t border-white/10 flex items-center justify-between">
              <span class="text-[#9241b8] font-capture text-lg md:text-2xl">{{ item.price }}</span>
              <div class="w-2 h-2 rounded-full bg-[#9241b8] animate-pulse"></div>
            </div>
          </div>
        </div>

        <div v-else class="w-full h-full flex items-center justify-center py-40">
          <p class="text-zinc-600 font-capture text-xl uppercase italic tracking-widest animate-pulse">Сектор пуст...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>