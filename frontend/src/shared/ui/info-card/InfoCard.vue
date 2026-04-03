<script setup lang="ts">
defineProps<{
  title: string,
  desc: string,
  img: string,
  isActive?: boolean
}>()
</script>

<template>
  <div :class="[
    'group relative w-full max-w-[130px] md:max-w-[240px] aspect-square rounded-[1rem] md:rounded-[2.2rem] overflow-hidden cursor-pointer transition-all duration-500',
    isActive ? 'scale-105 shadow-[0_0_40px_rgba(146,65,184,0.4)]' : 'hover:scale-105 hover:shadow-[0_0_40px_rgba(146,65,184,0.3)]'
  ]">

    <div :class="['absolute inset-0 transition-opacity duration-500', isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100']">
      <div class="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#9241b8_360deg)] animate-spin-slow"></div>
    </div>

    <div class="absolute inset-[1px] md:inset-[2px] bg-zinc-950 rounded-[0.9rem] md:rounded-[2.1rem] z-10 flex flex-col items-center justify-center p-2 md:p-5 text-center gap-1 md:gap-3">
      <slot name="content">
        <div class="relative w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
          <img :src="img" loading="lazy" class="w-full h-full object-contain transition-all duration-700 group-hover:animate-counter-rotate drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" alt="icon" />
        </div>

        <div class="flex flex-col gap-0">
          <h3 class="text-[10px] md:text-2xl font-capture text-[#9241b8] uppercase leading-none tracking-wider">{{ title }}</h3>
          <p class="text-[7px] md:text-[12px] font-sans font-black text-white uppercase leading-tight opacity-70">{{ desc }}</p>
        </div>
      </slot>
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10 z-0"></div>
  </div>
</template>