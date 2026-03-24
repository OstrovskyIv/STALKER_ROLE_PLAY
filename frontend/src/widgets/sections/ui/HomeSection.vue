<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-start xl:justify-center p-4 md:p-6 relative overflow-hidden">
    <Header />
    <div class="absolute top-[180px] sm:top-[256px] xl:top-[160px] w-full z-10">
      <SectionDivider />
    </div>
    <div class="w-full flex flex-col items-center pt-[220px] sm:pt-[320px] xl:pt-20 z-10 transition-all duration-500">
      <OnboardingBox />
    </div>
  </div>
</template>