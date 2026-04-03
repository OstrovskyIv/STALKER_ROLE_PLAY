<script setup lang="ts">
defineProps<{
  img: string
  link: string
  isWide?: boolean
}>()
</script>

<template>
  <a :href="link" target="_blank"
     :class="[
       'group relative flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(146,65,184,0.4)]',
       isWide ? 'w-full max-w-[240px] md:max-w-[280px] h-[60px] md:h-[100px] rounded-full' : 'w-full max-w-[110px] sm:max-w-[140px] md:max-w-[220px] aspect-square rounded-[1.2rem] md:rounded-[2.5rem]'
     ]">

    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div class="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#9241b8_360deg)] animate-spin-slow"></div>
    </div>

    <div :class="[
      'absolute inset-[1.5px] md:inset-[2.5px] bg-zinc-950 z-10 flex items-center justify-center p-3 md:p-4',
      isWide ? 'rounded-full px-6' : 'rounded-[1.1rem] md:rounded-[2.4rem]'
    ]">
      <img
        :src="img"
        loading="lazy"
        class="w-full h-full object-contain transition-all duration-700 group-hover:animate-counter-rotate drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        alt="social icon"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10 z-0"></div>
  </a>
</template>