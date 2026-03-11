<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useNavStore } from '@entities/navigation'
import { HomeSection, InfoSection, ConnectSection, GallerySection } from '@widgets/sections'

const navStore = useNavStore()
const sectionsContainer = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

// Логика отслеживания секции в который вы находитесь
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navStore.setActiveSection(entry.target.id)
      }
    })
  }, { threshold: 0.6 })

  const ids = ['home', 'information', 'connection', 'gallery']
  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="sectionsContainer" class="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">

    <section id="home" class="h-screen w-full snap-start">
      <HomeSection />
    </section>

    <section id="information" class="h-screen w-full snap-start">
      <InfoSection />
    </section>

    <section id="connection" class="h-screen w-full snap-start">
      <ConnectSection />
    </section>

    <section id="gallery" class="h-screen w-full snap-start">
      <GallerySection />
    </section>

  </div>
</template>

<style>
::-webkit-scrollbar { display: none; }
</style>