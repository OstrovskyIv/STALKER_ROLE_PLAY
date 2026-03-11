<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Header } from '@widgets/header'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoImg from '@shared/assets/images/logo.webp'

const isAppReady = ref(false)

onMounted(async () => {
  try {
    await Promise.all([
      preloadImage(bgImg),
      preloadImage(logoImg)
    ])
  } catch (error) {
    console.error('Ошибка при загрузке ресурсов:', error)
  } finally {
    setTimeout(() => {
      isAppReady.value = true
    }, 1000)
  }
})
</script>

<template>
  <Transition name="fade">
    <Preloader v-if="!isAppReady" />
  </Transition>

  <div v-if="isAppReady" class="relative w-full h-screen overflow-hidden">
    <MainBackground />
    <Header />
    <Navbar />

    <div class="relative z-10 w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth pt-10 xl:pt-0">
      <router-view />
    </div>
  </div>
</template>

<style>
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>