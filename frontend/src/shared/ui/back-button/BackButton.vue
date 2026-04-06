<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <router-link :to="to" class="group flex items-center gap-3 text-zinc-500 hover:text-[#9241b8] transition-all font-capture text-sm md:text-lg pointer-events-auto">
    <span class="border border-zinc-700 group-hover:border-[#9241b8] px-2 py-0.5 rounded transition-colors">&lt;</span>
    ВЕРНУТЬСЯ НА БАЗУ
  </router-link>
</template>