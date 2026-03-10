<script setup lang="ts">
import logoImg from '@shared/assets/images/logo.webp'
</script>

<template>
  <header class="relative xl:absolute top-0 left-0 w-full flex justify-center xl:justify-start p-6 sm:p-8 xl:p-10 z-20 pointer-events-none">
    <img
      :src="logoImg"
      class="h-24 sm:h-32 md:h-40 xl:h-44 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] pointer-events-auto transition-all duration-500"
      alt="Last Zone"
    />
  </header>
</template>
