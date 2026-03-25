<script setup lang="ts">
import { ref, computed } from 'vue'
import { rulesData, type RuleSection } from '@entities/rules/model/items'

const searchQuery = ref('')
const selectedRuleId = ref(rulesData[0]?.id || '')

const filteredRules = computed(() => {
  return rulesData.filter(rule =>
    rule.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const activeRule = computed((): RuleSection => {
  const found = rulesData.find(r => r.id === selectedRuleId.value)
  return found ?? (rulesData[0] as RuleSection)
})
</script>

<template>
  <div v-if="activeRule" class="w-full max-w-7xl h-[70vh] flex flex-col md:flex-row bg-zinc-950/90 border-2 border-white/20 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full md:w-80 border-r border-white/10 flex flex-col bg-black/40">
      <div class="p-6 border-b border-white/10">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="ПОИСК..."
          class="w-full bg-zinc-900 border border-white/20 p-3 rounded-xl text-white font-capture text-[10px] outline-none focus:border-[#9241b8]"
        />
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
        <button
          v-for="rule in filteredRules"
          :key="rule.id"
          @click="selectedRuleId = rule.id"
          :class="[
            'w-full text-left p-4 rounded-xl font-capture text-[10px] tracking-widest transition-all',
            selectedRuleId === rule.id
              ? 'bg-[#9241b8] text-white shadow-[0_0_20px_rgba(146,65,184,0.4)]'
              : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300'
          ]"
        >
          {{ rule.title }}
        </button>
      </div>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden relative">
      <div class="absolute inset-0 opacity-5 pointer-events-none bg-scanlines"></div>

      <div class="p-8 md:p-12 overflow-y-auto relative z-10 no-scrollbar text-left">
        <h2 class="text-2xl md:text-5xl font-capture text-[#9241b8] mb-8 uppercase italic">
          {{ activeRule.title }}
        </h2>

        <div class="text-zinc-200 font-sans text-sm md:text-lg leading-relaxed whitespace-pre-line border-l-2 border-[#9241b8]/30 pl-6 font-bold uppercase">
          {{ activeRule.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.bg-scanlines {
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 50%);
  background-size: 100% 4px;
}
</style>