<script setup lang="ts">
import { SectionDivider } from '@shared/ui'

const factions = [
  { title: 'ОДИНОЧКИ', desc: 'Свободные сталкеры Зоны. Исследователи и охотники за артефактами.' },
  { title: 'ДОЛГ', desc: 'Защита мира от порождений Зоны. Военная дисциплина и порядок.' },
  { title: 'СВОБОДА', desc: 'Зона — общее достояние. Свобода личности и доступ к знаниям.' }
]
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <div class="absolute top-[72px] xl:top-[160px] w-full z-10">
      <SectionDivider />
    </div>

    <div class="flex flex-col items-center gap-8 md:gap-16 w-full max-w-7xl pt-20 md:pt-40">
      <h2 class="text-4xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-center italic">
        АРХИВЫ ЗОНЫ
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
        <div v-for="item in factions" :key="item.title"
             class="p-6 md:p-10 border border-zinc-800 bg-zinc-950/60 rounded-[1.5rem] md:rounded-[2.5rem]
                    flex flex-col gap-4 hover:border-[#9241b8] transition-all duration-500 group">
          <h3 class="text-xl md:text-3xl font-capture text-red-700 group-hover:text-red-500 transition-colors uppercase">{{ item.title }}</h3>
          <p class="text-zinc-100 text-sm md:text-base font-sans font-bold uppercase italic leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>