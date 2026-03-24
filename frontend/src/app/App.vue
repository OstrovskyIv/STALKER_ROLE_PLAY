<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoImg from '@shared/assets/images/logo.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'

const isAppReady = ref(false)

onMounted(async () => {
  try {
    await Promise.all([
      preloadImage(bgImg), preloadImage(logoImg), preloadImage(squareLogo)
    ])
  } finally {
    setTimeout(() => { isAppReady.value = true }, 1500)
  }
})
</script>

<template>
  <Transition name="fade">
    <Preloader v-if="!isAppReady" />
  </Transition>

  <div v-if="isAppReady" class="relative w-full h-[100dvh] overflow-hidden bg-black">
    <MainBackground />
    <Navbar />

    <div class="relative z-10 w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.fade-leave-active { transition: opacity 0.8s ease; }
.fade-leave-to { opacity: 0; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>