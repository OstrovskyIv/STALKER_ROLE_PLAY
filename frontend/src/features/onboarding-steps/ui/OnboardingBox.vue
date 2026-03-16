<script setup lang="ts">
import { ref, computed } from 'vue'

// Описываем структуру объекта
interface Step {
  id: number
  title: string
  desc: string
  btnText: string
  link: string
}

const currentStep = ref(1)

// Данные шагов
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

// Исправленный Computed: убираем дженерик <Step> и явно возвращаем Step
const activeStep = computed((): Step => {
  const index = currentStep.value - 1
  const foundStep = steps[index]

  // Используем утверждение типа (as Step), чтобы TS не сомневался
  return foundStep ?? (steps[0] as Step)
})

const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <!-- v-if на всякий случай для шаблона -->
  <div v-if="activeStep" class="w-full max-w-3xl aspect-[16/9] md:aspect-[16/8] bg-black/90 border-2 border-fuchsia-900/50 rounded-3xl overflow-hidden flex flex-col relative shadow-[0_0_50px_rgba(162,28,175,0.2)] font-capture">

    <!-- ЭФФЕКТ ПОМЕХ -->
    <div class="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-scanlines animate-flicker"></div>

    <!-- HEADER -->
    <div class="bg-fuchsia-950/30 border-b border-fuchsia-900/50 px-8 py-4 flex justify-between items-center">
      <span class="text-white text-xl md:text-2xl tracking-widest uppercase italic font-bold">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-fuchsia-900/50"></div>
        <div class="w-3 h-3 rounded-full bg-fuchsia-600 animate-pulse"></div>
      </div>
    </div>

    <!-- КОНТЕНТ -->
    <div class="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
      <div class="space-y-6 text-left">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-fuchsia-700 flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_fuchsia]">
            {{ activeStep.id }}
          </div>
          <h3 class="text-fuchsia-500 text-2xl md:text-4xl uppercase tracking-tighter">
            {{ activeStep.title }}
          </h3>
        </div>

        <p class="text-zinc-400 font-mono text-sm md:text-lg leading-relaxed max-w-2xl">
          {{ activeStep.desc }}
        </p>

        <a :href="activeStep.link" target="_blank"
           class="inline-block px-8 py-4 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-black text-lg md:text-2xl
                  transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(162,28,175,0.4)] active:scale-95 uppercase">
          {{ activeStep.btnText }}
        </a>
      </div>

      <!-- НАВИГАЦИЯ -->
      <div class="flex items-center justify-center gap-6 pt-8 border-t border-fuchsia-900/20">
        <button @click="prevStep" :disabled="currentStep === 1"
                class="flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-10 transition-colors cursor-pointer uppercase text-sm md:text-lg">
          &lt; НАЗАД
        </button>

        <div class="px-6 py-1 bg-fuchsia-900/20 border border-fuchsia-700 text-white text-xl md:text-2xl">
          ШАГ {{ currentStep }}
        </div>

        <button @click="nextStep" :disabled="currentStep === steps.length"
                class="flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-10 transition-colors cursor-pointer uppercase text-sm md:text-lg">
          ДАЛЕЕ &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-scanlines {
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%),
  linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
  background-size: 100% 3px, 2px 100%;
}
@keyframes flicker {
  0% { opacity: 0.15; } 50% { opacity: 0.25; } 100% { opacity: 0.15; }
}
.animate-flicker { animation: flicker 0.15s infinite; }
</style>