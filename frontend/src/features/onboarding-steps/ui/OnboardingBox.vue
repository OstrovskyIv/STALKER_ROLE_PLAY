<script setup lang="ts">
import { ref, computed } from 'vue'

import noiseVideo from '@shared/assets/video/terminal-noise.mp4'
import step1 from '@shared/assets/images/step1.webp'
import step2 from '@shared/assets/images/step2.webp'
import step3 from '@shared/assets/images/step3.webp'
import step4 from '@shared/assets/images/step4.webp'
import step5 from '@shared/assets/images/step5.webp'

interface Step {
  id: number
  title: string
  desc: string
  img: string
  link?: string
  btnText?: string
}

const currentStep = ref(1)

const steps: Step[] = [
  { id: 1, title: 'ПРИОБРЕТЕНИЕ И УСТАНОВКА DAYZ', desc: 'ДЛЯ ИГРЫ НУЖНО ИМЕТЬ ЛИЦЕНЗИОННУЮ КОПИЮ ИГРЫ DAYZ В STEAM', img: step1, link: 'https://store.steampowered.com/app/221100/DayZ/', btnText: 'КУПИТЬ В STEAM' },
  { id: 2, title: 'УСТАНОВКА МОДОВ', desc: 'УСТАНОВИТЕ НЕОБХОДИМЫЕ МОДЫ ДЛЯ ИГРЫ НА СЕРВЕРЕ', img: step2, link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3683932684', btnText: 'УСТАНОВИТЬ МОДЫ' },
  { id: 3, title: 'ПОИСК СЕРВЕРА', desc: 'СЕРВЕР МОЖНО НАЙТИ ПО СЛЕДУЮЩИМ ДАННЫМ:\n╭ НАЗВАНИЕ: LAST ZONE | STALKER RP NEW\n╰ IP: 80.242.59.107:2302', img: step3 },
  { id: 4, title: 'ПОДКЛЮЧЕНИЕ К СЕРВЕРУ', desc: '╭ СКОПИРУЙТЕ НАЗВАНИЕ СЕРВЕРА, ВСТАВЬТЕ В ПОИСК ВКЛАДКИ "СООБЩЕСТВО"\n╰ НАЖМИТЕ "ПРЯМОЕ СОЕДИНЕНИЕ", ВВЕДИТЕ ДАННЫЕ ИЗ ШАГА 3', img: step4 },
  { id: 5, title: 'УДАЧИ, СТАЛКЕР!', desc: 'ПРИЯТНОЙ ИГРЫ НА НАШЕМ ПРОЕКТЕ!', img: step5 }
]

const activeStep = computed((): Step => steps[currentStep.value - 1] ?? (steps[0] as Step))

const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <!-- Убрали min-h на мобилках, уменьшили border до 2px -->
  <div v-if="activeStep"
       class="w-full max-w-5xl border-[2px] md:border-[6px] border-[#9241b8] shadow-[0_0_30px_rgba(146,65,184,0.3)] rounded-xl md:rounded-[3rem] overflow-hidden flex flex-col relative transition-all duration-500 bg-zinc-950/20 backdrop-blur-md">

    <!-- ВЕРХНЯЯ ПАНЕЛЬ: стала в 2 раза меньше по высоте -->
    <div class="bg-zinc-900/80 border-b-[2px] md:border-b-[6px] border-[#9241b8]/40 px-4 py-2 md:px-10 md:py-5 flex justify-between items-center relative z-20 font-capture">
      <span class="text-white text-[10px] md:text-2xl tracking-wider uppercase italic">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-1.5 md:gap-4">
        <div class="w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-red-600 shadow-[0_0_5px_red] animate-pulse"></div>
        <div class="w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-yellow-500"></div>
        <div class="w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-emerald-500"></div>
      </div>
    </div>

    <!-- ЦЕНТРАЛЬНЫЙ БЛОК -->
    <div class="flex-1 relative overflow-hidden flex flex-col">
      <video autoplay muted loop playsinline :src="noiseVideo" class="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
      <div class="absolute inset-0 bg-black/50 z-[1]"></div>

      <div class="relative z-10 flex-1 p-4 md:p-14 space-y-3 md:space-y-10 text-left">
        <!-- Заголовок + Картинка: уменьшили размеры -->
        <div class="flex items-center gap-0 font-capture">
          <img :src="activeStep.img" class="h-10 md:h-24 w-auto drop-shadow-[0_0_10px_#9241b8]" />
          <h3 class="text-[#9241b8] text-xs md:text-4xl lg:text-5xl uppercase tracking-tighter leading-none">
            {{ activeStep.title }}
          </h3>
        </div>

        <!-- Описание: на Блекберри будет мелким, но влезет -->
        <p class="text-zinc-100 text-[9px] sm:text-[11px] md:text-xl lg:text-2xl leading-tight max-w-5xl whitespace-pre-line font-sans font-black uppercase tracking-wide italic">
          {{ activeStep.desc }}
        </p>

        <!-- Кнопка: стала компактнее -->
        <a v-if="activeStep.link && activeStep.btnText" :href="activeStep.link" target="_blank"
           class="inline-block px-4 py-2 md:px-12 md:py-5 bg-[#9241b8] hover:bg-[#a85cd4] text-white font-capture text-[9px] md:text-2xl
                  transition-all duration-300 shadow-[0_0_20px_rgba(146,65,184,0.4)] active:scale-95 uppercase rounded-sm">
          {{ activeStep.btnText }}
        </a>
      </div>
    </div>

    <!-- НИЖНЯЯ ПАНЕЛЬ: поджали паддинги -->
    <div class="bg-zinc-900/60 border-t-[2px] md:border-t-[6px] border-[#9241b8]/40 px-4 py-2 md:px-10 md:py-6 flex items-center justify-center gap-4 md:gap-16 relative z-20 font-capture">
      <button @click="prevStep" :disabled="currentStep === 1" class="group flex items-center disabled:opacity-0">
        <div class="border border-[#9241b8] px-2 py-0.5 md:px-8 md:py-3 flex items-center gap-1 text-white text-[8px] md:text-2xl hover:bg-[#9241b8]/20">
          <span class="text-[#9241b8]">&lt;</span> НАЗАД
        </div>
      </button>
      <div class="text-white text-[10px] md:text-5xl uppercase font-black">ШАГ {{ currentStep }}</div>
      <button @click="nextStep" :disabled="currentStep === steps.length" class="group flex items-center disabled:opacity-0">
        <div class="border border-[#9241b8] px-2 py-0.5 md:px-8 md:py-3 flex items-center gap-1 text-white text-[8px] md:text-2xl hover:bg-[#9241b8]/20">
          ДАЛЕЕ <span class="text-[#9241b8]">&gt;</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Плавное мигание для ламп */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>