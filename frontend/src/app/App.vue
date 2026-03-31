<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { MainBackground } from '@widgets/main-background'
import { Preloader } from '@widgets/preloader'
import noiseVideo from '@shared/assets/video/terminal-noise.mp4'

import bgImg from '@shared/assets/images/bg-main.webp'
import logoSvg from '@shared/assets/images/logo.svg'
import logoFull from '@shared/assets/images/logo-full.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'
import step1 from '@shared/assets/images/step1.webp'
import step2 from '@shared/assets/images/step2.webp'
import step3 from '@shared/assets/images/step3.webp'
import step4 from '@shared/assets/images/step4.webp'
import step5 from '@shared/assets/images/step5.webp'
import rulesImg from '@shared/assets/images/rules.webp'
import infoImg from '@shared/assets/images/information.webp'
import drawImg from '@shared/assets/images/draw.webp'
import shopImg from '@shared/assets/images/shop.webp'
import voteImg from '@shared/assets/images/vote.webp'
import discordImg from '@shared/assets/images/discord.webp'
import vkImg from '@shared/assets/images/vk.webp'
import youtubeImg from '@shared/assets/images/youtube.webp'
import tiktokImg from '@shared/assets/images/tiktok.webp'
import boostyImg from '@shared/assets/images/boosty.webp'

import lor1 from '@shared/assets/images/lor/lor1.webp'
import lor2 from '@shared/assets/images/lor/lor2.webp'
import lor3 from '@shared/assets/images/lor/lor3.webp'
import lor4 from '@shared/assets/images/lor/lor4.webp'
import lor5 from '@shared/assets/images/lor/lor5.webp'
import lor6 from '@shared/assets/images/lor/lor6.webp'
import lor7 from '@shared/assets/images/lor/lor7.webp'
import lor8 from '@shared/assets/images/lor/lor8.webp'
import lor9 from '@shared/assets/images/lor/lor9.webp'
import lor10 from '@shared/assets/images/lor/lor10.webp'
import lor11 from '@shared/assets/images/lor/lor11.webp'

const route = useRoute()
const isAppReady = ref(false)
const isPreloaderVisible = ref(true)
const isContentVisible = ref(false)
const isLongPage = computed(() => route.path.includes('/rules') || route.path.includes('/lor'))

const preloadImageStrict = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = async () => {
      if ('decode' in img) {
        try { await img.decode() } catch { /* ignore */ }
      }
      resolve()
    }
    img.onerror = () => resolve()
  })
}

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
    await preloadImageStrict(logoFull)

    await Promise.all([
      preloadImageStrict(bgImg),
      preloadVideoStrict(noiseVideo),
      preloadImageStrict(logoSvg),
      preloadImageStrict(squareLogo),
      preloadImageStrict(step1),
      preloadImageStrict(step2),
      preloadImageStrict(step3),
      preloadImageStrict(step4),
      preloadImageStrict(step5),
      preloadImageStrict(discordImg),
      preloadImageStrict(vkImg),
      preloadImageStrict(youtubeImg),
      preloadImageStrict(tiktokImg),
      preloadImageStrict(boostyImg),
      preloadImageStrict(rulesImg),
      preloadImageStrict(infoImg),
      preloadImageStrict(drawImg),
      preloadImageStrict(shopImg),
      preloadImageStrict(voteImg)
    ])

    document.getElementById('initial-loader')?.remove()

    isAppReady.value = true
    await nextTick()

    setTimeout(() => {
      isContentVisible.value = true
      setTimeout(() => {
        isPreloaderVisible.value = false
      }, 300)
    }, 2500)

    setTimeout(() => {
      const lor: string[] = [lor1, lor2, lor3, lor4, lor5, lor6, lor7, lor8, lor9, lor10, lor11]
      lor.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }, 12000)

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