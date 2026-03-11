<script setup lang="ts">
import { MainBackground } from '@widgets/main-background'
import { Navbar } from '@widgets/navbar'
</script>

<template>
  <MainBackground />
  <Navbar />

  <router-view />
</template>