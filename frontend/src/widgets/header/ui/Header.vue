<script setup lang="ts">
import logoImg from '@shared/assets/images/logo.webp'
import { useNavStore } from '@entities/navigation'
const navStore = useNavStore()
</script>

<template>
  <header
    :class="[
      'absolute left-0 w-full flex justify-center xl:justify-start xl:left-6 2xl:left-12 z-20 pointer-events-none transition-all duration-500 ease-out',
      'top-0',
      navStore.activeSectionId === 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"
  >
    <div class="flex justify-center w-full xl:w-auto p-4 sm:p-6">
      <img
        :src="logoImg"
        class="h-20 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-48 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] pointer-events-auto transition-all"
        alt="Last Zone"
      />
    </div>
  </header>
</template>