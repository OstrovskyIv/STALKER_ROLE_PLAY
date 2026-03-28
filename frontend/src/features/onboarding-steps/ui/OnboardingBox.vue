<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import noiseVideo from '@shared/assets/video/terminal-noise.mp4'
import step1 from '@shared/assets/images/step1.webp'
import step2 from '@shared/assets/images/step2.webp'
import step3 from '@shared/assets/images/step3.webp'
import step4 from '@shared/assets/images/step4.webp'
import step5 from '@shared/assets/images/step5.webp'
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
onMounted(() => { if (videoRef.value) { videoRef.value.muted = true; videoRef.value.play().catch(() => {}); } })
</script>
<template>
  <div v-if="activeStep" class="w-full max-w-5xl min-h-[380px] md:min-h-[500px] border-[3px] md:border-[5px] border-[#9241b8] shadow-[0_0_40px_rgba(146,65,184,0.2)] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col relative bg-transparent backdrop-blur-md">
    <div class="h-12 md:h-20 bg-zinc-900/40 border-b-[2px] md:border-b-[4px] border-[#9241b8]/30 px-6 md:px-10 flex justify-between items-center relative z-20 font-capture">
      <span class="text-white text-xs md:text-xl tracking-widest uppercase italic font-bold">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-600"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-emerald-500"></div></div>
    </div>
    <div class="flex-1 relative overflow-hidden flex flex-col">
      <video ref="videoRef" autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-25" :src="noiseVideo" />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 flex-1 p-6 md:p-14 space-y-6 md:space-y-10 text-left">
        <div class="flex items-center gap-4 font-capture text-[#9241b8]">
          <img :src="activeStep.img" class="h-12 md:h-24 w-auto shrink-0 drop-shadow-[0_0_10px_#9241b8]" />
          <h3 class="text-lg md:text-5xl uppercase tracking-tighter leading-none">{{ activeStep.title }}</h3>
        </div>
        <p class="text-zinc-100 text-sm md:text-2xl leading-snug max-w-5xl whitespace-pre-line font-sans font-black uppercase italic">{{ activeStep.desc }}</p>
        <a v-if="activeStep.link && activeStep.btnText" :href="activeStep.link" target="_blank"
           class="inline-block px-6 py-2 md:px-12 md:py-5 bg-[#9241b8] hover:bg-[#a85cd4] text-white font-capture text-xs md:text-2xl uppercase rounded-sm shadow-lg active:scale-95">
          {{ activeStep.btnText }}
        </a>
      </div>
    </div>
    <div class="h-14 md:h-20 bg-zinc-900/40 border-t-[2px] md:border-t-[4px] border-[#9241b8]/30 px-6 md:px-10 flex items-center justify-center gap-6 md:gap-16 relative z-20 font-capture">
      <button @click="prevStep" :disabled="currentStep === 1" class="disabled:opacity-0 transition-opacity">
        <div class="border-2 border-[#9241b8] px-4 py-1 md:px-8 md:py-2.5 text-white text-[10px] md:text-xl hover:bg-[#9241b8]/20 transition-all uppercase">&lt; Назад</div>
      </button>
      <div class="text-white text-sm md:text-4xl uppercase font-black">ШАГ {{ currentStep }}</div>
      <button @click="nextStep" :disabled="currentStep === steps.length" class="disabled:opacity-0 transition-opacity">
        <div class="border-2 border-[#9241b8] px-4 py-1 md:px-8 md:py-2.5 text-white text-[10px] md:text-xl hover:bg-[#9241b8]/20 transition-all uppercase">Далее &gt;</div>
      </button>
    </div>
  </div>
</template>