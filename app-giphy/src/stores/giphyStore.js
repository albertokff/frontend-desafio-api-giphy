import { defineStore } from "pinia"
import { ref } from "vue"
import axios from 'axios'

const API_KEY = '4hBDlSrRxC4ycO7xFENWlqn1A5OKbvIK'

export const useGiphyStore = defineStore('giphy', () => {
  const gifs = ref([])
  const loading = ref(false)
  const currentPage = ref(1)
  const lastSearchQuery = ref('')
  const limit = 20
  const offset = ref(0)

  const fetchGifs = async (url) => {
    loading.value = true
    try {
      const response = await axios.get(url)
      gifs.value = response.data.data
    } catch (error) {
      console.error('Erro ao buscar GIFs:', error)
    } finally {
      loading.value = false
    }
  }

  const searchAllGifs = async () => {
    offset.value = (currentPage.value - 1) * limit
    await fetchGifs(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset.value}`)
  }

  const searchGifsByQuery = async (query) => {
    offset.value = (currentPage.value - 1) * limit
    await fetchGifs(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset.value}`)
  }

  const nextPage = async () => {
    currentPage.value++
    if (lastSearchQuery.value) {
      await searchGifsByQuery(lastSearchQuery.value)
    } else {
      await searchAllGifs()
    }
  }

  const prevPage = async () => {
    if (currentPage.value > 1) {
      currentPage.value--
      if (lastSearchQuery.value) {
        await searchGifsByQuery(lastSearchQuery.value)
      } else {
        await searchAllGifs()
      }
    }
  }

  return {
    gifs,
    loading,
    currentPage,
    lastSearchQuery,
    searchAllGifs,
    searchGifsByQuery,
    nextPage,
    prevPage
  }
})
