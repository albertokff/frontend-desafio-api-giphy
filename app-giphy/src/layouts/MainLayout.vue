<template>
  <q-layout view="lHh Lpr lFf" :class="isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'">
    <!-- Topbar -->
    <q-header elevated class="shadow-md" :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'">
      <q-toolbar>
        <q-avatar>
          <img src="https://placehold.co/40x40" alt="Logo" />
        </q-avatar>
        <q-toolbar-title class="font-bold">
          Giphy Explorer
        </q-toolbar-title>

        <!-- Botão de tema -->
        <q-btn
          dense
          flat
          round
          icon="dark_mode"
          @click="toggleTheme"
          :class="isDark ? 'text-yellow-400' : 'text-gray-700'"
          :label="isDark ? 'Light' : 'Dark'"
          class="q-ml-md"
        />
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :class="isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'">
      <q-list>
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

    <!-- Conteúdo principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../stores/themeStore'
import { storeToRefs } from 'pinia'

const leftDrawerOpen = ref(true)

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const { toggleTheme } = themeStore
</script>

