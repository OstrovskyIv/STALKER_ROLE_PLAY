<script setup lang="ts">
import { Header } from '@widgets/header'
import { SectionDivider } from '@shared/ui'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section class="w-full min-h-screen h-auto flex flex-col items-center relative shrink-0 bg-transparent">
    <Header />
    <div class="w-full h-[130px] sm:h-[195px] md:h-[235px] 2xl:h-[115px] shrink-0 pointer-events-none"></div>

    <SectionDivider />

    <div class="w-full flex flex-col items-center justify-center z-10 px-6 py-10 md:py-20">
      <OnboardingBox />
    </div>

    <div class="h-20 w-full shrink-0"></div>
  </section>
</template>