<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-[100svh] flex flex-col items-center relative overflow-hidden">
    <Header />
    <SectionDivider />

    <div class="h-[210px] sm:h-[270px] xl:h-[190px] w-full shrink-0"></div>

    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 pb-6 transition-all duration-500 origin-center scale-[0.82] sm:scale-100 xl:scale-100">
      <OnboardingBox />
    </div>
  </div>
</template>