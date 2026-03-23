<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <!-- xl:justify-center оставили для ПК, на мобилках - justify-start -->
  <div class="w-full h-full flex flex-col items-center justify-start xl:justify-center p-4 md:p-6 relative overflow-hidden">
    <Header />
    <SectionDivider />

    <!-- pt-[210px] на мобилках — это точка СРАЗУ под твоей линией LZ -->
    <!-- xl:pt-20 для десктопа вернет всё как было -->
    <div class="w-full flex flex-col items-center pt-[210px] sm:pt-[300px] xl:pt-20 z-10 transition-all duration-500">
      <OnboardingBox />
    </div>
  </div>
</template>