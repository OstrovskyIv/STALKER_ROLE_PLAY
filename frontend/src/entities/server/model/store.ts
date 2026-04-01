import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ServerData {
  players: number;
  maxPlayers: number;
  time: string;
  map: string;
  name: string;
}

interface AllOriginsResponse {
  contents: string;
  status: {
    http_code: number;
  };
}

export const useServerStore = defineStore('server', () => {
  const serverData = ref<ServerData | null>(null)
  const isOnline = ref(false)
  const isLoading = ref(false)
  const errorType = ref<string | null>(null)

  const runDiagnostic = async (apiUrl: string) => {
    console.group('--- СЕКТОР ДИАГНОСТИКИ СВЯЗИ ---')
    console.log('Браузер:', navigator.userAgent)
    console.log('Язык:', navigator.language)
    console.log('Онлайн статус браузера:', navigator.onLine)

    try {
      const start = Date.now()
      await fetch(apiUrl, { mode: 'no-cors' })
      console.log(`Прямой пинг до API: OK (${Date.now() - start}ms)`)
    } catch {
      console.error('Прямой пинг до API: ЗАБЛОКИРОВАНО ПРОВАЙДЕРОМ')
    }

    try {
      const proxyRes = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://google.com')}`)
      console.log('Доступность прокси:', proxyRes.ok ? 'OK' : 'BLOCKED')
    } catch {
      console.error('Доступность прокси: НЕТ СВЯЗИ')
    }
    console.groupEnd()
  }

  async function fetchStatus() {
    isLoading.value = true
    errorType.value = null

    const apiUrl = 'https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303'
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl + '?t=' + Date.now())}`

    await runDiagnostic(apiUrl)

    try {
      const response = await fetch(proxyUrl)

      if (!response.ok) {
        errorType.value = `HTTP_ERR_${response.status}`
        isOnline.value = false
        return
      }

      const rawData = (await response.json()) as AllOriginsResponse
      const data = JSON.parse(rawData.contents)

      if (data && data.result) {
        serverData.value = data.result as ServerData
        isOnline.value = true
      } else {
        errorType.value = 'EMPTY_DATA'
        isOnline.value = false
      }
    } catch (err) {
      isOnline.value = false
      errorType.value = err instanceof Error ? err.message : 'CONNECTION_FAILED'
    } finally {
      isLoading.value = false
    }
  }

  return { serverData, isOnline, isLoading, errorType, fetchStatus }
})