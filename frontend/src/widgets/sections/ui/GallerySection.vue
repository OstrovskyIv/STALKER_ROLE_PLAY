<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 md:p-20 gap-12 md:gap-20">
    <h2 class="text-4xl md:text-7xl font-capture uppercase text-center italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
      ВИЗУАЛЬНЫЙ СЕКТОР
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl h-[50vh]">
      <div v-for="i in 8" :key="i"
           class="bg-zinc-900/80 border border-zinc-800 flex items-center justify-center overflow-hidden
                  group relative hover:border-red-600 transition-all duration-500 rounded-lg shadow-2xl">
        <div class="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span class="text-zinc-800 font-capture text-4xl md:text-7xl group-hover:text-red-900/40 transition-all duration-700 select-none">
          0{{i}}
        </span>
      </div>
    </div>
  </div>
</template>