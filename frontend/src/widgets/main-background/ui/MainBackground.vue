<script setup lang="ts">
import { Firefly } from '@shared/ui'
import bgImage from '@shared/assets/images/bg-main.webp'

const fireflies = Array.from({ length: 80 }).map((_, i) => ({
  id: i,
  size: `${Math.random() * 4 + 1.5}px`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 20}s`,
  duration: `${Math.random() * 15 + 10}s`
}))
</script>

<template>
  <div class="fixed inset-0 z-0 overflow-hidden bg-black flex items-center justify-center pointer-events-none">

    <img
      :src="bgImage"
      class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[0.1]"
      style="will-change: transform; transform: translateZ(0);"
      alt="Background"
    />

    <!-- Рой из 80 светлячков -->
    <Firefly
      v-for="f in fireflies"
      :key="f.id"
      :size="f.size"
      :left="f.left"
      :top="f.top"
      :delay="f.delay"
      :duration="f.duration"
    />

    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] opacity-40"></div>
    <div class="absolute inset-0 bg-fuchsia-900/5 mix-blend-overlay"></div>
  </div>
</template>