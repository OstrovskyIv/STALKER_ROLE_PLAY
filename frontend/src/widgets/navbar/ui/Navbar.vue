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
  <nav
    :class="[
      'fixed left-0 right-0 z-[100] flex justify-center px-2 pointer-events-none font-capture transition-all duration-500 ease-in-out',
      navStore.activeSectionId === 'home'
        ? 'top-10 sm:top-16 xl:top-[60px]'
        : 'top-2 sm:top-4 xl:top-6'
    ]"
  >
    <div class="flex items-center gap-2 sm:gap-6 xl:gap-10 px-4 sm:px-10 xl:px-16 py-2 sm:py-4 xl:py-5
                bg-black border border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]
                rounded-full pointer-events-auto">
      <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)"
              :class="[
                'text-[8px] sm:text-[12px] xl:text-[16px] tracking-tight xl:tracking-[0.15em] transition-all duration-500 uppercase whitespace-nowrap cursor-pointer',
                navStore.activeSectionId === link.id ? 'text-[#9241b8] drop-shadow-[0_0_12px_rgba(146,65,184,1)] scale-110' : 'text-zinc-500 hover:text-white'
              ]"
      >
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
        <span class="px-0.5 sm:px-2">{{ link.name }}</span>
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
      </button>
    </div>
  </nav>
</template>