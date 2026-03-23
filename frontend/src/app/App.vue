<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoImg from '@shared/assets/images/logo.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'
import step1 from '@shared/assets/images/step1.webp'
import step2 from '@shared/assets/images/step2.webp'
import step3 from '@shared/assets/images/step3.webp'
import step4 from '@shared/assets/images/step4.webp'
import step5 from '@shared/assets/images/step5.webp'

const isAppReady = ref(false)

onMounted(async () => {
  try {
    await Promise.all([
      preloadImage(bgImg),
      preloadImage(logoImg),
      preloadImage(squareLogo),
      preloadImage(step1),
      preloadImage(step2),
      preloadImage(step3),
      preloadImage(step4),
      preloadImage(step5)
    ])
  } catch (error) {
    console.error('Ошибка загрузки ресурсов:', error)
  } finally {
    setTimeout(() => {
      isAppReady.value = true
    }, 1500)
  }
})
</script>

<template>
  <Transition name="fade">
    <Preloader v-if="!isAppReady" />
  </Transition>

  <div v-if="isAppReady" class="relative w-full h-full">
    <MainBackground />
    <Navbar />
    <div class="relative z-10 w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
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