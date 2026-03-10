<script setup lang="ts">
const navLinks = [
  { name: 'подключение', path: '/' },
  { name: 'информация', path: '/information' },
  { name: 'связь', path: '/connection' },
  { name: 'галерея', path: '/gallery' }
]
</script>

<template>
  <nav class="fixed top-36 sm:top-44 md:top-64 xl:top-20 left-0 w-full z-30 flex justify-center px-4 pointer-events-none font-capture">
    <div
      class="flex items-center gap-3 sm:gap-6 xl:gap-10 px-6 sm:px-10 py-2 xl:py-4
             bg-zinc-950 border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.7)]
             rounded-full pointer-events-auto transition-all duration-500"
    >
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        #default="{ isActive }"
      >
        <div
          :class="[
            'text-[10px] sm:text-[12px] xl:text-[15px] tracking-tight xl:tracking-[0.2em] transition-all duration-300 flex items-center gap-1 uppercase whitespace-nowrap',
            isActive
              ? 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,1)] scale-110'
              : 'text-zinc-400 hover:text-white'
          ]"
        >
          <span :class="['transition-opacity duration-300', isActive ? 'opacity-100' : 'opacity-0']">[</span>
          <span>{{ link.name }}</span>
          <span :class="['transition-opacity duration-300', isActive ? 'opacity-100' : 'opacity-0']">]</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>