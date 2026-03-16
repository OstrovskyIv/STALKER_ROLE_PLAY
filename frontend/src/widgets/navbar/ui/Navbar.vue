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
      'fixed left-0 w-full z-30 flex justify-center px-4 pointer-events-none font-capture transition-all duration-500 ease-in-out',
      /* Меню теперь выше, синхронно с логотипом */
      navStore.activeSectionId === 'home'
        ? 'top-32 sm:top-44 xl:top-[82px]'
        : 'top-6 xl:top-[82px]'
    ]"
  >
    <div
      class="flex items-center gap-3 sm:gap-6 xl:gap-10 px-6 sm:px-10 py-2 sm:py-3 xl:py-3.5
             bg-zinc-950/90 border border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]
             rounded-full pointer-events-auto"
    >
      <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)"
              :class="[
          'text-[10px] sm:text-[12px] xl:text-[14px] tracking-tight xl:tracking-[0.2em] transition-all duration-500 flex items-center gap-1 uppercase whitespace-nowrap cursor-pointer',
          navStore.activeSectionId === link.id ? 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,1)]' : 'text-zinc-500 hover:text-white'
        ]"
      >
        <span :class="['transition-opacity', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
        <span>{{ link.name }}</span>
        <span :class="['transition-opacity', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
      </button>
    </div>
  </nav>
</template>