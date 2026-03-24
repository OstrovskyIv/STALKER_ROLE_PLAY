<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useNavStore } from '@entities/navigation'
import { HomeSection, InfoSection, ConnectSection, GallerySection } from '@widgets/sections'

const navStore = useNavStore()
let observer: IntersectionObserver | null = null

onMounted(() => {
  // threshold: 0.2 означает, что как только 20% следующей секции появилось - меню прыгает
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navStore.setActiveSection(entry.target.id)
      }
    })
  }, { threshold: 0.2 })

  const ids = ['home', 'information', 'connection', 'gallery']
  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <section id="home" class="h-screen w-full snap-start shrink-0"><HomeSection /></section>
    <section id="information" class="h-screen w-full snap-start shrink-0"><InfoSection /></section>
    <section id="connection" class="h-screen w-full snap-start shrink-0"><ConnectSection /></section>
    <section id="gallery" class="h-screen w-full snap-start shrink-0"><GallerySection /></section>
  </div>
</template>