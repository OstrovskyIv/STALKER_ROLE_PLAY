<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Твой анимированный логотип сверху -->
    <Header />

    <!-- Линия-паз под меню -->
    <SectionDivider />

    <!-- Центральный блок (занимает место вместо старого текста) -->
    <!-- pt-64 на мобилках, чтобы не перекрывать шапку -->
    <div class="flex flex-col items-center w-full pt-80 sm:pt-[450px] xl:pt-40 animate-fade-in">
      <OnboardingBox />
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>