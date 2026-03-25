<script setup lang="ts">
import logoImg from '@shared/assets/images/logo.webp'

const colors = ['#5b21b6', '#7c3aed', '#9241b8', '#a85cd4', '#c4b5fd']
</script>

<template>
  <div class="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center p-6 text-center gap-12">
    <img :src="logoImg" class="h-28 md:h-44 animate-pulse drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" />

    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl md:text-8xl font-black font-capture uppercase tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        LAST ZONE
      </h1>

      <div class="flex flex-col items-center gap-6">
        <p class="text-zinc-500 font-capture tracking-[0.2em] uppercase text-[10px] md:text-sm italic">
          Пожалуйста, подождите. Загрузка данных сектора...
        </p>

        <div class="flex gap-2.5 items-end h-8">
          <div
            v-for="(color, i) in colors"
            :key="i"
            class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full animate-wave shadow-[0_0_10px_currentColor]"
            :style="{
              backgroundColor: color,
              color: color,
              animationDelay: (i * 0.15) + 's'
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wave {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.4;
    filter: brightness(0.8);
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
    filter: brightness(1.5);
  }
}

.animate-wave {
  animation: wave 1.5s infinite ease-in-out;
}
</style>