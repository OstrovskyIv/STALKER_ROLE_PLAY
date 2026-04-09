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
      console.log('[MONITOR] Запрос отправлен на:', workerUrl)

      const response = await fetch(`${workerUrl}?t=${Date.now()}`)

      console.log('[MONITOR] Статус ответа:', response.status)

      if (!response.ok) {
        console.error('[MONITOR] Ошибка сервера Cloudflare. Код:', response.status)
        isOnline.value = false
        return
      }

      const data = await response.json()
      console.log('[MONITOR] Данные получены:', data)

      if (data && data.result) {
        serverData.value = data.result as ServerData
        isOnline.value = true
        console.log('[MONITOR] СЕРВЕР ОНЛАЙН. Игроков:', data.result.players)
      } else {
        console.warn('[MONITOR] Лаунчер прислал пустой результат (null)')
        isOnline.value = false
      }
    } catch (err) {
      console.error('[MONITOR] КРИТИЧЕСКАЯ ОШИБКА:', err)
      isOnline.value = false
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, fetchStatus }
})