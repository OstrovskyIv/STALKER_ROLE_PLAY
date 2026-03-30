<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <Header />
    <SectionDivider />

    <div class="h-[155px] sm:h-[240px] xl:h-[180px] w-full shrink-0 transition-all duration-500"></div>

    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 px-4 pb-10 transition-all duration-700">
      <div class="w-full max-w-7xl flex flex-col items-center">
        <OnboardingBox />
      </div>
    </div>
  </section>
</template>