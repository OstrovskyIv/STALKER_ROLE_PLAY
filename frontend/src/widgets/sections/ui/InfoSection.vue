<script setup lang="ts">
const factions = [
  { title: 'ОДИНОЧКИ', desc: 'Сталкеры, исследующие Зону на свой страх и риск. Свободные охотники за артефактами.' },
  { title: 'ДОЛГ', desc: 'Военизированная группировка. Цель — уничтожение Зоны и защита мира от её заразы.' },
  { title: 'СВОБОДА', desc: 'Анархисты и сорвиголовы. Считают Зону даром человечеству, который нельзя скрывать.' }
]
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 md:p-20 gap-12 md:gap-20">
    <!-- Обычный текст с тенями вместо ShinyText -->
    <h2 class="text-4xl md:text-7xl font-capture uppercase text-center tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
      АРХИВЫ ГРУППИРОВОК
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
      <div v-for="item in factions" :key="item.title"
           class="p-8 md:p-12 border border-zinc-800 bg-zinc-950/60 rounded-[2rem] flex flex-col gap-6
                  hover:border-red-600 transition-all duration-500 group shadow-2xl">
        <h3 class="text-2xl md:text-3xl font-capture text-red-700 group-hover:text-red-500 transition-colors">{{ item.title }}</h3>
        <p class="text-zinc-500 text-sm md:text-base font-mono leading-relaxed italic">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>