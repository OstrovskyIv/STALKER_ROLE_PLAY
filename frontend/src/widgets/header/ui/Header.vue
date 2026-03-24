<script setup lang="ts">
import logoImg from '@shared/assets/images/logo.webp'
import { useNavStore } from '@entities/navigation'
const navStore = useNavStore()
</script>

<template>
  <header
    :class="[
      'absolute left-0 w-full flex justify-center xl:justify-start xl:left-12 z-20 pointer-events-none transition-all duration-500 ease-out',
      'top-4 xl:top-0',
      navStore.activeSectionId === 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"
  >
    <img
      :src="logoImg"
      class="h-24 sm:h-32 md:h-40 xl:h-48 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] pointer-events-auto transition-all"
      alt="Last Zone"
    />
  </header>
</template>