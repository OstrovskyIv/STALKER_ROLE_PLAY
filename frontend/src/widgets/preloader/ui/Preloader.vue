<script setup lang="ts">
import logoImg from '@shared/assets/images/logo.webp'
</script>

<template>
  <div class="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center p-6 text-center gap-12">
    <img :src="logoImg" class="h-28 md:h-44 animate-pulse drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" />

    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl md:text-8xl font-black font-capture uppercase tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        LAST ZONE
      </h1>

      <div class="flex flex-col gap-3">
        <p class="text-zinc-500 font-capture tracking-[0.2em] uppercase text-[10px] md:text-sm italic">
          Пожалуйста, подождите. Загрузка данных сектора...
        </p>
        <div class="w-64 md:w-96 h-[1px] bg-white/10 relative overflow-hidden">
          <div class="absolute inset-0 bg-white shadow-[0_0_15px_white] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes loading-bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-loading-bar {
  animation: loading-bar 2s infinite linear;
}
</style>