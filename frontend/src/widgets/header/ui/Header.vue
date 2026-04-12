<script setup lang="ts">
import { useNavStore } from '@entities/navigation'
import { useServerStore } from '@entities/server/model/store'
import logoSvg from '@shared/assets/images/logo.svg'

const navStore = useNavStore()
const serverStore = useServerStore()

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
  <header class="fixed top-0 left-0 w-full z-[100] pointer-events-none transition-all duration-700">
    <div
      :class="[
        'w-full flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-between px-6 2xl:px-16 pt-4 sm:pt-6 2xl:pt-8 transition-all duration-700 relative',
        navStore.activeSectionId === 'home' ? 'pt-4 sm:pt-6 2xl:pt-8' : 'pt-2 2xl:pt-10'
      ]"
    >
      <div
        :class="[
          'transition-all duration-700 ease-in-out pointer-events-auto shrink-0 2xl:absolute 2xl:left-16 overflow-hidden',
          navStore.activeSectionId === 'home'
            ? 'h-[70px] sm:h-[95px] md:h-[115px] 2xl:h-[135px] opacity-100'
            : 'h-0 opacity-0'
        ]"
      >
        <img :src="logoSvg" alt="Last Zone" class="h-[65px] sm:h-[90px] md:h-[110px] 2xl:h-[130px] w-auto" />
      </div>

      <div class="flex justify-center 2xl:w-full transition-all duration-700 mt-0 sm:mt-4 2xl:mt-0">
        <nav class="flex items-center gap-1 sm:gap-4 xl:gap-7 px-4 sm:px-10 xl:px-14 py-2.5 sm:py-3.5 xl:py-4
                    bg-black/90 backdrop-blur-md border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)]
                    rounded-full pointer-events-auto font-capture transition-all duration-500">

          <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)"
                  :class="[
                    'text-[10px] sm:text-[14px] xl:text-[16px] tracking-tighter sm:tracking-widest transition-all duration-500 uppercase whitespace-nowrap cursor-pointer flex items-center',
                    navStore.activeSectionId === link.id ? 'text-[#9241b8] drop-shadow-[0_0_12px_rgba(146,65,184,1)] scale-105' : 'text-zinc-500 hover:text-white'
                  ]"
          >
            <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">[</span>
            <span class="px-0.5 sm:px-2">{{ link.name }}</span>
            <span :class="['transition-opacity duration-300', navStore.activeSectionId === link.id ? 'opacity-100' : 'opacity-0']">]</span>
          </button>

          <div class="w-[1px] h-4 bg-white/20 mx-1 hidden sm:block"></div>

          <button @click="scrollToSection('server')"
                  :class="[
                    'text-[10px] sm:text-[14px] xl:text-[16px] transition-all duration-500 uppercase cursor-pointer flex items-center gap-2',
                    navStore.activeSectionId === 'server' ? 'text-emerald-400 scale-105' : 'text-zinc-500 hover:text-white'
                  ]"
          >
            <div :class="['w-1.5 h-1.5 rounded-full animate-pulse', serverStore.isOnline ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-red-500']"></div>
            <span>LIVE</span>
          </button>

        </nav>
      </div>
    </div>
  </header>
</template>