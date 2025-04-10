import { defineStore } from "pinia"
import { ref } from "vue"
import axios from 'axios'

const API_KEY = '4hBDlSrRxC4ycO7xFENWlqn1A5OKbvIK';

export const useGiphyStore = defineStore('giphy', () => {
    const gifs = ref([])
    const loading = ref(false)

    const searchAllGifs = async () => {
        loading.value = true

        try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`
            )

            gifs.value = response.data.data
        } catch (error) {
            console.error('Erro ao buscar GIFs:', error)
        } finally {
            loading.value = false
        }
    }

    const searchGifsByQuery = async (query) => {
        if (!query) return

        loading.value = true
        try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=20`
            )
            gifs.value = response.data.data
        } catch (error) {
            console.error('Erro ao buscar GIFs:', error)
        } finally {
            loading.value = false
        }
    }

    return {
        gifs,
        loading,
        searchAllGifs,
        searchGifsByQuery
    }
})