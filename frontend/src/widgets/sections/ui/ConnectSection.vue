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
  <section class="w-full min-h-screen flex flex-col items-center relative snap-start shrink-0">
    <SectionDivider />

    <div class="h-[80px] sm:h-[160px] xl:h-[160px] 2xl:h-[200px] w-full shrink-0"></div>

    <div class="w-full flex-1 flex flex-col items-center justify-center p-2">
      <h2 class="text-2xl md:text-7xl font-capture uppercase text-white text-center italic mb-6 md:mb-20">
        НАШИ СОЦИАЛЬНЫЕ СЕТИ
      </h2>

      <div class="w-full max-w-7xl flex flex-col gap-6 md:gap-12 items-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 w-full max-w-5xl justify-items-center px-4">
          <SocialCard v-for="(social, i) in mainSocials" :key="i" :img="social.img" :link="social.link" />
        </div>
        <div class="w-full flex justify-center px-4">
          <SocialCard :img="boostyImg" :link="boostyLink" :isWide="true" />
        </div>
      </div>
    </div>
  </section>
</template>