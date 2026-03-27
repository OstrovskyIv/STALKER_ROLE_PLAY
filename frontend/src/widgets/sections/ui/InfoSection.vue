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
  path?: string
}

const isVotingOpen = ref(false)

const infoBlocks: InfoBlock[] = [
  { title: 'ПРАВИЛА', desc: 'ОСНОВНЫЕ ПРАВИЛА', img: rulesImg, path: '/rules' },
  { title: 'ЛОР', desc: 'ИСТОРИЯ СЕРВЕРА', img: lorImg },
  { title: 'ГАЙДЫ', desc: 'ВЫЖИВАНИЕ В ЗОНЕ', img: guidesImg },
  { title: 'РОЗЫГРЫШИ', desc: 'УЧАСТВУЙ И ПОБЕЖДАЙ', img: drawImg },
  { title: 'ДОНАТ ШОП', desc: 'МАГАЗИН ТОВАРОВ', img: shopImg },
  { title: 'ГОЛОСОВАНИЕ', desc: 'ПОДДЕРЖКА ПРОЕКТА', img: voteImg }
]

const rulesUrl = `${import.meta.env.BASE_URL}rules`.replace(/\/+/g, '/')
</script>

<template>
  <div class="w-full min-h-[100svh] flex flex-col items-center justify-start p-4 md:p-10 relative overflow-hidden">
    <SectionDivider />

    <!-- pt-[25vh] даст больше места на телефонах под линией -->
    <div class="flex flex-col items-center w-full max-w-7xl pt-[25vh] sm:pt-[22vh] xl:pt-[20vh] gap-3 md:gap-6 transition-all origin-top scale-[0.82] sm:scale-90 md:scale-100">
      <h2 class="text-4xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic mb-2 md:mb-4">ИНФОРМАЦИЯ</h2>

      <div class="w-full flex flex-col gap-3 md:gap-6 items-center">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full justify-items-center">
          <template v-for="block in infoBlocks.slice(0, 4)" :key="block.title">
            <a v-if="block.title === 'ПРАВИЛА'" :href="rulesUrl" target="_blank" class="w-full flex justify-center">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </a>
            <div v-else class="w-full flex justify-center cursor-default">
              <InfoCard :title="block.title" :desc="block.desc" :img="block.img" />
            </div>
          </template>
        </div>

        <div class="grid grid-cols-2 gap-4 md:gap-6 w-full lg:max-w-2xl justify-items-center">
          <a v-if="infoBlocks[4]" href="https://last-zone-shop.ru" target="_blank" class="w-full flex justify-center">
            <InfoCard :title="infoBlocks[4].title" :desc="infoBlocks[4].desc" :img="infoBlocks[4].img" />
          </a>

          <div v-if="infoBlocks[5]" class="w-full flex justify-center" @click="isVotingOpen = !isVotingOpen">
            <InfoCard :title="infoBlocks[5].title" :desc="infoBlocks[5].desc" :img="infoBlocks[5].img" :isActive="isVotingOpen">
              <template #content v-if="isVotingOpen">
                <div class="flex flex-col gap-3 w-full h-full justify-center items-center animate-fade-in font-capture">
                  <p class="text-[10px] text-white/50 uppercase mb-1">ВЫБЕРИТЕ САЙТ:</p>
                  <a href="https://wargm.ru/server/72966" target="_blank" class="w-full py-2 bg-[#9241b8] text-white text-[10px] md:text-sm hover:bg-white hover:text-black transition-all rounded-lg text-center">WARGM.RU</a>
                  <a href="https://gamemonitoring.ru/dayz/servers/9106817" target="_blank" class="w-full py-2 bg-[#9241b8] text-white text-[10px] md:text-sm hover:bg-white hover:text-black transition-all rounded-lg text-center">GAMEMONITORING</a>
                  <button @click.stop="isVotingOpen = false" class="text-[9px] text-zinc-500 mt-1 hover:text-white uppercase underline">НАЗАД</button>
                </div>
              </template>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>