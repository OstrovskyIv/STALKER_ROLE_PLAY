<script setup lang="ts">
import { Header } from '@widgets/header'
import RulesViewer from '@widgets/rules-viewer/ui/RulesViewer.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-black overflow-hidden relative">
    <router-link to="/" class="fixed top-8 right-8 z-[100] px-6 py-2 border border-white/20 bg-black text-white font-capture text-xs hover:bg-white hover:text-black transition-all">
      [ ВЕРНУТЬСЯ ]
    </router-link>

    <Header />

    <div class="flex-1 w-full flex items-center justify-center p-6 mt-20">
      <RulesViewer />
    </div>
  </div>
</template>