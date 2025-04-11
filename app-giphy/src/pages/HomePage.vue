<template>
    <div class="min-h-screen bg-gray-100 px-4 pt-12 pb-16">
      <div class="flex justify-center items-center gap-2 mb-12">
        <input
          v-model="searchQuery"
          @keyup.enter="searchGifs"
          type="text"
          placeholder="Buscar GIFs..."
          class="w-[320px] px-5 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
        />
        <button
          @click="searchGifs"
          class="px-4 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
        >
          Buscar
        </button>
      </div>
  
      <LottieLoader v-if="loading" class="mb-8" />
  
      <div v-else-if="!loading && gifs.length === 0" class="text-center">
        <NoResults />
        <p class="text-gray-600 text-lg font-medium mt-4">Nenhum GIF encontrado.</p>
      </div>
  
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        <div
          v-for="gif in gifs"
          :key="gif.id"
          class="bg-white rounded-lg overflow-hidden shadow"
        >
          <img
            :src="gif.images.fixed_height.url"
            :alt="gif.title"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useGiphyStore } from '../stores/giphyStore'
  import LottieLoader from '../components/LottieLoader.vue'
  import NoResults from '../components/NoResults.vue'
  import { storeToRefs } from 'pinia'
  
  const store = useGiphyStore()
  const searchQuery = ref('')

const { gifs, loading } = storeToRefs(store)
const { searchAllGifs, searchGifsByQuery } = store

  const searchGifs = () => {
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
  