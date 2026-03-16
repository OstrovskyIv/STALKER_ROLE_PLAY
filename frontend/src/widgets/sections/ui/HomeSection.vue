<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <Header />
    <SectionDivider />

    <!-- Увеличили pt до 96, чтобы текст был НИЖЕ линии на десктопе -->
    <div class="flex flex-col items-center gap-6 text-center pt-96 sm:pt-[500px] xl:pt-[450px]">
      <h1 class="text-6xl md:text-[120px] font-black font-capture text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-tighter">
        LAST ZONE
      </h1>
      <p class="text-zinc-500 font-capture tracking-[0.4em] uppercase text-xs md:text-sm animate-pulse">
        Статус: Ожидание игрока...
      </p>
    </div>
  </div>
</template>