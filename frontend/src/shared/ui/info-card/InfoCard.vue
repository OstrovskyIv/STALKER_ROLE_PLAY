<script setup lang="ts">
defineProps<{ title: string, desc: string, img: string }>()
</script>

<template>
  <!-- Карточки стали чуть шире на ПК (max-w-[280px]) -->
  <div class="group relative w-full max-w-[150px] md:max-w-[280px] aspect-square rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(146,65,184,0.4)]">

    <!-- Свечение обводки -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div class="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#9241b8_360deg)] animate-spin-slow"></div>
    </div>

    <div class="absolute inset-[1px] md:inset-[2px] bg-zinc-950 rounded-[1.1rem] md:rounded-[2.4rem] z-10 flex flex-col items-center justify-center p-2 md:p-6 text-center gap-1 md:gap-3">

      <!-- ИКОНКА: Теперь занимает до 70% высоты карточки -->
      <div class="relative w-20 h-20 md:w-36 md:h-36 flex items-center justify-center">
        <img
          :src="img"
          class="w-full h-full object-contain transition-all duration-700 group-hover:animate-counter-rotate drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          alt="icon"
        />
      </div>

      <div class="flex flex-col gap-0">
        <h3 class="text-[11px] md:text-2xl font-capture text-[#9241b8] uppercase leading-tight">{{ title }}</h3>
        <p class="text-[7px] md:text-[11px] font-sans font-black text-white/40 uppercase leading-none tracking-tighter">{{ desc }}</p>
      </div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10 z-0"></div>
  </div>
</template>