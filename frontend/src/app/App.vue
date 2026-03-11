<script setup lang="ts">
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
import { Header } from '@widgets/header'
</script>

<template>
  <MainBackground />

  <Header />
  <Navbar />

  <div class="relative z-10 w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
    <router-view />
  </div>
</template>