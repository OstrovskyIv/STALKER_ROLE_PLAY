<script setup lang="ts">
import { Header } from '@widgets/header'
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen">
    <!-- Логотип будет в самом верху (как мы настраивали) -->
    <Header />

    <!-- Первый блок: ПОДКЛЮЧЕНИЕ -->
    <section class="flex flex-col items-center justify-center pt-80 text-center">
      <h1 class="text-white text-6xl md:text-9xl font-black font-capture uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        УСТАНОВКА СВЯЗИ
      </h1>
      <p class="text-red-600 font-capture tracking-[0.5em] uppercase mt-4 text-xl animate-pulse">
        СЕКТОР: LAST ZONE
      </p>
    </section>
  </div>
</template>