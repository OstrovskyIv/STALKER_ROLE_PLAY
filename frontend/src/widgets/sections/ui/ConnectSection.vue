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
  <div class="w-full h-[100svh] flex flex-col items-center justify-start xl:justify-center p-4 md:p-10 relative overflow-hidden">
    <SectionDivider />

    <div class="flex flex-col items-center w-full max-w-7xl pt-[140px] md:pt-40 gap-8 md:gap-16 transition-all origin-top scale-[0.85] sm:scale-95 xl:scale-100">

      <h2 class="text-3xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] text-center italic">
        НАШИ СОЦИАЛЬНЫЕ СЕТИ
      </h2>

      <div class="w-full flex flex-col gap-6 md:gap-12 items-center">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 w-full max-w-4xl justify-items-center">
          <SocialCard
            v-for="(social, i) in mainSocials"
            :key="i"
            :img="social.img"
            :link="social.link"
          />
        </div>

        <div class="w-full flex justify-center pt-2">
          <SocialCard
            :img="boostyImg"
            :link="boostyLink"
            :isWide="true"
          />
        </div>
      </div>

    </div>
  </div>
</template>