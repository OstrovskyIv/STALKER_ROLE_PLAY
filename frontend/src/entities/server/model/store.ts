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
  const error = ref(false)

  async function fetchStatus() {
    isLoading.value = true
    error.value = false

    try {
      // Добавляем timestamp, чтобы браузеры (особенно в ТГ) не выдавали старые данные из кэша
      const response = await fetch(`https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303?t=${Date.now()}`)

      if (!response.ok) throw new Error('CORS or Network error')

      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result
        isOnline.value = true
      } else {
        // Если API ответил, но данных по этому IP нет
        isOnline.value = false
      }
    } catch (err) {
      console.error('Monitoring Error:', err)
      isOnline.value = false
      error.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, error, fetchStatus }
})