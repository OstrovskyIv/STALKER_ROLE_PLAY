<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center relative snap-start shrink-0 overflow-hidden">
    <Header />

    <div class="w-full h-[130px] sm:h-[195px] md:h-[235px] 2xl:h-[115px] shrink-0 pointer-events-none"></div>

    <SectionDivider />

    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 px-6">
      <div class="w-full flex flex-col items-center">
        <OnboardingBox />
      </div>
    </div>
  </section>
</template>