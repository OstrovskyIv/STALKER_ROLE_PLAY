<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { rulesData, type RuleSection } from '@entities/rules'
import { BackButton } from '@shared/ui'

const searchQuery = ref('')
const selectedRuleId = ref(rulesData[0]?.id || '')
const scrollContainer = ref<HTMLElement | null>(null)

const filteredRules = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return rulesData
  return rulesData.filter(rule => rule.title.toLowerCase().includes(query) || rule.content.toLowerCase().includes(query))
})

const activeRule = computed((): RuleSection => {
  const found = rulesData.find(r => r.id === selectedRuleId.value)
  return found ?? (rulesData[0] as RuleSection)
})

watch(selectedRuleId, () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0
  }
})

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escapedQuery})`, 'gi')
  return text.replace(regex, '<span class="bg-[#9241b8] text-white px-1 rounded-sm">$1</span>')
}
</script>

<template>
  <div v-if="activeRule" class="w-full max-w-[1700px] h-[95vh] md:h-[90vh] flex flex-col md:flex-row bg-black/40 border-2 border-white/10 rounded-[1rem] md:rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl">

    <div class="w-full md:w-[450px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black/20">

      <div class="p-6 md:p-10 border-b border-white/10 flex flex-col gap-4">
        <BackButton to="/" />
        <input v-model="searchQuery" type="text" placeholder="ПОИСК ПО ПРАВИЛАМ..."
               class="w-full bg-black/40 border border-[#9241b8]/50 p-4 rounded-xl text-white font-capture text-xs md:text-base outline-none focus:border-[#9241b8]"
        />
      </div>

      <div class="flex md:flex-col overflow-x-auto md:overflow-y-auto p-4 gap-3 no-scrollbar">
        <div v-if="filteredRules.length === 0" class="p-10 text-center text-zinc-600 font-capture uppercase text-xs">Ничего не найдено</div>
        <button v-for="rule in filteredRules" :key="rule.id" @click="selectedRuleId = rule.id"
                :class="['shrink-0 md:shrink-1 text-left p-4 md:p-6 rounded-xl font-capture text-[10px] md:text-lg tracking-widest transition-all uppercase whitespace-nowrap md:whitespace-normal',
            selectedRuleId === rule.id ? 'bg-[#9241b8] text-white shadow-[0_0_30px_rgba(146,65,184,0.6)]' : 'text-zinc-500 hover:bg-white/5']"
                v-html="highlightText(rule.title, searchQuery)"
        >
        </button>
      </div>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden relative">
      <div ref="scrollContainer" class="p-6 md:p-16 overflow-y-auto relative z-10 no-scrollbar text-left flex flex-col gap-6 md:gap-10">
        <h2 class="text-2xl md:text-5xl font-capture text-[#9241b8] uppercase italic leading-tight drop-shadow-xl"
            v-html="highlightText(activeRule.title, searchQuery)">
        </h2>
        <div class="text-zinc-100 text-base md:text-2xl leading-relaxed whitespace-pre-line border-l-[4px] md:border-l-[8px] border-[#9241b8]/50 pl-6 md:pl-10 font-sans font-medium italic drop-shadow-md"
             v-html="highlightText(activeRule.content, searchQuery)">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>