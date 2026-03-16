<script setup lang="ts">
import { SectionDivider } from '@shared/ui'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Умная линия-паз -->
    <SectionDivider />

    <div class="flex flex-col items-center gap-12 md:gap-20 w-full max-w-2xl pt-24 md:pt-40">
      <h2 class="text-4xl md:text-7xl font-capture uppercase text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] text-center">
        СВЯЗЬ
      </h2>

      <div class="flex flex-col gap-4 md:gap-6 w-full font-capture">
        <a href="#" class="p-6 md:p-8 border border-white/10 bg-zinc-950/40 text-center text-lg md:text-xl
                          hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest rounded-xl">
          TELEGRAM CHANNEL
        </a>
        <a href="#" class="p-6 md:p-8 border border-white/10 bg-zinc-950/40 text-center text-lg md:text-xl
                          hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest rounded-xl">
          DISCORD SERVER
        </a>
        <a href="#" class="p-6 md:p-8 border border-red-900/30 bg-red-950/10 text-center text-lg md:text-xl
                          text-red-600 hover:bg-red-600 hover:text-white transition-all duration-500 uppercase tracking-widest rounded-xl">
          SUPPORT SIGNAL
        </a>
      </div>
    </div>
  </div>
</template>