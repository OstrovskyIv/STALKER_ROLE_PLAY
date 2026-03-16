<script setup lang="ts">
import { ref } from 'vue'

const currentStep = ref(1)

const steps = [
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

const nextStep = () => { if (currentStep.value < steps.length) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
</script>

<template>
  <div class="w-full max-w-3xl aspect-[16/8] bg-black/90 border-2 border-fuchsia-900/50 rounded-3xl overflow-hidden flex flex-col relative shadow-[0_0_50px_rgba(162,28,175,0.2)] font-capture">

    <div class="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-scanlines animate-flicker"></div>
    <div class="bg-fuchsia-950/30 border-b border-fuchsia-900/50 px-8 py-4 flex justify-between items-center">
      <span class="text-white text-xl md:text-2xl tracking-widest uppercase italic">КАК НАЧАТЬ ИГРАТЬ</span>
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-fuchsia-900/50"></div>
        <div class="w-3 h-3 rounded-full bg-fuchsia-900/50"></div>
        <div class="w-3 h-3 rounded-full bg-fuchsia-600 animate-pulse"></div>
      </div>
    </div>

    <div class="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-fuchsia-700 flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_fuchsia]">
            {{ steps[currentStep-1].id }}
          </div>
          <h3 class="text-fuchsia-500 text-2xl md:text-4xl uppercase tracking-tighter">
            {{ steps[currentStep-1].title }}
          </h3>
        </div>

        <p class="text-zinc-400 font-mono text-sm md:text-lg leading-relaxed max-w-2xl">
          {{ steps[currentStep-1].desc }}
        </p>

        <a :href="steps[currentStep-1].link" target="_blank"
           class="inline-block px-8 py-4 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-black text-lg md:text-2xl
                  transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(162,28,175,0.4)] active:scale-95 uppercase">
          {{ steps[currentStep-1].btnText }}
        </a>
      </div>

      <div class="flex items-center justify-center gap-6 pt-8 border-t border-fuchsia-900/20">
        <button @click="prevStep" :disabled="currentStep === 1"
                class="flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors cursor-pointer uppercase text-sm md:text-lg">
          <span class="text-fuchsia-600">&lt;</span> НАЗАД
        </button>

        <div class="px-6 py-1 bg-fuchsia-900/20 border border-fuchsia-700 text-white text-xl md:text-2xl">
          ШАГ {{ currentStep }}
        </div>

        <button @click="nextStep" :disabled="currentStep === steps.length"
                class="flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-20 transition-colors cursor-pointer uppercase text-sm md:text-lg">
          ДАЛЕЕ <span class="text-fuchsia-600">&gt;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.1) 50%
  ),
  linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.03),
    rgba(0, 255, 0, 0.01),
    rgba(0, 0, 255, 0.03)
  );
  background-size: 100% 3px, 2px 100%;
}

@keyframes flicker {
  0% { opacity: 0.15; }
  5% { opacity: 0.2; }
  10% { opacity: 0.17; }
  15% { opacity: 0.25; }
  100% { opacity: 0.15; }
}
.animate-flicker {
  animation: flicker 0.15s infinite;
}
</style>