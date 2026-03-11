<script setup lang="ts">
import { useNavStore } from '@entities/navigation'

const navStore = useNavStore()
const navLinks = [
  { name: 'подключение', id: 'home' },
  { name: 'информация', id: 'information' },
  { name: 'связь', id: 'connection' },
  { name: 'галерея', id: 'gallery' }
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- top-28 на мобилках - это гарантированно НИЖЕ логотипа (h-20) -->
  <!-- xl:top-14 - вровень с логотипом на десктопе -->
  <nav class="fixed top-28 sm:top-40 xl:top-14 left-0 w-full z-30 flex justify-center px-4 pointer-events-none font-capture">
    <div
      class="flex items-center gap-3 sm:gap-6 xl:gap-10 px-6 sm:px-10 py-2 sm:py-3 xl:py-4
             bg-zinc-950 border border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]
             rounded-full pointer-events-auto transition-all duration-500"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollToSection(link.id)"
        :class="[
          'text-[10px] sm:text-[12px] xl:text-[15px] tracking-tight xl:tracking-[0.2em] transition-all duration-500 flex items-center gap-1 uppercase whitespace-nowrap cursor-pointer',
          navStore.activeSectionId === link.id
            ? 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,1)] scale-105'
            : 'text-zinc-400 hover:text-white'
        ]"
      >
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
        <span>{{ link.name }}</span>
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
      </button>
    </div>
  </nav>
</template>