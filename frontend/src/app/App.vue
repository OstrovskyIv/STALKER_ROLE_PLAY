<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Preloader } from '@widgets/preloader'
import { preloadImage } from '@shared/lib/images'

// Импортируем пути для предзагрузки в кэш браузера
import bgImg from '@shared/assets/images/bg-main.webp'
import logoImg from '@shared/assets/images/logo.webp'
import squareLogo from '@shared/assets/images/square-logo.webp'

const isAppReady = ref(false)

onMounted(async () => {
  try {
    // Ждем загрузку всех фото параллельно
    await Promise.all([
      preloadImage(bgImg),
      preloadImage(logoImg),
      preloadImage(squareLogo)
    ])
  } catch (error) {
    console.error('Ошибка загрузки ресурсов:', error)
  } finally {
    // Даем сталкеру 1.5 секунды посмотреть на экран загрузки
    setTimeout(() => {
      isAppReady.value = true
    }, 1500)
  }
})
</script>

<template>
  <!-- 1. Прелоадер (плавное исчезновение) -->
  <Transition name="fade">
    <Preloader v-if="!isAppReady" />
  </Transition>

  <!-- 2. Контент сайта (рендерится только когда всё загружено) -->
  <div v-if="isAppReady" class="relative w-full h-full">
    <!-- Фон (всегда статичен за контентом) -->
    <MainBackground />

    <!-- Навигация (всегда зафиксирована на экране) -->
    <Navbar />

    <!-- Единственный контейнер для One Page Scroll -->
    <!-- snap-y snap-mandatory берем из Tailwind v4 для прилипания к блокам -->
    <div class="relative z-10 w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Анимация исчезновения прелоадера */
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
}

/* Скрываем скроллбар внутри контейнера */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>