<script setup lang="ts">
import squareLogo from '@shared/assets/images/square-logo.webp'
import { useNavStore } from '@entities/navigation'
const navStore = useNavStore()
</script>

<template>
  <div
    :class="[
      'absolute left-0 w-full flex items-center justify-center gap-4 px-4 pointer-events-none transition-all duration-500 ease-in-out z-10',
      navStore.activeSectionId === 'home'
        ? 'top-[175px] sm:top-[260px] xl:top-[160px]'
        : 'top-[75px] xl:top-[160px]'
    ]"
  >
    <div class="h-[1px] flex-1 max-w-[25%] md:max-w-[30%] bg-gradient-to-r from-transparent via-white/80 to-white relative overflow-hidden">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
    <div class="shrink-0 flex items-center justify-center animate-logo-grow px-2">
      <img :src="squareLogo" class="h-8 md:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] grayscale brightness-150 opacity-90" alt="LZ" />
    </div>
    <div class="h-[1px] flex-1 max-w-[25%] md:max-w-[30%] bg-gradient-to-l from-transparent via-white/80 to-white relative overflow-hidden">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes logo-grow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
.animate-logo-grow { animation: logo-grow 3s infinite ease-in-out; }
</style>