import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

const apiKey = 'qNQZcMw7FF6TrOQ0RAyshhYbdxDxi2ds'

export const useGiphyStore = defineStore('giphy', () => {
  const gifs = ref([])
  const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || [])
  const loading = ref(false)
  const currentPage = ref(1)
  const lastSearchQuery = ref('')
  const perPage = 20
  const cache = reactive({})

  const isFavorited = (id) => {
    return favorites.value.some(gif => gif.id === id)
  }

  const searchAllGifs = async () => {
    loading.value = true
    const offset = (currentPage.value - 1) * perPage
    const cacheKey = `trending-${offset}`

    if (cache[cacheKey]) {
      gifs.value = cache[cacheKey]
      loading.value = false
      return
    }

    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${perPage}&offset=${offset}`)
      const data = await res.json()
      gifs.value = data.data
      cache[cacheKey] = data.data
    } catch (err) {
      console.error('Erro ao buscar GIFs trending:', err)
    } finally {
      loading.value = false
    }
  }

  const searchGifsByQuery = async (query) => {
    loading.value = true
    const offset = (currentPage.value - 1) * perPage
    const cacheKey = `${query}-${offset}`

    if (cache[cacheKey]) {
      gifs.value = cache[cacheKey]
      loading.value = false
      return
    }

    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${perPage}&offset=${offset}`)
      const data = await res.json()
      gifs.value = data.data
      cache[cacheKey] = data.data
    } catch (err) {
      console.error('Erro ao buscar GIFs por pesquisa:', err)
    } finally {
      loading.value = false
    }
  }

  const toggleFavorite = (gif) => {
    const index = favorites.value.findIndex(fav => fav.id === gif.id)
    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(gif)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const nextPage = () => {
    currentPage.value++
    if (lastSearchQuery.value) {
      searchGifsByQuery(lastSearchQuery.value)
    } else {
      searchAllGifs()
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
      if (lastSearchQuery.value) {
        searchGifsByQuery(lastSearchQuery.value)
      } else {
        searchAllGifs()
      }
    }
  }

  return {
    gifs,
    favorites,
    loading,
    currentPage,
    lastSearchQuery,
    isFavorited,
    searchAllGifs,
    searchGifsByQuery,
    toggleFavorite,
    nextPage,
    prevPage
  }
})
