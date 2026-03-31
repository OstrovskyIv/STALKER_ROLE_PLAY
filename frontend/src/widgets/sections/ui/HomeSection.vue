<script setup lang="ts">
import { Header } from '@widgets/header'
import { OnboardingBox } from '@features/onboarding-steps'
</script>

<template>
  <section
    class="w-full h-screen flex flex-col items-center justify-center relative snap-start shrink-0 overflow-hidden
           pt-[150px] sm:pt-[340px] md:pt-[380px] 2xl:pt-[200px]"
  >
    <Header />

    <div class="w-full flex-1 flex flex-col items-center justify-center z-10 px-3 md:px-6">
      <div class="w-full max-w-7xl flex flex-col items-center">
        <OnboardingBox />
      </div>
    </div>
  </section>
</template>