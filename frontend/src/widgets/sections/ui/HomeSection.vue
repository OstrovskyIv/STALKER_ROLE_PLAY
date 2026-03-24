<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-start xl:justify-center p-4 relative overflow-hidden">
    <Header />
    <SectionDivider />
    <div class="w-full flex flex-col items-center pt-[220px] sm:pt-[300px] xl:pt-10 z-10 transition-all duration-500">
      <OnboardingBox />
    </div>
  </div>
</template>