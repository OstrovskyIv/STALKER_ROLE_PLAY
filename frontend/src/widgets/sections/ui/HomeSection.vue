<script setup lang="ts">
import { Header } from '@widgets/header'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative">
    <Header />

    <div class="flex flex-col items-center gap-6 text-center">
      <h1 class="text-6xl md:text-[120px] font-black font-capture uppercase tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        LAST ZONE
      </h1>
      <p class="text-zinc-500 font-capture tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm animate-pulse">
        Статус: Ожидание игрока...
      </p>
    </div>
  </div>
</template>