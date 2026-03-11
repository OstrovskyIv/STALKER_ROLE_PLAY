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
      'fixed left-0 w-full z-30 flex justify-center px-4 pointer-events-none font-capture transition-all duration-500',
      navStore.activeSectionId === 'home'
        ? 'top-28 sm:top-40 xl:top-20'
        : 'top-6 xl:top-20'
    ]"
  >
    <div
      class="flex items-center gap-3 sm:gap-6 xl:gap-10 px-6 sm:px-10 py-2 sm:py-3 xl:py-4
             bg-zinc-950/90 border border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.4)]
             rounded-full pointer-events-auto"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollToSection(link.id)"
        :class="[
          'text-[10px] sm:text-[12px] xl:text-[15px] tracking-tight xl:tracking-[0.2em] transition-all duration-500 flex items-center gap-1 uppercase whitespace-nowrap cursor-pointer',
          navStore.activeSectionId === link.id
            ? 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,1)] scale-110'
            : 'text-zinc-500 hover:text-zinc-200'
        ]"
      >
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
        <span>{{ link.name }}</span>
        <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
      </button>
    </div>
  </nav>
</template>