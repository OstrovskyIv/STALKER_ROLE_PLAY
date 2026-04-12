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
    {
      items: [
        { src: allPhotos[0]?.src, class: 'col-span-2 row-span-2' },
        { src: allPhotos[1]?.src, class: 'col-span-1 row-span-1' },
        { src: allPhotos[2]?.src, class: 'col-span-1 row-span-1' },
        { src: allPhotos[3]?.src, class: 'col-span-2 row-span-1' },
      ]
    },
    {
      items: [
        { src: allPhotos[4]?.src, class: 'col-span-1 row-span-1' },
        { src: allPhotos[5]?.src, class: 'col-span-1 row-span-1' },
        { src: allPhotos[6]?.src, class: 'col-span-2 row-span-2' },
        { src: allPhotos[7]?.src, class: 'col-span-2 row-span-1' },
      ]
    },
    {
      items: [
        { src: allPhotos[8]?.src, class: 'col-span-2 row-span-1' },
        { src: allPhotos[9]?.src, class: 'col-span-2 row-span-1' },
        { src: allPhotos[10]?.src, class: 'col-span-4 row-span-1' },
      ]
    }
  ]
})

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
  <section class="w-full min-h-screen h-auto flex flex-col items-center relative snap-start shrink-0 bg-transparent overflow-x-hidden">

    <div class="w-full h-[75px] sm:h-[90px] md:h-[140px] 2xl:h-[120px] shrink-0 pointer-events-none transition-all duration-500"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 py-12 md:py-20 gap-8 md:gap-12 2xl:gap-16">
      <h2 class="text-3xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none text-center shrink-0">
        ГАЛЕРЕЯ ЗОНЫ
      </h2>

      <div class="relative w-full max-w-[1700px] px-4 md:px-12 flex flex-col justify-center">

        <button @click="scroll('left')" class="absolute left-0 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/60 border-2 border-[#9241b8] text-white rounded-full hover:bg-[#9241b8] transition-all hidden md:block shadow-[0_0_20px_#9241b8]">
          <span class="font-capture text-2xl">&lt;</span>
        </button>

        <div
          ref="scrollContainer"
          class="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-10 md:gap-20"
        >
          <div
            v-for="(page, pIdx) in pages"
            :key="pIdx"
            class="flex-none w-full grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 snap-center h-[350px] md:h-[550px] 2xl:h-[650px]"
          >
            <div
              v-for="(photo, iIdx) in page.items"
              :key="iIdx"
              :class="[
                'relative overflow-hidden border-2 border-white/10 rounded-xl md:rounded-[2.5rem] bg-zinc-900/50 transition-all duration-500 hover:border-[#9241b8] hover:shadow-[0_0_40px_rgba(146,65,184,0.5)] group/card',
                photo.class
              ]"
            >
              <img
                v-if="photo.src"
                :src="photo.src"
                class="w-full h-full object-cover object-center grayscale-[0.2] group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                alt="Zone"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#9241b8]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        </div>

        <button @click="scroll('right')" class="absolute right-0 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/60 border-2 border-[#9241b8] text-white rounded-full hover:bg-[#9241b8] transition-all hidden md:block shadow-[0_0_20px_#9241b8]">
          <span class="font-capture text-2xl">&gt;</span>
        </button>
      </div>

      <div class="md:hidden text-zinc-500 font-capture text-[10px] animate-pulse uppercase tracking-widest shrink-0">Листайте вправо »</div>
    </div>

    <!-- БЕЗОПАСНЫЙ ОТСТУП СНИЗУ: Теперь секция сама раздвинется в Опере -->
    <div class="h-20 md:h-[15vh] shrink-0 w-full"></div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
img {
  display: block;
  min-width: 100%;
  min-height: 100%;
}
</style>