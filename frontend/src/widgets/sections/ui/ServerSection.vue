<script setup lang="ts">
import { onMounted } from 'vue'
import { SectionDivider } from '@shared/ui'
import { useServerStore } from '@entities/server/model/store'

const serverStore = useServerStore()
onMounted(() => {
  serverStore.fetchStatus()
  setInterval(serverStore.fetchStatus, 30000)
})
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <div class="w-full h-[55px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none"></div>
    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 gap-10 md:gap-20 2xl:gap-32">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none">МОНИТОРИНГ</h2>

      <div v-if="serverStore.serverData" class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 px-6">

        <div class="bg-black/40 border-2 border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-4 shadow-xl">
          <span class="text-zinc-500 font-capture text-sm uppercase">СТАТУС</span>
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <span class="text-white font-capture text-2xl md:text-4xl uppercase">ONLINE</span>
          </div>
        </div>

        <div class="bg-black/40 border-2 border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-4 shadow-xl">
          <span class="text-zinc-500 font-capture text-sm uppercase">ИГРОКИ</span>
          <span class="text-[#9241b8] font-capture text-2xl md:text-5xl drop-shadow-[0_0_15px_#9241b8]">
            {{ serverStore.serverData.players }} / {{ serverStore.serverData.maxPlayers }}
          </span>
        </div>

        <div class="bg-black/40 border-2 border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-4 shadow-xl">
          <span class="text-zinc-500 font-capture text-sm uppercase">ВРЕМЯ</span>
          <span class="text-white font-capture text-2xl md:text-4xl uppercase">{{ serverStore.serverData.time }}</span>
        </div>

        <div class="bg-black/40 border-2 border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-4 shadow-xl">
          <span class="text-zinc-500 font-capture text-sm uppercase">КАРТА</span>
          <span class="text-white font-capture text-2xl md:text-4xl uppercase">{{ serverStore.serverData.map }}</span>
        </div>

      </div>

      <div v-else class="text-zinc-500 font-capture animate-pulse text-2xl">ПОДКЛЮЧЕНИЕ К СЕКТОРУ...</div>
    </div>
  </section>
</template>