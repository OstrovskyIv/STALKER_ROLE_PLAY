import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ServerData {
  players: number;
  maxPlayers: number;
  time: string;
  map: string;
  name: string;
}

interface ApiResponse {
  result: ServerData;
}

export const useServerStore = defineStore('server', () => {
  const serverData = ref<ServerData | null>(null)
  const isOnline = ref(false)
  const isLoading = ref(false)
  const errorType = ref<string | null>(null)

  async function fetchStatus() {
    isLoading.value = true
    errorType.value = null

    const apiUrl = 'https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303'
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl + '?t=' + Date.now())}`

    try {
      const response = await fetch(proxyUrl)

      if (!response.ok) {
        isOnline.value = false
        errorType.value = 'PROXY_ERROR'
        return
      }

      const data = (await response.json()) as ApiResponse

      if (data && data.result) {
        serverData.value = data.result
        isOnline.value = true
      } else {
        errorType.value = 'EMPTY_DATA'
        isOnline.value = false
      }
    } catch (err) {
      isOnline.value = false
      errorType.value = err instanceof Error ? err.message : 'CONNECTION_BLOCKED'
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, errorType, fetchStatus }
})