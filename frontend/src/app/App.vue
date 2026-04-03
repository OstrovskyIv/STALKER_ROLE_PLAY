<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { MainBackground } from '@widgets/main-background'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'
import noiseVideo from '@shared/assets/video/terminal-noise.mov'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoSvg from '@shared/assets/images/logo.svg'
import logoFull from '@shared/assets/images/logo-full.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'

interface AssetModule {
  default: string;
}

const route = useRoute()
const isAppReady = ref(false)
const isPreloaderVisible = ref(true)
const isContentVisible = ref(false)
const isLongPage = computed(() => route.path.includes('/rules') || route.path.includes('/lor'))

const preloadVideoStrict = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.src = src
    video.preload = 'auto'
    video.oncanplaythrough = () => resolve()
    video.onerror = () => resolve()
  })
}

onMounted(async () => {
  try {
    await preloadImage(logoFull)

    await Promise.all([
      preloadImage(bgImg),
      preloadImage(logoSvg),
      preloadImage(squareLogo),
      preloadVideoStrict(noiseVideo)
    ])

    document.getElementById('initial-loader')?.remove()
    isAppReady.value = true
    await nextTick()

    setTimeout(() => {
      isContentVisible.value = true
      setTimeout(() => {
        isPreloaderVisible.value = false
      }, 300)
    }, 1500)

    setTimeout(() => {
      const secondaryAssets = import.meta.glob<AssetModule>([
        '@shared/assets/images/*.webp',
        '@shared/assets/images/lor/*.webp',
        '@shared/assets/images/gallery/*.webp'
      ])

      Object.values(secondaryAssets).forEach(async (importFn) => {
        const mod = await importFn()
        const img = new Image()
        img.src = mod.default
      })
    }, 5000)

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