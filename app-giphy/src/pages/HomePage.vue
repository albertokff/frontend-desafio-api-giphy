<template>
    <div class="min-h-screen bg-gray-100 px-4 pt-12 pb-16">
      <div class="flex justify-center mb-12 gap-2">
        <input
          v-model="searchQuery"
          @keyup.enter="searchGifs"
          type="text"
          placeholder="Buscar GIFs..."
          class="w-[320px] px-5 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
        />
        <button
          @click="searchGifs"
          class="px-4 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition-all duration-200"
        >
          Buscar
        </button>
      </div>
  
      <div v-if="loading" class="text-center text-lg font-medium text-gray-600 mb-8">
        Carregando GIFs...
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
  import { storeToRefs } from 'pinia'
  
  const store = useGiphyStore()
  const { gifs, loading } = storeToRefs(store)
  const { searchAllGifs, searchGifsByQuery } = store
  const searchQuery = ref('')
  
  function searchGifs() {
    const query = searchQuery.value.trim()
    if (query === '') {
      searchAllGifs()
    } else {
      searchGifsByQuery(query)
    }
  }
  
  onMounted(() => {
    searchAllGifs()
  })
  </script>  
  