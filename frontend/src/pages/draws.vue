<script setup lang="ts">
import { SectionDivider, BackButton } from '@shared/ui'
import crown1 from '@shared/assets/images/ui/draws/crown_1.gif'
import crown2 from '@shared/assets/images/ui/draws/crown_2.gif'
import crown3 from '@shared/assets/images/ui/draws/crown_3.gif'
import coinImg from '@shared/assets/images/ui/draws/coin.webp'
</script>

<template>
  <div class="w-full min-h-screen bg-transparent flex flex-col items-center p-4 md:p-12 gap-10 md:gap-16">

    <div class="w-full flex flex-col items-center gap-6 text-center">
      <div class="w-full max-w-8xl"><SectionDivider /></div>
      <BackButton to="/" />
      <h1 class="text-4xl md:text-7xl font-capture text-white uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        РОЗЫГРЫШИ
      </h1>
    </div>

    <div class="w-full max-w-8xl flex flex-col lg:flex-row items-stretch justify-center gap-8 md:gap-12 pb-20">

      <div class="flex-1 bg-black/40 border-2 border-[#9241b8]/30 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 backdrop-blur-xl flex flex-col gap-6 shadow-2xl transition-all hover:border-[#9241b8]/60">
        <h2 class="text-xl md:text-3xl font-capture text-white border-l-4 border-[#9241b8] pl-6 leading-tight uppercase">
          ЕЖЕНЕДЕЛЬНЫЙ КОНКУРС ДЛЯ САМЫХ АКТИВНЫХ!
        </h2>

        <div class="flex flex-col gap-4 text-zinc-300 font-sans text-sm md:text-lg leading-relaxed italic">
          <p>Друзья, мы постоянно работаем над проектом, чтобы Ваша игра на нашем сервере была максимально комфортной и приятной. Мы безмерно благодарны Вам, что Вы остаётесь с нами и продолжаете играть на Last Zone.</p>
          <p>У нас на постоянной основе проходит еженедельный конкурс на <span class="text-white font-bold">пополнение баланса</span> на нашем сайте.</p>

          <div class="flex flex-col gap-2 mt-4">
            <span class="text-[#9241b8] font-capture uppercase tracking-widest">Условия розыгрыша:</span>
            <p>• Активно голосовать за наш сервервер на <span class="text-[#9241b8] font-bold underline">WARGM</span> и <span class="text-[#9241b8] font-bold underline">GAMEMONITORING</span> в течение недели</p>
          </div>

          <div class="flex flex-col gap-4 mt-4 bg-black/20 p-6 rounded-2xl border border-white/5">
            <span class="text-white font-capture uppercase">Награды каждую неделю:</span>

            <div class="space-y-4">
              <div class="flex flex-col gap-2">
                <span class="text-zinc-500 text-xs font-bold uppercase tracking-widest">WARGM / MONITORING:</span>
                <div class="flex items-center gap-3">
                  <img :src="crown1" class="h-6" /> <span class="text-white font-black">1500₽ на баланс</span>
                </div>
                <div class="flex items-center gap-3">
                  <img :src="crown2" class="h-6" /> <span class="text-white font-black">1000₽ на баланс</span>
                </div>
                <div class="flex items-center gap-3">
                  <img :src="crown3" class="h-6" /> <span class="text-white font-black">500₽ на баланс</span>
                </div>
              </div>
            </div>
          </div>

          <p class="mt-4 text-zinc-500 text-xs uppercase font-bold">* Победители выбираются с помощью рандом колеса из "ТОП 7 ДНЕЙ"!</p>
        </div>
      </div>

      <div class="flex-1 bg-black/40 border-2 border-[#9241b8]/30 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 backdrop-blur-xl flex flex-col gap-6 shadow-2xl transition-all hover:border-[#9241b8]/60">
        <h2 class="text-xl md:text-3xl font-capture text-white border-l-4 border-[#9241b8] pl-6 leading-tight uppercase">
          ЕЖЕНЕДЕЛЬНЫЙ РОЗЫГРЫШ ДЛЯ ГРУППИРОВОК!
        </h2>

        <div class="flex flex-col gap-4 text-zinc-300 font-sans text-sm md:text-lg leading-relaxed italic">
          <p>Вы являетесь неотъемлемой частью нашего проекта, мы благодарны каждому из вас за помощь в развитии сервера. Без вашей инициативы не было бы и нас.</p>

          <div class="flex flex-col gap-2">
            <span class="text-[#9241b8] font-capture uppercase tracking-widest">Критерии победы:</span>
            <p>• Максимальный онлайн состава (18:00-0:00)</p>
            <p>• Хорошая РП составляющая и активность</p>
            <p>• Создание собственных событий (<span class="text-emerald-400 font-black">x2 ОЧКИ</span>)</p>
          </div>

          <div class="flex flex-col gap-4 mt-4 bg-black/20 p-6 rounded-2xl border border-white/5">
            <span class="text-white font-capture uppercase">Призовые места:</span>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <img :src="crown1" class="h-6" />
                <span class="text-white">1 МЕСТО - 500 <img :src="coinImg" class="h-5 inline mx-1" /> + УАЗ</span>
              </div>
              <div class="flex items-center gap-3">
                <img :src="crown2" class="h-6" />
                <span class="text-white">2 МЕСТО - 300 <img :src="coinImg" class="h-5 inline mx-1" /> + Ящик</span>
              </div>
              <div class="flex items-center gap-3">
                <img :src="crown3" class="h-6" />
                <span class="text-white">3 МЕСТО - 100 <img :src="coinImg" class="h-5 inline mx-1" /> + Бочка</span>
              </div>
            </div>
          </div>

          <div class="mt-4 p-4 border-l-2 border-white/10 text-xs text-zinc-500 uppercase">
            <span class="text-white block mb-1">ЧТО ТАКОЕ LZ КОИНЫ?</span>
            1 коин = 1 рубль. Начисляются на баланс группировки для оплаты вещей из прайс-листа.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>