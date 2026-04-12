<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useNavStore } from '@entities/navigation'
import { HomeSection, InfoSection, ConnectSection, GallerySection, ServerSection } from '@widgets/sections'

const navStore = useNavStore()
let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-10% 0px -80% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navStore.setActiveSection(entry.target.id)
      }
    })
  }, options)

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
    <section id="home" class="min-h-[100svh] h-auto w-full shrink-0"><HomeSection /></section>
    <section id="information" class="min-h-[100svh] h-auto w-full shrink-0"><InfoSection /></section>
    <section id="connection" class="min-h-[100svh] h-auto w-full shrink-0"><ConnectSection /></section>
    <section id="gallery" class="min-h-[100svh] h-auto w-full shrink-0"><GallerySection /></section>
    <section id="server" class="min-h-[100svh] h-auto w-full shrink-0"><ServerSection /></section>
  </div>
</template>