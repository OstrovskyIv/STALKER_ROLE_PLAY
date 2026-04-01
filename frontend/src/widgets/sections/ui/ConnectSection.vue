<script setup lang="ts">
import { SectionDivider, SocialCard } from '@shared/ui'
import discordImg from '@shared/assets/images/discord.webp'
import vkImg from '@shared/assets/images/vk.webp'
import youtubeImg from '@shared/assets/images/youtube.webp'
import tiktokImg from '@shared/assets/images/tiktok.webp'
import boostyImg from '@shared/assets/images/boosty.webp'

const mainSocials = [
  { img: discordImg, link: 'https://discord.gg/last-zone' },
  { img: vkImg, link: 'https://vk.com/lastzonerp' },
  { img: youtubeImg, link: 'https://youtube.com/@lastzone-s2v?si=26eC9FJvArmrLAFw' },
  { img: tiktokImg, link: 'https://www.tiktok.com/@last_zone_stalker?_r=1&_t=ZS-94eUkgWfaIZ' }
]
const boostyLink = 'https://boosty.to/last_zone_rp'
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <!-- ИЗМЕНЕНО: h-[75px] для мобилок -->
    <div class="w-full h-[75px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none transition-all duration-500"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 gap-10 md:gap-20 2xl:gap-32">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none text-center">
        НАШИ СОЦИАЛЬНЫЕ СЕТИ
      </h2>

      <div class="w-full max-w-7xl flex flex-col gap-8 md:gap-16 items-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10 w-full max-w-5xl justify-items-center px-2">
          <SocialCard v-for="(social, i) in mainSocials" :key="i" :img="social.img" :link="social.link" />
        </div>
        <div class="w-full flex justify-center px-4">
          <SocialCard :img="boostyImg" :link="boostyLink" :isWide="true" />
        </div>
      </div>
    </div>
  </section>
</template>