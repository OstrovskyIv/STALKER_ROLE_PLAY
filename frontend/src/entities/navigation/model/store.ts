import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('navigation', () => {
  const activeSectionId = ref('home')

  function setActiveSection(id: string) {
    activeSectionId.value = id
  }

  return { activeSectionId, setActiveSection }
})