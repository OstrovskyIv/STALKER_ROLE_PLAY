<script setup lang="ts">
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
</script>

<template>
  <MainBackground />
  <Navbar />

  <div class="relative z-10 w-full h-screen overflow-y-auto overflow-x-hidden pt-10 xl:pt-0">
    <router-view />
  </div>
</template>
