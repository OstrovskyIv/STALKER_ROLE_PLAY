<script setup lang="ts">
import { onMounted } from 'vue'
import { SectionDivider } from '@shared/ui'
import { useServerStore } from '@entities/server/model/store'

const serverStore = useServerStore()

onMounted(() => {
  serverStore.fetchStatus()
  // Автообновление каждые 60 секунд
  setInterval(serverStore.fetchStatus, 60000)
})
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <div class="w-full h-[55px] sm:h-[90px] md:h-[100px] 2xl:h-[115px] shrink-0 pointer-events-none"></div>
    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center p-4 gap-6 md:gap-16 2xl:gap-32">
      <h2 class="text-2xl sm:text-5xl xl:text-7xl font-capture uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] italic leading-none">МОНИТОРИНГ</h2>

      <!-- 1. УСПЕШНАЯ ЗАГРУЗКА -->
      <div v-if="serverStore.isOnline && serverStore.serverData" class="w-full max-w-lg 2xl:max-w-7xl grid grid-cols-1 2xl:grid-cols-4 gap-3 sm:gap-4 2xl:gap-8 px-4 sm:px-6">

        <div class="bg-black/40 border border-white/10 p-4 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl transition-all hover:border-[#9241b8]/50">
          <span class="text-zinc-500 font-capture text-[10px] 2xl:text-base uppercase tracking-widest">СТАТУС</span>
          <div class="flex items-center gap-2 2xl:gap-4">
            <div class="w-2 h-2 2xl:w-4 2xl:h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]"></div>
            <span class="text-white font-capture text-lg 2xl:text-4xl uppercase">ONLINE</span>
          </div>
        </div>

        <div class="bg-black/40 border border-white/10 p-4 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl transition-all hover:border-[#9241b8]/50">
          <span class="text-zinc-500 font-capture text-[10px] 2xl:text-base uppercase tracking-widest">ИГРОКИ</span>
          <span class="text-[#9241b8] font-capture text-xl 2xl:text-6xl drop-shadow-[0_0_20px_#9241b8]">
            {{ serverStore.serverData.players }} / {{ serverStore.serverData.maxPlayers }}
          </span>
        </div>

        <div class="bg-black/40 border border-white/10 p-4 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl transition-all hover:border-[#9241b8]/50">
          <span class="text-zinc-500 font-capture text-[10px] 2xl:text-base uppercase tracking-widest">ВРЕМЯ</span>
          <span class="text-white font-capture text-lg 2xl:text-4xl uppercase">{{ serverStore.serverData.time }}</span>
        </div>

        <div class="bg-black/40 border border-white/10 p-4 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] backdrop-blur-xl flex flex-row 2xl:flex-col items-center justify-between 2xl:justify-center gap-4 shadow-xl transition-all hover:border-[#9241b8]/50">
          <span class="text-zinc-500 font-capture text-[10px] 2xl:text-base uppercase tracking-widest">ЛОКАЦИЯ</span>
          <span class="text-white font-capture text-sm 2xl:text-2xl uppercase truncate max-w-[150px] 2xl:max-w-none">{{ serverStore.serverData.map }}</span>
        </div>

      </div>

      <!-- 2. СЕРВЕР ОФФЛАЙН -->
      <div v-else-if="!serverStore.isLoading && !serverStore.isOnline && !serverStore.error" class="flex flex-col items-center gap-6">
        <div class="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500 animate-pulse">
          <div class="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_red]"></div>
        </div>
        <p class="text-white font-capture text-2xl md:text-5xl uppercase tracking-tighter">СЕКТОР НЕДОСТУПЕН</p>
        <button @click="serverStore.fetchStatus()" class="px-10 py-4 bg-zinc-900 border border-white/10 text-zinc-400 font-capture hover:text-white transition-all uppercase rounded-xl">Переподключение</button>
      </div>

      <!-- 3. ОШИБКА (CORS/БЛОКИРОВЩИК) -->
      <div v-else-if="serverStore.error" class="flex flex-col items-center gap-4 px-10">
        <p class="text-red-500 font-capture text-center text-lg md:text-2xl uppercase">Сигнал потерян</p>
        <p class="text-zinc-500 text-[10px] md:text-sm max-w-sm text-center italic uppercase">Запрос заблокирован вашим браузером или провайдером. Отключите AdBlock или VPN.</p>
        <button @click="serverStore.fetchStatus()" class="mt-4 px-8 py-3 bg-[#9241b8] text-white font-capture rounded-lg active:scale-95 transition-all">ПОВТОРИТЬ</button>
      </div>

      <!-- 4. ЗАГРУЗКА -->
      <div v-else class="flex flex-col items-center gap-8 transition-all">
        <div class="text-zinc-500 font-capture animate-pulse text-lg md:text-4xl uppercase tracking-[0.3em]">УСТАНОВКА СВЯЗИ...</div>
      </div>

    </div>
  </section>
</template>