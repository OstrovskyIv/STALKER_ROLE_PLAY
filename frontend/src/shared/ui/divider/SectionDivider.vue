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
        ? 'top-[100px] sm:top-[160px] xl:top-[160px]'
        : 'top-[50px] sm:top-[80px] xl:top-[100px]'
    ]"
  >
    <div class="h-[1px] flex-1 max-w-[20%] md:max-w-[30%] bg-gradient-to-r from-transparent via-white/80 to-white relative overflow-hidden">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
    <div class="shrink-0 flex items-center justify-center px-2 sm:px-4">
      <img :src="squareLogo" class="h-6 sm:h-10 xl:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] grayscale brightness-150 opacity-90" alt="LZ" />
    </div>
    <div class="h-[1px] flex-1 max-w-[20%] md:max-w-[30%] bg-gradient-to-l from-transparent via-white/80 to-white relative overflow-hidden">
      <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-pulse"></div>
    </div>
  </div>
</template>