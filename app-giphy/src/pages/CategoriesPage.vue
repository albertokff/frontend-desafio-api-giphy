<template>
    <div :class="[isDark ? 'bg-[#0b1c2c] text-white' : 'bg-[#e6f1f5] text-gray-900']" class="min-h-screen p-4 transition-colors">
      <h1 class="text-2xl font-bold mb-4">Categorias Populares</h1>
  
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <button
          v-for="category in categories"
          :key="category"
          @click="searchCategory(category)"
          class="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl text-lg font-medium shadow transition"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
    import { useGiphyStore } from '../stores/giphyStore'
    import { useRouter } from 'vue-router'
    import { useThemeStore } from '../stores/themeStore'
    import { storeToRefs } from 'pinia'
    
    const categories = [
        'Gatos', 'Memes', 'Reacts', 'Anime', 'Cachorros', 'Wow', 'Dance',
        'Triste', 'Feliz', 'Filmes', 'Games', 'Desenhos'
    ]
    
    const store = useGiphyStore()
    const router = useRouter()
    const themeStore = useThemeStore()
    const { isDark } = storeToRefs(themeStore)
    
    const searchCategory = async (category) => {
        store.currentPage = 1
        store.lastSearchQuery = category
        await store.searchGifsByQuery(category)
        router.push('/')
    }
    </script>
  