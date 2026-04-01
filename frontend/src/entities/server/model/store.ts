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
  const errorType = ref<string | null>(null)

  // Список разных прокси-серверов для обхода блокировок в разных странах
  const proxies = [
    (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`
  ]

  const runDiagnostic = async (apiUrl: string) => {
    console.group('--- СЕКТОР ДИАГНОСТИКИ СВЯЗИ ---')
    console.log('UserAgent:', navigator.userAgent)
    console.log('Language:', navigator.language)

    try {
      await fetch(apiUrl, { mode: 'no-cors' })
      console.log('Прямой доступ к API: ДОСТУПЕН (но закрыт CORS)')
    } catch {
      console.error('Прямой доступ к API: ПОЛНОСТЬЮ ЗАБЛОКИРОВАН ПРОВАЙДЕРОМ')
    }
    console.groupEnd()
  }

  async function fetchStatus() {
    isLoading.value = true
    errorType.value = null
    const targetUrl = `https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303?t=${Date.now()}`

    await runDiagnostic(targetUrl)

    // Пытаемся по очереди использовать разные прокси
    for (const getProxyUrl of proxies) {
      const currentProxyUrl = getProxyUrl(targetUrl)
      const proxyName = new URL(currentProxyUrl).hostname

      try {
        console.log(`[MONITORING] Попытка через: ${proxyName}`)
        const response = await fetch(currentProxyUrl)

        if (!response.ok) continue // Если прокси выдал 403 или 500, пробуем следующий

        const resData = await response.json()

        // Обработка разных форматов ответов от разных прокси
        let finalData = resData
        if (resData.contents) { // Формат allorigins
          finalData = JSON.parse(resData.contents)
        }

        if (finalData && finalData.result) {
          serverData.value = finalData.result as ServerData
          isOnline.value = true
          console.log(`[MONITORING] Успешно получено через ${proxyName}`)
          isLoading.value = false
          return // Выходим из цикла, если всё ок
        }
      } catch (err) {
        console.warn(`[MONITORING] Прокси ${proxyName} не подошел:`, err)
      }
    }

    // Если ни один прокси не сработал
    isOnline.value = false
    errorType.value = 'ALL_PROXIES_FAILED'
    isLoading.value = false
  }

  return { serverData, isOnline, isLoading, errorType, fetchStatus }
})