<template>
  <div class="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center gap-6">
    <div class="flex flex-col items-center gap-2">
      <h2 class="text-2xl md:text-4xl font-capture text-white tracking-[0.3em] uppercase animate-pulse">
        ИНИЦИАЛИЗАЦИЯ...
      </h2>
      <p class="text-red-600 font-capture text-[10px] tracking-widest uppercase">
        Связь с сектором устанавливается
      </p>
    </div>

    <div class="w-48 h-[2px] bg-zinc-900 overflow-hidden relative">
      <div class="absolute inset-0 bg-red-600 animate-loading-bar shadow-[0_0_10px_rgba(220,38,38,1)]"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes loading-bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-loading-bar {
  animation: loading-bar 1.5s infinite ease-in-out;
}
</style>