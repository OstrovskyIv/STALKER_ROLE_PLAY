<script setup lang="ts">
import { ref, computed } from 'vue'

interface Step {
  id: number
  title: string
  desc: string
  btnText: string
  link: string
}

const currentStep = ref(1)
const steps: Step[] = [
  {
    id: 1,
    title: 'ПРИОБРЕТЕНИЕ DAYZ',
    desc: 'ДЛЯ ИГРЫ НУЖНО ИМЕТЬ ЛИЦЕНЗИОННУЮ КОПИЮ ИГРЫ DAYZ В STEAM',
    btnText: 'КУПИТЬ В STEAM',
    link: 'https://store.steampowered.com/app/221100/DayZ/'
  },
  {
    id: 2,
    title: 'УСТАНОВКА МОДОВ',
    desc: 'УСТАНОВИТЕ НЕОБХОДИМЫЕ МОДЫ ДЛЯ ИГРЫ НА СЕРВЕРЕ',
    btnText: 'УСТАНОВИТЬ МОДЫ',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3683932684'
  }
]

const activeStep = computed((): Step => {
  return steps[currentStep.value - 1] ?? (steps[0] as Step)
})

const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <div v-if="activeStep"
       class="w-full max-w-4xl min-h-[450px] bg-zinc-950/90 border-2 border-[#b347f0] shadow-[0_0_40px_rgba(179,71,240,0.2)] rounded-3xl overflow-hidden flex flex-col relative font-capture transition-all">

    <!-- СЛОИ ПОМЕХ (INTERFERENCE) -->
    <!-- 1. Зернистый шум -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.15] bg-noise"></div>
    <!-- 2. Горизонтальные линии -->
    <div class="absolute inset-0 pointer-events-none opacity-30 bg-scanlines"></div>
    <!-- 3. Бегущая "глючная" полоса -->
    <div class="absolute inset-0 pointer-events-none bg-glitch-line animate-glitch"></div>

    <!-- ВЕРХНЯЯ ПАНЕЛЬ (HEADER) -->
    <div class="border-b border-[#b347f0]/50 px-8 py-5 flex justify-between items-center bg-[#b347f0]/5">
      <span class="text-white text-xl md:text-3xl tracking-widest uppercase italic">КАК НАЧАТЬ ИГРАТЬ</span>

      <!-- КНОПКИ-ЛАМПОЧКИ (Control Panel Lamps) -->
      <div class="flex gap-4">
        <!-- Красная (Питание) -->
        <div class="w-4 h-4 rounded-full border border-red-900 bg-red-600 shadow-[0_0_15px_red] animate-pulse"></div>
        <!-- Желтая (Обмен данными) -->
        <div class="w-4 h-4 rounded-full border border-yellow-900 bg-yellow-500 shadow-[0_0_10px_yellow] animate-[flicker_0.1s_infinite]"></div>
        <!-- Зеленая (Сигнал) -->
        <div class="w-4 h-4 rounded-full border border-emerald-900 bg-emerald-500 shadow-[0_0_10px_emerald]"></div>
      </div>
    </div>

    <!-- КОНТЕНТ -->
    <div class="flex-1 p-10 md:p-16 flex flex-col justify-between relative z-10">

      <div class="space-y-10 text-left">
        <div class="flex items-center gap-5">
          <!-- Индикатор шага -->
          <div class="shrink-0 w-10 h-10 rounded-full border-2 border-[#b347f0] text-[#b347f0] flex items-center justify-center font-black text-xl bg-black/50 shadow-[0_0_10px_rgba(179,71,240,0.5)]">
            {{ activeStep.id }}
          </div>
          <h3 class="text-[#b347f0] text-3xl md:text-5xl uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(179,71,240,0.3)]">
            {{ activeStep.title }}
          </h3>
        </div>

        <p class="text-zinc-200 text-base md:text-2xl leading-relaxed max-w-3xl uppercase tracking-wide">
          {{ activeStep.desc }}
        </p>

        <!-- КНОПКА КУПИТЬ -->
        <a :href="activeStep.link" target="_blank"
           class="inline-block px-8 py-4 bg-[#b347f0] hover:bg-[#c466f5] text-white font-black text-xl md:text-3xl
                  transition-all duration-300 shadow-[0_0_20px_rgba(179,71,240,0.4)] active:scale-95 uppercase rounded-sm">
          {{ activeStep.btnText }}
        </a>
      </div>

      <!-- НАВИГАЦИЯ (Точно как на фото) -->
      <div class="flex items-center justify-center gap-6 md:gap-12 pt-10">

        <button @click="prevStep" :disabled="currentStep === 1"
                class="group flex items-center disabled:opacity-10 cursor-pointer">
          <div class="border border-[#b347f0] px-6 py-2 flex items-center gap-3 text-white text-lg md:text-2xl group-hover:bg-[#b347f0]/30 transition-all shadow-[inset_0_0_10px_rgba(179,71,240,0.2)]">
            <span class="text-[#b347f0]">&lt;</span> НАЗАД
          </div>
        </button>

        <div class="text-white text-2xl md:text-4xl uppercase tracking-[0.2em] border-b-2 border-[#b347f0]/30 pb-1">
          ШАГ {{ currentStep }}
        </div>

        <button @click="nextStep" :disabled="currentStep === steps.length"
                class="group flex items-center disabled:opacity-10 cursor-pointer">
          <div class="border border-[#b347f0] px-6 py-2 flex items-center gap-3 text-white text-lg md:text-2xl group-hover:bg-[#b347f0]/30 transition-all shadow-[inset_0_0_10px_rgba(179,71,240,0.2)]">
            ДАЛЕЕ <span class="text-[#b347f0]">&gt;</span>
          </div>
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* 1. СЛОЙ ШУМА (Зерно) */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* 2. СЛОЙ СКАНЛИНИЙ (Полоски) */
.bg-scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(179, 71, 240, 0.05) 50%
  );
  background-size: 100% 4px;
}

/* 3. БЕГУЩАЯ ПОЛОСА ГЛЮКА */
.bg-glitch-line {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(179, 71, 240, 0.1) 50%,
    transparent
  );
  height: 20px;
  width: 100%;
  position: absolute;
}

@keyframes glitch-move {
  0% { top: -20%; }
  100% { top: 120%; }
}
.animate-glitch {
  animation: glitch-move 4s linear infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>