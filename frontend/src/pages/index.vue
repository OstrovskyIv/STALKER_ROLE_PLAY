<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useNavStore } from '@entities/navigation'
import { HomeSection, InfoSection, ConnectSection, GallerySection, ServerSection } from '@widgets/sections'

const navStore = useNavStore()
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        navStore.setActiveSection(entry.target.id)
      }
    })
  }, { threshold: 0.5 })

  const ids = ['home', 'information', 'connection', 'gallery', 'server']
  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <section id="home" class="h-[100svh] w-full shrink-0"><HomeSection /></section>
    <section id="information" class="h-[100svh] w-full shrink-0"><InfoSection /></section>
    <section id="connection" class="h-[100svh] w-full shrink-0"><ConnectSection /></section>
    <section id="gallery" class="h-[100svh] w-full shrink-0"><GallerySection /></section>
    <section id="server" class="h-[100svh] w-full shrink-0"><ServerSection /></section>
  </div>
</template>