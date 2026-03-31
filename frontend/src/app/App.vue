<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'
import bgImg from '@shared/assets/images/bg-main.webp'
import logoSvg from '@shared/assets/images/logo.svg'
import logoFull from '@shared/assets/images/logo-full.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'
import rulesImg from '@shared/assets/images/rules.webp'
import lorImg from '@shared/assets/images/lor.webp'
import infoImg from '@shared/assets/images/information.webp'
import drawImg from '@shared/assets/images/draw.webp'
import shopImg from '@shared/assets/images/shop.webp'
import voteImg from '@shared/assets/images/vote.webp'
import discordImg from '@shared/assets/images/discord.webp'
import vkImg from '@shared/assets/images/vk.webp'
import youtubeImg from '@shared/assets/images/youtube.webp'
import tiktokImg from '@shared/assets/images/tiktok.webp'
import boostyImg from '@shared/assets/images/boosty.webp'

const isAppReady = ref(false)

onMounted(async () => {
  try {
    await Promise.all([
      preloadImage(bgImg), preloadImage(logoSvg), preloadImage(logoFull),
      preloadImage(squareLogo), preloadImage(rulesImg), preloadImage(lorImg),
      preloadImage(infoImg), preloadImage(drawImg), preloadImage(shopImg),
      preloadImage(voteImg), preloadImage(discordImg), preloadImage(vkImg),
      preloadImage(youtubeImg), preloadImage(tiktokImg), preloadImage(boostyImg)
    ])
  } finally {
    setTimeout(() => { isAppReady.value = true }, 500)
  }
})
</script>

<template>
  <Transition name="fade">
    <Preloader v-if="!isAppReady" />
  </Transition>

  <div v-if="isAppReady" class="relative w-full h-screen bg-black overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
    <MainBackground />

    <div class="relative z-10 w-full">
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