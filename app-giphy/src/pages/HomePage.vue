<template>
    <div :class="['h-screen px-4 pt-6 pb-6 flex flex-col transition-colors duration-300', isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900']">
      <div class="flex justify-center items-center mb-4 gap-2">
        <input
          v-model="searchQuery"
          @keyup.enter="searchGifs"
          type="text"
          placeholder="Buscar GIFs..."
          class="w-[320px] px-5 py-3 border rounded-xl shadow-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
        />
        <button @click="searchGifs" class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
          Buscar
        </button>
      </div>
  
      <div class="flex-1 overflow-hidden">
        <div v-if="loading" class="flex justify-center items-center h-full">
          <Vue3Lottie :animation-data="loadingAnimation" :loop="true" class="w-20 h-20" />
        </div>
  
        <div v-else-if="!loading && gifs.length === 0" class="flex flex-col justify-center items-center h-full text-gray-600">
          <Vue3Lottie :animation-data="notFoundAnimation" :loop="true" class="w-32 h-32" />
          <p class="mt-4 text-lg">Nenhum GIF encontrado.</p>
        </div>
  
        <div v-else :class="['grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-y-auto h-full pr-2']">
          <div v-for="gif in gifs" :key="gif.id" class="relative">
            <img :src="gif.images.fixed_height.url" :alt="gif.title" class="w-full h-auto object-cover rounded-xl shadow" />
            <button
              @click="toggleFavoriteWithToast(gif)"
              class="absolute top-2 right-2 p-1 rounded-full bg-white/90 hover:bg-white transition"
            >
              <q-icon :name="isFavorited(gif.id) ? 'favorite' : 'favorite_border'" :color="isFavorited(gif.id) ? 'red' : 'grey'" />
            </button>
          </div>
        </div>
      </div>
  
      <div v-if="gifs.length > 0" class="flex justify-center gap-4 mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Página Anterior
        </button>
        <span class="self-center text-lg font-medium">Página {{ currentPage }}</span>
        <button @click="nextPage" class="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Próxima Página
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    import { useQuasar } from 'quasar'
    import { useGiphyStore } from '../stores/giphyStore'
    import { useThemeStore } from '../stores/themeStore'
    import { storeToRefs } from 'pinia'
    import { Vue3Lottie } from 'vue3-lottie'
    
    import loadingAnimation from '../assets/loading.json'
    import notFoundAnimation from '../assets/no-data-found.json'
    
    const $q = useQuasar()
    const themeStore = useThemeStore()
    const { isDark } = storeToRefs(themeStore)
    
    const store = useGiphyStore()
    const { gifs, loading, currentPage } = storeToRefs(store)
    const { searchAllGifs, searchGifsByQuery, nextPage, prevPage, toggleFavorite, isFavorited } = store
    
    const searchQuery = ref('')
    
    const searchGifs = () => {
        store.currentPage = 1
        store.lastSearchQuery = searchQuery.value.trim()
        if (searchQuery.value.trim() === '') {
        searchAllGifs()
        } else {
        searchGifsByQuery(searchQuery.value)
        }
    }
    
    const toggleFavoriteWithToast = (gif) => {
        const alreadyFavorited = isFavorited(gif.id)
        toggleFavorite(gif)
        $q.notify({
        message: alreadyFavorited ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
        color: alreadyFavorited ? 'negative' : 'positive',
        icon: alreadyFavorited ? 'favorite_border' : 'favorite',
        position: 'top-right',
        timeout: 1500
        })
    }
    
    onMounted(() => {
        if (store.lastSearchQuery) {
            store.searchGifsByQuery(store.lastSearchQuery)
        } else {
            store.searchAllGifs()
        }
    })
  </script>
  