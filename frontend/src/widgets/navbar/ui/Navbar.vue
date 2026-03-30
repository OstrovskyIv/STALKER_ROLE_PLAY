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
      'fixed left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none font-capture transition-all duration-500 ease-in-out',
      navStore.activeSectionId === 'home'
        ? 'top-20 sm:top-32 xl:top-10'
        : 'top-4 sm:top-6 xl:top-10'
    ]"
  >
    <div class="flex items-center gap-3 sm:gap-6 xl:gap-10 px-6 sm:px-12 xl:px-16 py-2 sm:py-2.5 xl:py-3
                bg-black/90 backdrop-blur-md border border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]
                rounded-full pointer-events-auto">
      <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)"
              :class="[
                'text-[10px] sm:text-[14px] xl:text-[16px] tracking-tight xl:tracking-[0.15em] transition-all duration-500 uppercase whitespace-nowrap cursor-pointer',
                navStore.activeSectionId === link.id ? 'text-[#9241b8] drop-shadow-[0_0_12px_rgba(146,65,184,1)] scale-110' : 'text-zinc-500 hover:text-white'
              ]"
      >
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
        <span class="px-1 sm:px-2">{{ link.name }}</span>
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
      </button>
    </div>
  </nav>
</template>