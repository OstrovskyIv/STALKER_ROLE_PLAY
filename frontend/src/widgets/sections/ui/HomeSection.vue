<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-start xl:justify-center p-4 relative overflow-hidden">
    <!-- 1. ЛОГОТИП -->
    <Header />

    <!-- 2. ЛИНИЯ-ПАЗ -->
    <SectionDivider />

    <!-- 3. БОКС С ШАГАМИ -->
    <!-- scale-90 на мобилках сжимает блок на 10%, чтобы он не налезал на меню -->
    <div class="w-full flex flex-col items-center pt-[210px] sm:pt-[300px] xl:pt-10 z-10 transition-all duration-500 origin-top scale-[0.85] sm:scale-100 xl:scale-100">
      <OnboardingBox />
    </div>
  </div>
</template>