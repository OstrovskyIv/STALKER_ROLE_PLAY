<script setup lang="ts">
import { SectionDivider, InfoCard } from '@shared/ui'
import rulesImg from '@shared/assets/images/rules.webp'
import lorImg from '@shared/assets/images/lor.webp'
import guidesImg from '@shared/assets/images/information.webp'
import drawImg from '@shared/assets/images/draw.webp'
import shopImg from '@shared/assets/images/shop.webp'
import voteImg from '@shared/assets/images/vote.webp'

const infoBlocks = [
  { title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg },
  { title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg },
  { title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg },
  { title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg },
  { title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg },
  { title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg }
]
</script>

<template>
  <div class="w-full h-[100svh] flex flex-col items-center justify-start xl:justify-center p-4 md:p-10 relative overflow-hidden">
    <SectionDivider />

    <div class="flex flex-col items-center w-full max-w-7xl pt-[160px] md:pt-40 gap-4 md:gap-10 transition-all origin-top scale-[0.82] sm:scale-90 md:scale-100">

      <h2 class="text-4xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic">
        ИНФОРМАЦИЯ
      </h2>

      <div class="w-full flex flex-col gap-4 md:gap-10 items-center">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 w-full justify-items-center">
          <InfoCard
            v-for="block in infoBlocks.slice(0, 4)"
            :key="block.title"
            :title="block.title"
            :desc="block.desc"
            :img="block.img"
          />
        </div>

        <div class="grid grid-cols-2 gap-4 md:gap-10 w-full lg:max-w-2xl justify-items-center">
          <InfoCard
            v-for="block in infoBlocks.slice(4, 6)"
            :key="block.title"
            :title="block.title"
            :desc="block.desc"
            :img="block.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>