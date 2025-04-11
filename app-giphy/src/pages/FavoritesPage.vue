<template>
   <q-page class="q-pa-md">
    <div v-if="favorites.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <GifCard
        v-for="gif in favorites"
        :key="gif.id"
        :gif="gif"
        @toggle-favorite="toggleFavoriteWithToast"
        />
    </div>

    <div v-else class="flex flex-col items-center justify-center h-full text-center">
        <Vue3Lottie
        :animationData="noFavoritesAnimation"
        :height="300"
        :width="300"
        />
        <p class="text-lg text-gray-500 mt-4">Nenhum GIF favorito encontrado</p>
    </div>
    </q-page>

  </template>
  
  <script setup>
  import { useGiphyStore } from '../stores/giphyStore'
  import { storeToRefs } from 'pinia'
  import GifCard from '../components/GifCard.vue'
  import { Vue3Lottie } from 'vue3-lottie'
  import noFavoritesAnimation from '../assets/no-data-found.json'
  
  const giphyStore = useGiphyStore()
  const { favorites } = storeToRefs(giphyStore)
  </script>  