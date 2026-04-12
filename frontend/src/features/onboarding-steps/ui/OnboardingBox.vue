<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import noiseVideo from '@shared/assets/video/terminal-noise.mov'
import step1 from '@shared/assets/images/steps/step1.webp'
import step2 from '@shared/assets/images/steps/step2.webp'
import step3 from '@shared/assets/images/steps/step3.webp'
import step4 from '@shared/assets/images/steps/step4.webp'
import step5 from '@shared/assets/images/steps/step5.webp'

interface Step { id: number; title: string; desc: string; img: string; link?: string; btnText?: string; }

const currentStep = ref(1)
const videoRef = ref<HTMLVideoElement | null>(null)

const steps: Step[] = [
  { id: 1, title: 'ПРИОБРЕТЕНИЕ DAYZ', desc: 'ДЛЯ ИГРЫ НУЖНО ИМЕТЬ ЛИЦЕНЗИОННУЮ КОПИЮ ИГРЫ DAYZ В STEAM', img: step1, link: 'https://store.steampowered.com/app/221100/DayZ/', btnText: 'КУПИТЬ В STEAM' },
  { id: 2, title: 'УСТАНОВКА МОДОВ', desc: 'УСТАНОВИТЕ НЕОБХОДИМЫЕ МОДЫ ДЛЯ ИГРЫ НА СЕРВЕРЕ', img: step2, link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3683932684', btnText: 'УСТАНОВИТЬ МОДЫ' },
  { id: 3, title: 'ПОИСК СЕРВЕРА', desc: 'СЕРВЕР МОЖНО НАЙТИ ПО СЛЕДУЮЩИМ ДАННЫМ:\n╭ НАЗВАНИЕ: LAST ZONE | STALKER RP NEW\n╰ IP: 80.242.59.107:2302', img: step3 },
  { id: 4, title: 'ПОДКЛЮЧЕНИЕ', desc: '╭ СКОПИРУЙТЕ НАЗВАНИЕ СЕРВЕРА, ВСТАВЬТЕ В ПОИСК ВКЛАДКИ "СООБЩЕСТВО"\n╰ НАЖМИТЕ "ПРЯМОЕ СОЕДИНЕНИЕ", ВВЕДИТЕ ДАННЫЕ ИЗ ШАГ 3', img: step4 },
  { id: 5, title: 'УДАЧИ, СТАЛКЕР!', desc: 'ПРИЯТНОЙ ИГРЫ НА НАШЕМ ПРОЕКТЕ!', img: step5 }
]

const activeStep = computed((): Step => steps[currentStep.value - 1] ?? (steps[0] as Step))
const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = true
    videoRef.value.play().catch(() => {})
  }
})
</script>

<template>
  <div v-if="activeStep"
       :class="[
      'w-full max-w-lg md:max-w-4xl 2xl:max-w-5xl',
      'h-auto min-h-[350px] md:min-h-[550px] 2xl:min-h-[650px]',
      'border-[2px] md:border-[6px] border-[#9241b8] shadow-[0_0_40px_rgba(146,65,184,0.3)]',
      'rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col relative bg-zinc-950/40 backdrop-blur-xl transition-all duration-500'
    ]"
  >
    <div class="h-10 md:h-16 2xl:h-20 bg-zinc-900/80 border-b-[2px] md:border-b-[5px] border-[#9241b8]/40 px-5 md:px-12 flex justify-between items-center relative z-20 shrink-0">
      <span class="text-zinc-100 text-[12px] md:text-2xl 2xl:text-3xl tracking-widest uppercase font-capture">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-1.5 md:gap-3">
        <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]"></div>
        <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]"></div>
        <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
      </div>
    </div>

    <div class="flex-1 relative overflow-hidden flex flex-col">
      <video ref="videoRef" autoplay muted loop playsinline preload="auto" class="absolute inset-0 w-full h-full object-cover opacity-20" :src="noiseVideo" />
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 flex-1 p-6 md:p-16 2xl:p-20 flex flex-col justify-center gap-6 md:gap-10">

        <div class="flex items-center font-capture text-[#9241b8] shrink-0">
          <img :src="activeStep.img" class="h-10 md:h-20 2xl:h-24 w-auto shrink-0 drop-shadow-[0_0_15px_#9241b8]" alt="step" />
          <h3 class="text-lg md:text-5xl 2xl:text-6xl uppercase leading-none ml-4 md:ml-8">{{ activeStep.title }}</h3>
        </div>

        <div class="flex flex-col gap-3 md:gap-5 border-l-2 md:border-l-6 border-[#9241b8] pl-4 md:pl-10 text-left">
          <div v-for="(line, i) in activeStep.desc.split('\n')" :key="i" class="flex items-start">
            <template v-if="line.trim().startsWith('╭') || line.trim().startsWith('╰')">
              <span class="w-[15px] md:w-[32px] shrink-0 text-[#9241b8] font-mono text-sm md:text-3xl leading-tight">{{ line.trim().charAt(0) }}</span>
              <span class="text-zinc-100 text-[11px] md:text-2xl 2xl:text-3xl leading-tight font-sans font-black uppercase italic">{{ line.trim().substring(1) }}</span>
            </template>
            <template v-else>
              <span class="text-zinc-100 text-[11px] md:text-2xl 2xl:text-3xl leading-tight font-sans font-black uppercase italic">{{ line }}</span>
            </template>
          </div>
        </div>

        <div v-if="activeStep.link" class="mt-2 md:mt-4">
          <a :href="activeStep.link" target="_blank"
             class="inline-block px-5 py-2 md:px-16 md:py-6 bg-[#9241b8] hover:bg-[#a85cd4] text-white font-capture text-[10px] md:text-2xl uppercase rounded-lg shadow-lg active:scale-95 transition-all">
            {{ activeStep.btnText }}
          </a>
        </div>
      </div>
    </div>

    <div class="h-14 md:h-24 bg-zinc-900/80 border-t-[2px] md:border-t-[5px] border-[#9241b8]/40 px-5 md:px-12 flex items-center justify-between relative z-20 shrink-0">
      <button @click="prevStep" :disabled="currentStep === 1" :class="['transition-all duration-300 font-capture text-white text-[11px] md:text-2xl uppercase', currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-[#9241b8]']">
        ← НАЗАД
      </button>

      <div class="text-zinc-100 text-[10px] md:text-4xl uppercase font-capture tracking-widest opacity-60">ШАГ {{ currentStep }}</div>

      <button @click="nextStep" :disabled="currentStep === 5" :class="['transition-all duration-300 font-capture text-white text-[11px] md:text-2xl uppercase', currentStep === 5 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-[#9241b8]']">
        ДАЛЕЕ →
      </button>
    </div>
  </div>
</template>