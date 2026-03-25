<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'
import bgImg from '@shared/assets/images/bg-main.webp'
import logoImg from '@shared/assets/images/logo.webp'
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

const route = useRoute()
const isAppReady = ref(false)

const isRulesPage = computed(() => route.path.includes('/rules'))

onMounted(async () => {
  try {
    await Promise.all([
      preloadImage(bgImg), preloadImage(logoImg), preloadImage(squareLogo),
      preloadImage(rulesImg), preloadImage(lorImg), preloadImage(infoImg),
      preloadImage(drawImg), preloadImage(shopImg), preloadImage(voteImg),
      preloadImage(discordImg), preloadImage(vkImg), preloadImage(youtubeImg),
      preloadImage(tiktokImg), preloadImage(boostyImg)
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

  <div v-if="isAppReady" class="relative w-full h-[100svh] overflow-hidden bg-black">
    <MainBackground />

    <Navbar v-if="!isRulesPage" />

    <div class="relative z-10 w-full h-[100svh] overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
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