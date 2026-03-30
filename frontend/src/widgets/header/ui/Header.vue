<script setup lang="ts">
import logoSvg from '@shared/assets/images/logo.svg'
import { useNavStore } from '@entities/navigation'
const navStore = useNavStore()
</script>

<template>
  <header
    :class="[
      'absolute left-0 w-full flex justify-center xl:justify-start xl:left-10 2xl:left-16 z-20 pointer-events-none transition-all duration-700 ease-in-out',
      'top-4 sm:top-6 xl:top-10',
      navStore.activeSectionId === 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"
  >
    <div class="flex justify-center items-center p-0 pointer-events-auto h-[45px] sm:h-[65px] xl:h-[75px]">
      <img
        :src="logoSvg"
        class="drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500
               h-[clamp(70px,10vw,150px)] w-auto object-contain"
        alt="Last Zone"
      />
    </div>
  </header>
</template>