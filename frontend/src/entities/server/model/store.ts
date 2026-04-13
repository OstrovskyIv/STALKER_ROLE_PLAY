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
  const lastFetched = ref<number>(0)

  async function fetchStatus() {
    const now = Date.now()
    const tenMinutes = 10 * 60 * 1000

    if (serverData.value && (now - lastFetched.value < tenMinutes)) {
      return
    }

    if (isLoading.value) return
    isLoading.value = true

    const workerUrl = 'https://lz-monitoring.ostrovskyiml.workers.dev/'

    try {
      const response = await fetch(`${workerUrl}?t=${now}`)

      if (!response.ok) {
        isOnline.value = false
        return
      }

      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result as ServerData
        isOnline.value = true
        lastFetched.value = now
      } else {
        isOnline.value = false
      }
    } catch {
      isOnline.value = false
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, fetchStatus }
})