<script setup lang="ts">
import { ref, computed } from 'vue'
import { SectionDivider } from '@shared/ui'

interface ImageModule {
  default: string;
}

const scrollContainer = ref<HTMLElement | null>(null)

const imageModules = import.meta.glob<ImageModule>('@shared/assets/images/gallery/*.webp', { eager: true })
const allPhotos = Object.values(imageModules).map((mod, i) => ({
  id: i + 1,
  src: mod.default
}))

const pages = computed(() => {
  return [
    { type: 'pattern-A', items: allPhotos.slice(0, 6) },
    { type: 'pattern-B', items: allPhotos.slice(6, 11) },
    { type: 'pattern-A', items: allPhotos.slice(11, 17) }
  ]
})

const getPatternAClass = (i: number) => {
  if (i === 1) return 'col-span-2'
  if (i === 3) return 'col-span-2'
  return 'col-span-1'
}

const getPatternBClass = (i: number) => {
  if (i === 1) return 'col-span-2'
  if (i === 3 || i === 4) return 'col-span-2'
  return 'col-span-1'
}

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const width = scrollContainer.value.offsetWidth
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <div class="w-full h-[75px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none transition-all duration-500"></div>
    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 gap-6 md:gap-10">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none text-center">
        ГАЛЕРЕЯ ЗОНЫ
      </h2>

      <div class="relative w-full max-w-[1750px] group px-4 md:px-10">
        <button @click="scroll('left')" class="absolute -left-2 top-1/2 -translate-y-1/2 z-50 p-4 md:p-6 bg-black/60 border-2 border-[#9241b8] text-white rounded-full hover:bg-[#9241b8] transition-all opacity-0 group-hover:opacity-100 hidden md:block shadow-[0_0_20px_#9241b8]">
          <span class="font-capture text-2xl">&lt;</span>
        </button>

        <div
          ref="scrollContainer"
          class="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-10 md:gap-32"
        >
          <div
            v-for="(page, pIdx) in pages"
            :key="pIdx"
            class="flex-none w-full grid grid-cols-4 grid-rows-2 gap-3 md:gap-6 h-[400px] md:h-[650px] snap-center"
          >
            <div
              v-for="(photo, iIdx) in page.items"
              :key="photo.id"
              :class="[
                'relative overflow-hidden border-2 border-white/10 rounded-xl md:rounded-[2.5rem] bg-zinc-900/50 transition-all duration-500 hover:border-[#9241b8] hover:shadow-[0_0_40px_rgba(146,65,184,0.6)] group/card',
                page.type === 'pattern-A' ? getPatternAClass(iIdx) : getPatternBClass(iIdx)
              ]"
            >
              <img
                :src="photo.src"
                class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale-[0.4] group-hover/card:grayscale-0"
                alt="Zone"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#9241b8]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </div>

        <button @click="scroll('right')" class="absolute -right-2 top-1/2 -translate-y-1/2 z-50 p-4 md:p-6 bg-black/60 border-2 border-[#9241b8] text-white rounded-full hover:bg-[#9241b8] transition-all opacity-0 group-hover:opacity-100 hidden md:block shadow-[0_0_20px_#9241b8]">
          <span class="font-capture text-2xl">&gt;</span>
        </button>
      </div>

      <div class="md:hidden text-zinc-500 font-capture text-[10px] animate-pulse uppercase">Листайте вправо »</div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>