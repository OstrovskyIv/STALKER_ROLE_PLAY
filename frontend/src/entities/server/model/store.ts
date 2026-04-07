import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ServerData {
  players: number;
  maxPlayers: number;
  time: string;
  map: string;
  name: string;
}

export const useServerStore = defineStore('server', () => {
  const serverData = ref<ServerData | null>(null)
  const isOnline = ref(false)
  const isLoading = ref(false)

  async function fetchStatus() {
    if (isLoading.value) return
    isLoading.value = true

    const workerUrl = 'https://lz-monitoring.ostrovskyiml.workers.dev/'

    try {
      const response = await fetch(workerUrl)
      if (!response.ok) throw new Error()

      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result as ServerData
        isOnline.value = true
      }
    } catch {
      isOnline.value = false
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, fetchStatus }
})