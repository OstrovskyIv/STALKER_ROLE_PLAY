<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <!-- h-[100dvh] и justify-start на мобилках, чтобы блок не лез вверх -->
  <div class="w-full h-[100dvh] flex flex-col items-center justify-start xl:justify-center p-4 relative overflow-hidden">
    <Header />
    <SectionDivider />

    <!-- pt-[260px] на мобиле — это безопасная зона под лого, меню и линией -->
    <div class="w-full flex flex-col items-center pt-[240px] sm:pt-[300px] xl:pt-10 z-10 transition-all duration-500 origin-top scale-[0.85] sm:scale-100">
      <OnboardingBox />
    </div>
  </div>
</template>