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
  id: string;
  title: string;
  desc: string;
  img: string;
  link?: string;
  isExternal?: boolean;
}

const isVotingOpen = ref(false)

const allBlocks: InfoBlock[] = [
  { id: 'rules', title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg, link: '/rules' },
  { id: 'lor', title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg, link: '/lor' },
  { id: 'guides', title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg, link: '/guides' },
  { id: 'draws', title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg, link: '/draws' },
  { id: 'donat', title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg, link: 'https://last-zone-shop.ru', isExternal: true },
  { id: 'vote', title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg },
  { id: 'price', title: 'ПРАЙС-ЛИСТ', desc: 'ВООРУЖЕНИЕ В ТРЕЙДЕР', img: priceImg, link: '/shop' }
]
</script>

<template>
  <section class="w-full min-h-screen flex flex-col items-center relative snap-start shrink-0 bg-transparent overflow-x-hidden">

    <div class="w-full h-[75px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none transition-all duration-500"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 py-12 md:py-20 gap-10 md:gap-20 2xl:gap-32">

      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none text-center relative z-10">
        ИНФОРМАЦИЯ
      </h2>

      <div class="w-full max-w-7xl flex items-center justify-center">
        <div class="flex flex-wrap justify-center gap-4 md:gap-10 2xl:gap-14 w-full">

          <div v-for="block in allBlocks" :key="block.id"
               class="flex justify-center w-[calc(50%-1rem)] lg:w-[calc(25%-3rem)] min-w-[130px] md:min-w-[240px]">

            <router-link v-if="block.link && !block.isExternal" :to="block.link" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </router-link>

            <a v-else-if="block.isExternal" :href="block.link" target="_blank" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>

            <div v-else-if="block.id === 'vote'" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" :isActive="isVotingOpen">
                <template #content v-if="isVotingOpen">
                  <div class="flex flex-col w-full h-full justify-center items-center gap-2 p-1">
                    <a href="https://wargm.ru/server/72966" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[10px] md:text-[12px] rounded uppercase shadow-lg hover:bg-[#a85cd4] transition-colors">WARGM</a>
                    <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[10px] md:text-[12px] rounded uppercase shadow-lg hover:bg-[#a85cd4] transition-colors">MONITOR</a>
                  </div>
                </template>
              </InfoCard>
            </div>

            <InfoCard v-else :title="block.title" :desc="block.desc" :img="block.img" />

          </div>
        </div>
      </div>
    </div>

    <div class="h-[10vh] md:h-[15vh] w-full shrink-0"></div>
  </section>
</template>

<style scoped>
section { padding: 0 !important; }
</style>