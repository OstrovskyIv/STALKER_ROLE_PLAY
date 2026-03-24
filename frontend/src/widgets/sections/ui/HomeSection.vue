<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-[100dvh] flex flex-col relative overflow-hidden">
    <Header />
    <SectionDivider />

    <div class="flex-1 w-full flex flex-col items-center justify-center pt-[240px] sm:pt-[300px] xl:pt-[200px] z-10">
      <div class="w-full flex flex-col items-center transition-all duration-500 origin-center scale-[0.85] sm:scale-95 xl:scale-100">
        <OnboardingBox />
      </div>
    </div>
  </div>
</template>