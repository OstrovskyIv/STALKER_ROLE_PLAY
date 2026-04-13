<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { SectionDivider } from '@shared/ui'
import { useServerStore } from '@entities/server'

const serverStore = useServerStore()
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  serverStore.fetchStatus()

  intervalId = setInterval(() => {
    serverStore.fetchStatus()
  }, 600000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="w-full h-[100svh] flex flex-col items-center relative snap-start shrink-0 overflow-hidden bg-transparent">

    <div class="w-full h-[80px] sm:h-[110px] md:h-[140px] 2xl:h-[120px] shrink-0 pointer-events-none transition-all duration-500"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 gap-8 md:gap-16 2xl:gap-32">

      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none text-center">
        МОНИТОРИНГ
      </h2>

      <div class="w-full max-w-7xl flex flex-col gap-4 sm:gap-10 items-center 2xl:-translate-y-12 transition-transform duration-500">

        <div v-if="serverStore.isOnline && serverStore.serverData"
             class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-6 2xl:gap-8 w-full max-w-lg md:max-w-4xl 2xl:max-w-none px-4 sm:px-6">

          <div class="bg-black/40 border border-white/10 p-5 md:p-8 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl">
            <span class="text-zinc-500 font-capture text-[12px] md:text-lg 2xl:text-base uppercase tracking-widest">СТАТУС</span>
            <div class="flex items-center gap-2 2xl:gap-4">
              <div class="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]"></div>
              <span class="text-white font-capture text-xl md:text-3xl 2xl:text-4xl uppercase">ONLINE</span>
            </div>
          </div>

          <div class="bg-black/40 border border-white/10 p-5 md:p-8 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl">
            <span class="text-zinc-500 font-capture text-[12px] md:text-lg 2xl:text-base uppercase tracking-widest">ИГРОКИ</span>
            <span class="text-[#9241b8] font-capture text-2xl md:text-5xl 2xl:text-6xl drop-shadow-[0_0_20px_#9241b8">
              {{ serverStore.serverData.players }}/{{ serverStore.serverData.maxPlayers }}
            </span>
          </div>

          <div class="bg-black/40 border border-white/10 p-5 md:p-8 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl">
            <span class="text-zinc-500 font-capture text-[12px] md:text-lg 2xl:text-base uppercase tracking-widest">ВРЕМЯ</span>
            <span class="text-white font-capture text-xl md:text-3xl 2xl:text-4xl uppercase">{{ serverStore.serverData.time }}</span>
          </div>

          <div class="bg-black/40 border border-white/10 p-5 md:p-8 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl overflow-hidden">
            <span class="text-zinc-500 font-capture text-[12px] md:text-lg 2xl:text-base uppercase tracking-widest">ЛОКАЦИЯ</span>
            <span class="text-white font-capture text-sm md:text-xl 2xl:text-2xl uppercase truncate max-w-[150px] md:max-w-none">{{ serverStore.serverData.map }}</span>
          </div>
        </div>

        <div v-else-if="!serverStore.isLoading" class="flex flex-col items-center gap-6 px-6">
          <div class="bg-red-500/10 border-2 border-red-500/40 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] backdrop-blur-md flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-red-500 flex items-center justify-center animate-pulse">
              <span class="text-red-500 font-black text-2xl md:text-4xl">!</span>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <p class="text-white font-capture text-xl md:text-4xl uppercase tracking-tighter">СВЯЗЬ С СЕКТОРОМ ПРЕРВАНА</p>
              <p class="text-red-400 font-sans font-black italic text-sm md:text-xl uppercase">Включите VPN для получения данных</p>
            </div>
            <button @click="serverStore.fetchStatus()" class="mt-4 px-10 py-3 bg-red-600 hover:bg-red-500 text-white font-capture text-lg rounded-xl transition-all active:scale-95 shadow-lg">
              ПОВТОРИТЬ ЗАПРОС
            </button>
          </div>
        </div>

        <div v-else class="flex flex-col items-center gap-4">
          <p class="text-zinc-500 font-capture animate-pulse text-lg md:text-4xl uppercase tracking-[0.3em]">УСТАНОВКА СВЯЗИ...</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 0 !important;
}
</style>