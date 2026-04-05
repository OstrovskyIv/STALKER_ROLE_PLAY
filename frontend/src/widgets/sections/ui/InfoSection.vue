<script setup lang="ts">
import { ref } from 'vue'
import { SectionDivider, InfoCard } from '@shared/ui'
import rulesImg from '@shared/assets/images/ui/info/rules.webp'
import lorImg from '@shared/assets/images/ui/info/lor.webp'
import guidesImg from '@shared/assets/images/ui/info/information.webp'
import drawImg from '@shared/assets/images/ui/info/draw.webp'
import shopImg from '@shared/assets/images/ui/info/shop.webp'
import voteImg from '@shared/assets/images/ui/info/vote.webp'
import priceImg from '@shared/assets/images/ui/info/price.webp'

interface InfoBlock {
  title: string;
  desc: string;
  img: string;
}

const isVotingOpen = ref(false)

const infoBlocks: InfoBlock[] = [
  { title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg },
  { title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg },
  { title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg },
  { title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg },
  { title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg },
  { title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg },
  { title: 'ПРАЙС-ЛИСТ', desc: 'ЦЕНЫ НА УСЛУГИ', img: priceImg }
]

const rulesUrl = `${import.meta.env.BASE_URL}rules`.replace(/\/+/g, '/')
const lorUrl = `${import.meta.env.BASE_URL}lor`.replace(/\/+/g, '/')
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <div class="w-full h-[75px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-start lg:justify-center p-4 gap-6 md:gap-20 2xl:gap-32 overflow-y-auto no-scrollbar">

      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none shrink-0 pt-4 md:pt-0">ИНФОРМАЦИЯ</h2>

      <div class="w-full max-w-7xl flex flex-col gap-4 md:gap-10 items-center 2xl:-translate-y-12 transition-transform duration-500 pb-10 md:pb-0">

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 w-full justify-items-center">

          <template v-for="(block, index) in infoBlocks.slice(0, 4)" :key="block.title">
            <a v-if="index === 0" :href="rulesUrl" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <a v-else-if="index === 1" :href="lorUrl" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <div v-else class="w-full flex justify-center cursor-default">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </div>
          </template>

          <template v-if="infoBlocks[4]">
            <a href="https://last-zone-shop.ru" target="_blank" class="w-full lg:hidden flex justify-center">
              <InfoCard :title="infoBlocks[4].title" :desc="infoBlocks[4].desc" :img="infoBlocks[4].img" />
            </a>
          </template>
          <template v-if="infoBlocks[5]">
            <div class="w-full lg:hidden flex justify-center" @click="isVotingOpen = !isVotingOpen">
              <InfoCard :title="infoBlocks[5].title" :desc="infoBlocks[5].desc" :img="infoBlocks[5].img" :isActive="isVotingOpen">
                <template #content v-if="isVotingOpen">
                  <div class="flex flex-col w-full h-full justify-center items-center gap-1 p-1">
                    <a href="https://wargm.ru/server/72966" target="_blank" @click.stop class="w-full py-1.5 bg-[#9241b8] text-white font-capture text-[8px] uppercase rounded shadow-lg text-center">WARGM</a>
                    <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" @click.stop class="w-full py-1.5 bg-[#9241b8] text-white font-capture text-[8px] uppercase rounded shadow-lg text-center">MONITOR</a>
                  </div>
                </template>
              </InfoCard>
            </div>
          </template>

          <div v-if="infoBlocks[6]" class="w-full lg:hidden col-span-2 flex justify-center">
            <InfoCard :title="infoBlocks[6].title" :desc="infoBlocks[6].desc" :img="infoBlocks[6].img" />
          </div>
        </div>

        <div class="hidden lg:grid grid-cols-3 gap-4 md:gap-10 w-full lg:max-w-5xl justify-items-center">
          <a v-if="infoBlocks[4]" href="https://last-zone-shop.ru" target="_blank" class="w-full flex justify-center">
            <InfoCard :title="infoBlocks[4].title" :desc="infoBlocks[4].desc" :img="infoBlocks[4].img" />
          </a>
          <div v-if="infoBlocks[5]" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
            <InfoCard :title="infoBlocks[5].title" :desc="infoBlocks[5].desc" :img="infoBlocks[5].img" :isActive="isVotingOpen">
              <template #content v-if="isVotingOpen">
                <div class="flex flex-col w-full h-full justify-center items-center gap-2 p-1">
                  <a href="https://wargm.ru/server/72966" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[9px] md:text-lg uppercase rounded-lg shadow-lg text-center">WARGM.RU</a>
                  <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[9px] md:text-lg uppercase rounded-lg shadow-lg text-center">MONITORING</a>
                </div>
              </template>
            </InfoCard>
          </div>
          <div v-if="infoBlocks[6]" class="w-full flex justify-center cursor-pointer">
            <InfoCard :title="infoBlocks[6].title" :desc="infoBlocks[6].desc" :img="infoBlocks[6].img" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>