<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import logoFull from '@shared/assets/images/logo-full.webp'
import logoCircle from '@shared/assets/images/logo-circle.webp'
import { useNavStore } from '@entities/navigation'

const navStore = useNavStore()
const isOverlapping = ref(false)
const headerRef = ref<HTMLElement | null>(null)

const checkCollision = () => {
  const navElement = document.querySelector('nav > div')
  const logoElement = headerRef.value?.querySelector('img')

  if (navElement && logoElement) {
    const navRect = navElement.getBoundingClientRect()
    const logoRect = logoElement.getBoundingClientRect()

    if (window.innerWidth < 1280) {
      isOverlapping.value = false
    } else {
      isOverlapping.value = logoRect.right > navRect.left - 20
    }
  }
}

onMounted(() => {
  window.addEventListener('resize', checkCollision)
  const observer = new MutationObserver(() => nextTick(checkCollision))
  const nav = document.querySelector('nav')
  if (nav) {
    observer.observe(nav, { attributes: true, childList: true, subtree: true })
  }
  setTimeout(checkCollision, 200)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkCollision)
})
</script>

<template>
  <header
    ref="headerRef"
    :class="[
      'absolute left-0 w-full flex justify-center xl:justify-start xl:left-8 2xl:left-12 z-20 pointer-events-none transition-all duration-500 ease-out',
      'top-2 sm:top-4 xl:top-6',
      navStore.activeSectionId === 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"
  >
    <div class="flex justify-center w-full xl:w-auto p-4 sm:p-6 xl:p-0 pointer-events-auto">
      <img
        :src="isOverlapping ? logoCircle : logoFull"
        :class="[
          'w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]',
          isOverlapping
            ? 'h-16 xl:h-24 2xl:h-32'
            : 'h-20 sm:h-28 md:h-32 xl:h-40 2xl:h-48'
        ]"
        alt="Last Zone"
      />
    </div>
  </header>
</template>