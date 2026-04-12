<script setup lang="ts">
import { ref, computed } from 'vue'
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

// Генерируем URL для всех страниц проекта
const rulesUrl = `${import.meta.env.BASE_URL}rules`.replace(/\/+/g, '/')
const lorUrl = `${import.meta.env.BASE_URL}lor`.replace(/\/+/g, '/')
const shopUrl = `${import.meta.env.BASE_URL}shop`.replace(/\/+/g, '/')
const drawsUrl = `${import.meta.env.BASE_URL}draws`.replace(/\/+/g, '/')
const guidesUrl = `${import.meta.env.BASE_URL}guides`.replace(/\/+/g, '/')

const allBlocks: InfoBlock[] = [
  { id: 'rules', title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg, link: rulesUrl },
  { id: 'lor', title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg, link: lorUrl },
  { id: 'guides', title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg, link: guidesUrl },
  { id: 'draws', title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg, link: drawsUrl },
  { id: 'donat', title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg, link: 'https://last-zone-shop.ru', isExternal: true },
  { id: 'vote', title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg },
  { id: 'price', title: 'ПРАЙС-ЛИСТ', desc: 'ВООРУЖЕНИЕ В ТРЕЙДЕР', img: priceImg, link: shopUrl }
]

const topBlocks = computed(() => allBlocks.slice(0, 4))
const bottomBlocks = computed(() => allBlocks.slice(4, 7))
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <div class="w-full h-[75px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none transition-all duration-500"></div>
    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-start lg:justify-center p-4 gap-6 md:gap-20 2xl:gap-32 overflow-y-auto no-scrollbar">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none shrink-0 pt-4 md:pt-0">ИНФОРМАЦИЯ</h2>

      <div class="w-full max-w-7xl flex flex-col gap-4 sm:gap-10 items-center 2xl:-translate-y-12 transition-transform duration-500 pb-10 md:pb-0">

        <!-- МОБИЛЬНЫЙ ГРИД -->
        <div class="grid grid-cols-2 lg:hidden gap-3 w-full justify-items-center">
          <template v-for="block in allBlocks" :key="block.id">
            <a v-if="block.link" :href="block.link" :target="block.isExternal ? '_blank' : '_self'" :class="['w-full flex justify-center', block.id === 'price' ? 'col-span-2' : '']">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <div v-else-if="block.id === 'vote'" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" :isActive="isVotingOpen">
                <template #content v-if="isVotingOpen">
                  <div class="flex flex-col w-full h-full justify-center items-center gap-1 p-1">
                    <a href="https://wargm.ru/server/72966" target="_blank" @click.stop class="w-full py-1.5 bg-[#9241b8] text-white font-capture text-[8px] rounded text-center">WARGM</a>
                    <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" @click.stop class="w-full py-1.5 bg-[#9241b8] text-white font-capture text-[8px] rounded text-center">MONITOR</a>
                  </div>
                </template>
              </InfoCard>
            </div>
            <div v-else class="w-full flex justify-center cursor-default"><InfoCard :title="block.title" :desc="block.desc" :img="block.img" /></div>
          </template>
        </div>

        <!-- ДЕСКТОПНЫЙ ГРИД (ВЕРХ) -->
        <div class="hidden lg:grid grid-cols-4 gap-10 w-full justify-items-center">
          <template v-for="block in topBlocks" :key="block.id">
            <a v-if="block.link" :href="block.link" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <InfoCard v-else :title="block.title" :desc="block.desc" :img="block.img" />
          </template>
        </div>

        <!-- ДЕСКТОПНЫЙ ГРИД (НИЗ) -->
        <div class="hidden lg:grid grid-cols-3 gap-10 w-full lg:max-w-5xl justify-items-center">
          <template v-for="block in bottomBlocks" :key="block.id">
            <a v-if="block.link" :href="block.link" :target="block.isExternal ? '_blank' : '_self'" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <div v-else-if="block.id === 'vote'" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" :isActive="isVotingOpen">
                <template #content v-if="isVotingOpen">
                  <div class="flex flex-col w-full h-full justify-center items-center gap-2 p-1">
                    <a href="https://wargm.ru/server/72966" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[10px] rounded-lg text-center">WARGM.RU</a>
                    <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" @click.stop class="w-full py-2 bg-[#9241b8] text-white font-capture text-[10px] rounded-lg text-center">MONITORING</a>
                  </div>
                </template>
              </InfoCard>
            </div>
          </template>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>