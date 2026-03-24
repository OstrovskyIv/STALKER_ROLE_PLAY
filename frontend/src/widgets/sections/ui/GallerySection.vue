<script setup lang="ts">
import { SectionDivider } from '@shared/ui'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- ЛИНИЯ-ПАЗ -->
    <SectionDivider />

    <div class="flex flex-col items-center gap-12 md:gap-20 w-full max-w-7xl pt-24 md:pt-48">
      <h2 class="text-4xl md:text-7xl font-capture uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] text-center italic">
        ГАЛЕРЕЯ
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full h-full max-h-[50vh] md:max-h-none">
        <div v-for="i in 8" :key="i"
             class="aspect-square md:aspect-video bg-zinc-900/80 border border-zinc-800 flex items-center justify-center overflow-hidden
                    group relative hover:border-[#9241b8] transition-all duration-500 rounded-lg shadow-2xl">
          <div class="absolute inset-0 bg-[#9241b8]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span class="text-zinc-800 font-capture text-4xl md:text-7xl group-hover:text-[#9241b8]/40 transition-all duration-700 select-none italic">
            0{{i}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>