<template>
  <q-layout view="lHh Lpr lFf" :class="isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'">
    <q-header elevated class="shadow-md q-px-md q-py-sm flex items-center justify-between"
               :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'">
      <div class="flex items-center">
        <q-avatar class="q-mr-sm">
          <img src="https://placehold.co/40x40" alt="Logo" />
        </q-avatar>
        <div class="text-h6 font-bold">Giphy Explorer</div>
      </div>
      <div class="flex items-center gap-3">
        <div class="text-subtitle2 font-medium">Diogo Alberto</div>
        <q-btn
          dense
          flat
          round
          icon="dark_mode"
          @click="toggleTheme"
          :class="isDark ? 'text-yellow-400' : 'text-gray-700'"
        />
        <q-btn flat dense round icon="menu" class="q-ml-sm q-hidden-md-up" @click="leftDrawerOpen = !leftDrawerOpen" />
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered :overlay="!$q.screen.gt.sm"
              :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'">
      <q-list padding>
        <q-item to="/" clickable v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/favorites" clickable v-ripple>
          <q-item-section>Favoritos</q-item-section>
        </q-item>
        <q-item to="/categories" clickable v-ripple>
          <q-item-section>Categorias</q-item-section>
        </q-item>
        <q-item to="/about" clickable v-ripple>
          <q-item-section>Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-sm">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { ref } from 'vue'
  import { useThemeStore } from '../stores/themeStore'
  import { storeToRefs } from 'pinia'

  const leftDrawerOpen = ref(false)

  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)
  const { toggleTheme } = themeStore
</script>

<style scoped>
  @media (max-width: 600px) {
    .q-drawer {
      width: 200px;
    }
  }
</style>
