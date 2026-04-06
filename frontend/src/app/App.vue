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

import rulesImg from '@shared/assets/images/ui/info/rules.webp'
import infoImg from '@shared/assets/images/ui/info/information.webp'
import drawImg from '@shared/assets/images/ui/info/draw.webp'
import shopImg from '@shared/assets/images/ui/info/shop.webp'
import voteImg from '@shared/assets/images/ui/info/vote.webp'
import priceImg from '@shared/assets/images/ui/info/price.webp'
import lorImg from '@shared/assets/images/ui/info/lor.webp'

import discordImg from '@shared/assets/images/ui/socials/discord.webp'
import vkImg from '@shared/assets/images/ui/socials/vk.webp'
import youtubeImg from '@shared/assets/images/ui/socials/youtube.webp'
import tiktokImg from '@shared/assets/images/ui/socials/tiktok.webp'
import boostyImg from '@shared/assets/images/ui/socials/boosty.webp'

import step1 from '@shared/assets/images/steps/step1.webp'
import step2 from '@shared/assets/images/steps/step2.webp'
import step3 from '@shared/assets/images/steps/step3.webp'
import step4 from '@shared/assets/images/steps/step4.webp'
import step5 from '@shared/assets/images/steps/step5.webp'

import crown1 from '@shared/assets/images/ui/draws/crown_1.gif'
import crown2 from '@shared/assets/images/ui/draws/crown_2.gif'
import crown3 from '@shared/assets/images/ui/draws/crown_3.gif'
import coinImg from '@shared/assets/images/ui/draws/coin.webp'

const route = useRoute()
const isAppReady = ref(false)
const isPreloaderVisible = ref(true)
const isContentVisible = ref(false)

const isLongPage = computed(() =>
  route.path.includes('/rules') ||
  route.path.includes('/lor') ||
  route.path.includes('/shop') ||
  route.path.includes('/draws')
)

interface AssetModule {
  default: string;
}

const preloadCritical = async () => {
  const assets = [
    bgImg, logoSvg, squareLogo,
    rulesImg, infoImg, drawImg, shopImg, voteImg, priceImg, lorImg,
    discordImg, vkImg, youtubeImg, tiktokImg, boostyImg,
    step1, step2, step3, step4, step5,
    crown1, crown2, crown3, coinImg
  ]

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
        '@shared/assets/images/lor/*.webp',
        '@shared/assets/images/gallery/*.webp',
        '@shared/assets/images/shop/*.webp'
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