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

    const targetUrl = `https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303?t=${Date.now()}`

    try {
      const response = await fetch(targetUrl)
      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result as ServerData
        isOnline.value = true
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