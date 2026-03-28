<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <Header />
    <SectionDivider />
    <!-- Распорка h-[210px] гарантирует, что контент начнется НИЖЕ линии на мобилках -->
    <div class="h-[210px] sm:h-[280px] xl:h-[200px] w-full shrink-0"></div>
    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 px-4 pb-10">
      <div class="w-full max-w-7xl flex flex-col items-center">
        <OnboardingBox />
      </div>
    </div>
  </section>
</template>