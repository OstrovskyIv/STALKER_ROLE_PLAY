<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { MainBackground } from '@widgets/main-background'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoSvg from '@shared/assets/images/logo.svg'
import logoFull from '@shared/assets/images/logo-full.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'

const route = useRoute()
const isAppReady = ref(false)
const isPreloaderVisible = ref(true)
const isContentVisible = ref(false)
const isLongPage = computed(() => route.path.includes('/rules') || route.path.includes('/lor'))

const preloadCritical = async () => {
  const assets = [bgImg, logoSvg, squareLogo]
  await Promise.all(assets.map(src => {
    const img = new Image()
    img.src = src
    return img.decode ? img.decode() : preloadImage(src)
  }))
}

onMounted(async () => {
  try {
    await preloadImage(logoFull)
    await preloadCritical()

    document.getElementById('initial-loader')?.remove()
    isAppReady.value = true
    await nextTick()

    setTimeout(() => {
      isContentVisible.value = true
      setTimeout(() => {
        isPreloaderVisible.value = false
      }, 300)
    }, 1500)
  } catch {
    isAppReady.value = true
    isPreloaderVisible.value = false
    isContentVisible.value = true
  }
})
</script>

<template>
  <Transition name="fade">
    <Preloader v-if="isPreloaderVisible" />
  </Transition>

  <div
    v-if="isAppReady"
    :class="[
      'relative w-full h-screen bg-black overflow-y-auto scroll-smooth no-scrollbar transition-opacity duration-1000 ease-in-out',
      isContentVisible ? 'opacity-100' : 'opacity-[0.01]'
    ]"
    :style="!isLongPage ? 'scroll-snap-type: y mandatory' : ''"
  >
    <MainBackground />
    <div class="relative z-10 w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.fade-leave-active { transition: opacity 1.2s ease-in-out; }
.fade-leave-to { opacity: 0; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>