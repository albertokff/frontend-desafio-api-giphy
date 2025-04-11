<template>
    <q-card :class="[isDark ? 'gif-card-dark' : 'gif-card-light']">
      <q-img :src="gif.images.fixed_height.url" :alt="gif.title" class="gif-img" />
  
      <q-card-actions align="right">
        <q-btn
          dense
          round
          flat
          :icon="isFavorited(gif.id) ? 'favorite' : 'favorite_border'"
          color="pink"
          @click="toggleFavoriteWithToast(gif)"
        />
      </q-card-actions>
    </q-card>
  </template>
  
  <script setup>
  import { useGiphyStore } from '../stores/giphyStore'
  import { storeToRefs } from 'pinia'
  import { useQuasar } from 'quasar'
  
  const { gif } = defineProps({
    gif: Object
  })

  const $q = useQuasar()
  
  const store = useGiphyStore()
  const { isDark } = storeToRefs(store)
  const { toggleFavorite, isFavorited } = store
  
  function toggleFavoriteWithToast(gif) {
    toggleFavorite(gif)
    $q.notify({
      message: isFavorited(gif.id) ? 'Adicionado aos favoritos!' : 'Removido dos favoritos!',
      color: isFavorited(gif.id) ? 'positive' : 'negative',
      position: 'top',
      timeout: 2000
    })
  }
  </script>
  
  <style scoped>
  .gif-card-dark {
    background-color: #1e293b;
    color: white;
    margin: 10px;
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .gif-card-light {
    background-color: #ffffff;
    color: black;
    margin: 10px;
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .gif-img {
    height: 200px;
    object-fit: cover;
  }
  </style>
  