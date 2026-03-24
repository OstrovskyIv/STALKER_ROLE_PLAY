<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-start xl:justify-center p-4 relative overflow-hidden">
    <Header />
    <SectionDivider />

    <!-- pt-[180px] на мобилках — бокс начнется сразу под линией (которая на 145px) -->
    <div class="w-full flex flex-col items-center pt-[180px] sm:pt-[280px] xl:pt-10 z-10">
      <OnboardingBox />
    </div>
  </div>
</template>