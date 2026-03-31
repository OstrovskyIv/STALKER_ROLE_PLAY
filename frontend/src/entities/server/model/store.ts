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
  const errorType = ref<string | null>(null) // Храним тип ошибки

  async function fetchStatus() {
    isLoading.value = true
    errorType.value = null

    const apiUrl = 'https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303'

    try {
      // Пытаемся сделать запрос с минимальным таймаутом
      const controller = new AbortController()
      const id = setTimeout(() => controller.abort(), 5000)

      const response = await fetch(`${apiUrl}?t=${Date.now()}`, { signal: controller.signal })
      clearTimeout(id)

      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result
        isOnline.value = true
      } else {
        errorType.value = 'EMPTY_RESPONSE'
        isOnline.value = false
      }
    } catch (err: any) {
      isOnline.value = false
      if (err.name === 'AbortError') {
        errorType.value = 'TIMEOUT (Медленный интернет)'
      } else if (err.message === 'Failed to fetch') {
        errorType.value = 'BLOCKED (CORS / AdBlock / Провайдер)'
      } else {
        errorType.value = err.message || 'UNKNOWN_ERROR'
      }
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, errorType, fetchStatus }
})