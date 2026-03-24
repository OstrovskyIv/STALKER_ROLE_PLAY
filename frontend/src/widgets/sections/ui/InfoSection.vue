<script setup lang="ts">
import { SectionDivider } from '@shared/ui'

const factions = [
  { title: 'ОДИНОЧКИ', desc: 'СВОБОДНЫЕ СТАЛКЕРЫ ЗОНЫ. ИССЛЕДОВАТЕЛИ И ОХОТНИКИ ЗА АРТЕФАКТАМИ.' },
  { title: 'ДОЛГ', desc: 'ЗАЩИТА МИРА ОТ ПОРОЖДЕНИЙ ЗОНЫ. ВОЕННАЯ ДИСЦИПЛИНА И ПОРЯДОК.' },
  { title: 'СВОБОДА', desc: 'ЗОНА — ОБЩЕЕ ДОСТОЯНИЕ. СВОБОДА ЛИЧНОСТИ И ДОСТУП К ЗНАНИЯМ.' }
]
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- ЛИНИЯ-ПАЗ -->
    <SectionDivider />

    <!-- pt-24 на мобилках ставит заголовок сразу под линию -->
    <div class="flex flex-col items-center gap-10 md:gap-20 w-full max-w-7xl pt-24 md:pt-48">
      <h2 class="text-4xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-center italic">
        АРХИВЫ ЗОНЫ
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
        <div v-for="item in factions" :key="item.title"
             class="p-6 md:p-10 border border-zinc-800 bg-zinc-950/60 rounded-[1.5rem] md:rounded-[2.5rem]
                    flex flex-col gap-4 hover:border-[#9241b8] transition-all duration-500 group">
          <h3 class="text-xl md:text-3xl font-capture text-red-700 group-hover:text-red-500 transition-colors uppercase">{{ item.title }}</h3>
          <p class="text-zinc-100 text-sm md:text-base font-sans font-black uppercase italic leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>