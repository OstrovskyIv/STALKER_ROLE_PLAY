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
    <SectionDivider />
    <div class="h-[80px] sm:h-[120px] xl:h-[140px] w-full shrink-0"></div>
    <div class="w-full flex-1 flex flex-col items-center justify-center p-4">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white text-center italic mb-6 md:mb-12">
        НАШИ СОЦИАЛЬНЫЕ СЕТИ
      </h2>
      <div class="w-full max-w-7xl flex flex-col gap-4 sm:gap-8 items-center">
        <!-- На мобилках уменьшил gap и padding -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-10 w-full max-w-4xl justify-items-center px-2">
          <SocialCard v-for="(social, i) in mainSocials" :key="i" :img="social.img" :link="social.link" />
        </div>
        <div class="w-full flex justify-center px-4">
          <SocialCard :img="boostyImg" :link="boostyLink" :isWide="true" />
        </div>
      </div>
    </div>
  </section>
</template>