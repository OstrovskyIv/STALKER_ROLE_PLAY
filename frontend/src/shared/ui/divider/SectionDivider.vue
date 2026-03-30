<script setup lang="ts">
import squareLogo from '@shared/assets/images/square-logo.webp'
import { useNavStore } from '@entities/navigation'
const navStore = useNavStore()
</script>

<template>
  <div
    :class="[
      'absolute left-0 w-full flex items-center justify-center gap-4 px-4 pointer-events-none z-10 transition-all duration-500 ease-in-out',
      navStore.activeSectionId === 'home'
        ? 'top-[145px] sm:top-[220px] xl:top-[140px]'
        : 'top-[75px] xl:top-[120px]'
    ]"
  >
    <div class="h-[1px] flex-1 max-w-[15%] sm:max-w-[25%] md:max-w-[30%] bg-gradient-to-r from-transparent via-white/80 to-white relative overflow-hidden transition-all">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
    <div class="shrink-0 flex items-center justify-center animate-logo-grow px-2 sm:px-4">
      <img :src="squareLogo" class="h-6 sm:h-10 xl:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] grayscale brightness-150 opacity-90" alt="LZ" />
    </div>
    <div class="h-[1px] flex-1 max-w-[15%] sm:max-w-[25%] md:max-w-[30%] bg-gradient-to-l from-transparent via-white/80 to-white relative overflow-hidden transition-all">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes logo-grow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
.animate-logo-grow { animation: logo-grow 3s infinite ease-in-out; }
</style>