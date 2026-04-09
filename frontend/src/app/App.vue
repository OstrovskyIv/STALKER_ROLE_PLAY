<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoSvg from '@shared/assets/images/logo.svg'
import logoFull from '@shared/assets/images/logo-full.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'

interface AssetModule {
  default: string;
}

const isAppReady = ref(false)
const isPreloaderVisible = ref(true)
const isContentVisible = ref(false)

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

    const loader = document.getElementById('initial-loader')
    if (loader) loader.remove()

    isAppReady.value = true
    await nextTick()

    setTimeout(() => {
      isContentVisible.value = true
      setTimeout(() => {
        isPreloaderVisible.value = false
      }, 300)
    }, 1500)

    setTimeout(() => {
      const images = import.meta.glob<AssetModule>([
        '@shared/assets/images/ui/info/*.webp',
        '@shared/assets/images/ui/socials/*.webp',
        '@shared/assets/images/steps/*.webp',
        '@shared/assets/images/lor/*.webp',
        '@shared/assets/images/gallery/*.webp'
      ])

      Object.values(images).forEach(async (importFn) => {
        try {
          const mod = await importFn()
          const img = new Image()
          img.src = mod.default
        } catch { }
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
  >
    <MainBackground />
    <div class="relative z-10 w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>