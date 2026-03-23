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
  { id: 4, title: 'ПОДКЛЮЧЕНИЕ К СЕРВЕРУ', desc: '╭ СКОПИРУЙТЕ НАЗВАНИЕ СЕРВЕРА, В ЛАУНЧЕРЕ DAYZ ПЕРЕЙДИТЕ ВО ВКЛАДКУ "СЕРВЕРЫ" -> "СООБЩЕСТВО" И ВСТАВЬТЕ В ПОИСКУЮ СТРОКУ СКОПИРОВАННОЕ НАЗВАНИЕ\n╰ НАЖМИТЕ "ПРЯМОЕ СОЕДИНЕНИЕ", ВВЕДИТЕ ДАННЫЕ ИЗ "ШАГ 3", ПОСТАВЬТЕ ГАЛОЧКУ "ДОБАВИТЬ В ИЗБРАННОЕ" И НАЖМИТЕ НА КНОПКУ "ПОДКЛЮЧИТЬСЯ"', img: step4 },
  { id: 5, title: 'УДАЧИ, СТАЛКЕР!', desc: 'ПРИЯТНОЙ ИГРЫ НА НАШЕМ ПРОЕКТЕ!', img: step5 }
]

const activeStep = computed((): Step => steps[currentStep.value - 1] ?? (steps[0] as Step))

const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <div v-if="activeStep"
       class="w-full max-w-5xl min-h-[400px] md:min-h-[460px] border-[3px] md:border-[5px] border-[#9241b8] shadow-[0_0_40px_rgba(146,65,184,0.25)] rounded-[2rem] overflow-hidden flex flex-col relative transition-all duration-500 bg-zinc-950/80 backdrop-blur-sm">

    <!-- ВИДЕО-ФОН С ЗАТЕМНЕНИЕМ -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <video autoplay muted loop playsinline :src="noiseVideo" class="w-full h-full object-cover opacity-20" />
      <!-- Слой дополнительного затемнения -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- ВЕРХНИЙ БЛОК (Компактный, шрифт Capture) -->
    <div class="bg-zinc-900/60 border-b-[2px] md:border-b-[4px] border-[#9241b8]/30 px-6 py-3 md:px-10 md:py-4 flex justify-between items-center relative z-10 font-capture">
      <span class="text-white text-sm md:text-xl tracking-wider uppercase italic">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-2 md:gap-3">
        <div class="w-2 h-2 md:w-3.5 md:h-3.5 rounded-full bg-red-600 shadow-[0_0_10px_red] animate-pulse"></div>
        <div class="w-2 h-2 md:w-3.5 md:h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"></div>
        <div class="w-2 h-2 md:w-3.5 md:h-3.5 rounded-full bg-emerald-500 shadow-[0_0_10px_emerald]"></div>
      </div>
    </div>

    <!-- КОНТЕНТ (Смешанные шрифты) -->
    <div class="flex-1 p-6 md:p-12 flex flex-col justify-between relative z-10">
      <div class="space-y-6 md:space-y-8 text-left">

        <!-- Заголовок шага (Capture It) -->
        <div class="flex items-center gap-4 md:gap-6 font-capture text-[#9241b8]">
          <img :src="activeStep.img" class="h-10 md:h-16 w-auto drop-shadow-[0_0_10px_rgba(146,65,184,0.5)]" />
          <h3 class="text-xl md:text-4xl lg:text-5xl uppercase tracking-tighter leading-none">
            {{ activeStep.title }}
          </h3>
        </div>

        <!-- Описание шага (Нормальный шрифт для читаемости) -->
        <p class="text-zinc-100 text-sm md:text-xl lg:text-2xl leading-snug max-w-5xl whitespace-pre-line font-sans font-medium uppercase tracking-wide">
          {{ activeStep.desc }}
        </p>

        <!-- Кнопка (Capture It) -->
        <a v-if="activeStep.link && activeStep.btnText" :href="activeStep.link" target="_blank"
           class="inline-block px-8 py-3 md:px-10 md:py-4 bg-[#9241b8] hover:bg-[#a85cd4] text-white font-capture text-sm md:text-2xl
                  transition-all duration-300 shadow-[0_0_20px_rgba(146,65,184,0.4)] active:scale-95 uppercase rounded-sm">
          {{ activeStep.btnText }}
        </a>
      </div>

      <!-- НИЖНИЙ БЛОК НАВИГАЦИИ (Компактный, шрифт Capture) -->
      <div class="flex items-center justify-center gap-4 md:gap-12 pt-6 md:pt-8 border-t border-[#9241b8]/20 font-capture">
        <button @click="prevStep" :disabled="currentStep === 1"
                class="group flex items-center disabled:opacity-0 cursor-pointer">
          <div class="border-2 border-[#9241b8] px-4 py-1.5 md:px-8 md:py-2.5 flex items-center gap-2 text-white text-[10px] md:text-xl hover:bg-[#9241b8]/20 transition-all">
            <span class="text-[#9241b8]">&lt;</span> НАЗАД
          </div>
        </button>

        <div class="text-white text-xs md:text-3xl uppercase tracking-widest font-black">
          ШАГ {{ currentStep }}
        </div>

        <button @click="nextStep" :disabled="currentStep === steps.length"
                class="group flex items-center disabled:opacity-0 cursor-pointer">
          <div class="border-2 border-[#9241b8] px-4 py-1.5 md:px-8 md:py-2.5 flex items-center gap-2 text-white text-[10px] md:text-xl hover:bg-[#9241b8]/20 transition-all">
            ДАЛЕЕ <span class="text-[#9241b8]">&gt;</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>