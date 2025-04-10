<template>
    <div class="p-4">
      <div class="flex justify-center mb-6">
        <input
          v-model="searchQuery"
          @keyup.enter="searchGifs"
          type="text"
          placeholder="Digite sua busca e aperte Enter"
          class="w-full max-w-md px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
  
      <div v-if="loading" class="text-center text-lg font-medium text-gray-600">
        Carregando GIFs...
      </div>
  
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
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
  
  const store = useGiphyStore()
  const searchQuery = ref('')
  const { gifs, loading, searchAllGifs, searchGifsByQuery } = store
  
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
  