<script setup lang="ts">
defineProps<{
  size: string
  left: string
  top: string
  delay: string
  duration: string
}>()
</script>

<template>
  <div
    class="absolute rounded-full bg-fuchsia-300 opacity-0 animate-fly pointer-events-none shadow-[0_0_15px_rgba(217,70,239,1),0_0_5px_white]"
    :style="{
      width: size,
      height: size,
      left: left,
      top: top,
      animationDelay: delay,
      animationDuration: duration
    }"
  ></div>
</template>

<style scoped>
@keyframes fly {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translate(60px, -150px); opacity: 0.5; }
  85% { opacity: 1; }
  100% { transform: translate(-20px, -400px); opacity: 0; }
}
.animate-fly {
  animation: fly linear infinite;
}
</style>
