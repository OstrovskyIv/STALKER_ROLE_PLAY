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

  const proxies = [
    (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`
  ]

  async function fetchStatus() {
    isLoading.value = true
    errorType.value = null
    const targetUrl = `https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303?t=${Date.now()}`

    for (const getProxyUrl of proxies) {
      try {
        const response = await fetch(getProxyUrl(targetUrl))
        if (!response.ok) continue

        const resData = await response.json()
        let finalData = resData

        if (resData.contents) {
          try {
            finalData = JSON.parse(resData.contents)
          } catch {
            continue
          }
        }

        if (finalData && finalData.result) {
          serverData.value = finalData.result as ServerData
          isOnline.value = true
          errorType.value = null
          isLoading.value = false
          return
        }
      } catch {
        continue
      }
    }

    isOnline.value = false
    errorType.value = 'CONNECTION_LOST'
    isLoading.value = false
  }

  return { serverData, isOnline, isLoading, errorType, fetchStatus }
})