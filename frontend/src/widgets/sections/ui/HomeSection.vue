<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section class="w-full min-h-screen flex flex-col items-center relative snap-start shrink-0">
    <Header />
    <SectionDivider />

    <div class="h-[140px] sm:h-[260px] xl:h-[210px] 2xl:h-[290px] w-full shrink-0"></div>

    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 px-4 pb-6">
      <div class="w-full max-w-7xl flex flex-col items-center">
        <OnboardingBox />
      </div>
    </div>
  </section>
</template>