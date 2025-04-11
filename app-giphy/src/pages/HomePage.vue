<template>
    <div :class="['h-screen px-4 pt-6 pb-6 flex flex-col transition-colors duration-300', isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
      
      <!-- Campo de busca -->
      <div class="flex justify-center items-center mb-4 gap-2">
        <input
          v-model="searchQuery"
          @keyup.enter="searchGifs"
          type="text"
          placeholder="Buscar GIFs..."
          class="w-[320px] px-5 py-3 border rounded-xl shadow-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
        />
        <button @click="searchGifs" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Buscar
        </button>
      </div>
  
      <!-- Conteúdo -->
      <div class="flex-1 overflow-hidden">
        <!-- Loading -->
        <div v-if="loading" class="flex justify-center items-center h-full">
          <Vue3Lottie :animation-data="loadingAnimation" :loop="true" class="w-20 h-20" />
        </div>
  
        <!-- Nenhum resultado -->
        <div v-else-if="!loading && gifs.length === 0" class="flex flex-col justify-center items-center h-full text-gray-600 dark:text-gray-300">
          <Vue3Lottie :animation-data="notFoundAnimation" :loop="true" class="w-32 h-32" />
          <p class="mt-4 text-lg">Nenhum GIF encontrado.</p>
        </div>
  
        <!-- Lista de GIFs -->
        <div
          v-else
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-y-auto h-full pr-2"
        >
          <div
            v-for="gif in gifs"
            :key="gif.id"
            :class="[isDark ? 'bg-gray-800' : 'bg-white', 'rounded-lg overflow-hidden shadow']"
          >
            <img
              :src="gif.images.fixed_height.url"
              :alt="gif.title"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
  
      <!-- Paginação -->
      <div v-if="gifs.length > 0" class="flex justify-center gap-4 mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Página Anterior
        </button>
  
        <span class="self-center text-lg font-medium">Página {{ currentPage }}</span>
  
        <button
          @click="nextPage"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Próxima Página
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useGiphyStore } from '../stores/giphyStore'
  import { useThemeStore } from '../stores/themeStore'
  import { storeToRefs } from 'pinia'
  import { Vue3Lottie } from 'vue3-lottie'
  
  import loadingAnimation from '../assets/loading.json'
  import notFoundAnimation from '../assets/no-data-found.json'
  
  // Tema global
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)
  
  // Store Giphy
  const store = useGiphyStore()
  const searchQuery = ref('')
  
  const {
    gifs,
    loading,
    currentPage
  } = storeToRefs(store)
  
  const {
    searchAllGifs,
    searchGifsByQuery,
    nextPage,
    prevPage
  } = store
  
  const searchGifs = () => {
    store.currentPage = 1
    store.lastSearchQuery = searchQuery.value.trim()
    if (searchQuery.value.trim() === '') {
      searchAllGifs()
    } else {
      searchGifsByQuery(searchQuery.value)
    }
  }
  
  onMounted(() => {
    searchAllGifs()
  })
  </script>
  