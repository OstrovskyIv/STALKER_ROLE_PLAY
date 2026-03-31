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

  async function fetchStatus() {
    try {
      const response = await fetch('https://dayzsalauncher.com/api/v1/query/80.242.59.107:2303')
      const data = await response.json()

      if (data && data.result) {
        serverData.value = data.result
        isOnline.value = true
      }
    } catch {
      isOnline.value = false
    }
  }

  return { serverData, isOnline, fetchStatus }
})