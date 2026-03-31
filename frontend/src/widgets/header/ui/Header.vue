<script setup lang="ts">
import logoSvg from '@shared/assets/images/logo.svg'
import { SectionDivider } from '@shared/ui'
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
  <header class="fixed top-0 left-0 w-full z-[100] pointer-events-none flex flex-col items-center">
    <div class="w-full flex flex-col 2xl:flex-row items-center 2xl:justify-between px-4 sm:px-6 2xl:px-16 pt-4 sm:pt-6 2xl:pt-8 gap-2 2xl:gap-0 transition-all duration-700">
      <div
        :class="[
          'transition-all duration-700 ease-in-out pointer-events-auto shrink-0',
          navStore.activeSectionId === 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
        ]"
      >
        <img
          :src="logoSvg"
          alt="Last Zone"
          class="h-[65px] sm:h-[90px] md:h-[110px] 2xl:h-[130px] w-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-all duration-500"
        />
      </div>

      <div class="flex-1 flex justify-center 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2 -translate-y-2 sm:-translate-y-4 xl:-translate-y-3 2xl:translate-y-0">
        <nav class="flex items-center justify-between w-[95vw] sm:w-auto gap-1 sm:gap-6 xl:gap-10 px-4 sm:px-12 xl:px-16 py-2.5 sm:py-3.5 xl:py-4
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
        </nav>
      </div>
    </div>

    <div class="w-full mt-[-2px] sm:mt-[-4px] xl:mt-[-2px] 2xl:mt-[-10px] pointer-events-none transition-all duration-500">
      <SectionDivider />
    </div>
  </header>
</template>