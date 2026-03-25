<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-[100svh] flex flex-col items-center justify-start p-4 relative overflow-hidden">
    <Header />
    <SectionDivider />

    <div class="w-full flex flex-col items-center pt-[290px] sm:pt-[310px] xl:pt-[350px] z-10 transition-all duration-500 origin-top scale-[0.82] sm:scale-100 xl:scale-100">
      <OnboardingBox />
    </div>
  </div>
</template>