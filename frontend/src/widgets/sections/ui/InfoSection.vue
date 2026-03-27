<script setup lang="ts">
import { ref } from 'vue'
import { SectionDivider, InfoCard } from '@shared/ui'
import rulesImg from '@shared/assets/images/rules.webp'
import lorImg from '@shared/assets/images/lor.webp'
import guidesImg from '@shared/assets/images/information.webp'
import drawImg from '@shared/assets/images/draw.webp'
import shopImg from '@shared/assets/images/shop.webp'
import voteImg from '@shared/assets/images/vote.webp'

interface InfoBlock {
  title: string
  desc: string
  img: string
}

const isVotingOpen = ref(false)

const infoBlocks: InfoBlock[] = [
  { title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg },
  { title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg },
  { title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg },
  { title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg },
  { title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg },
  { title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg }
]

const rulesUrl = `${import.meta.env.BASE_URL}rules`.replace(/\/+/g, '/')
</script>

<template>
  <section class="w-full min-h-screen flex flex-col items-center relative snap-start shrink-0">
    <SectionDivider />

    <div class="h-[80px] sm:h-[160px] xl:h-[160px] 2xl:h-[200px] w-full shrink-0"></div>

    <div class="w-full flex-1 flex flex-col items-center justify-center p-2">
      <h2 class="text-2xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic mb-4 md:mb-12">ИНФОРМАЦИЯ</h2>

      <div class="w-full max-w-7xl flex flex-col gap-3 md:gap-10 items-center">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 w-full justify-items-center">
          <template v-for="block in infoBlocks.slice(0, 4)" :key="block.title">
            <a v-if="block.title === 'ПРАВИЛА'" :href="rulesUrl" target="_blank" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <div v-else class="w-full flex justify-center cursor-default">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </div>
          </template>
        </div>

        <div class="grid grid-cols-2 gap-3 md:gap-10 w-full lg:max-w-2xl justify-items-center">
          <a v-if="infoBlocks[4]" href="https://last-zone-shop.ru" target="_blank" class="w-full flex justify-center">
            <InfoCard :title="infoBlocks[4].title" :desc="infoBlocks[4].desc" :img="infoBlocks[4].img" />
          </a>
          <div v-if="infoBlocks[5]" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
            <InfoCard :title="infoBlocks[5].title" :desc="infoBlocks[5].desc" :img="infoBlocks[5].img" :isActive="isVotingOpen" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>