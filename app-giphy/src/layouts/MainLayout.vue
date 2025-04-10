<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Topbar -->
    <q-header elevated class="bg-white text-black shadow-md">
      <q-toolbar>
        <q-avatar>
          <img src="https://placehold.co/40x40" alt="Logo" />
        </q-avatar>
        <q-toolbar-title class="font-bold">
          Giphy Explorer
        </q-toolbar-title>
        <div class="text-sm text-gray-500">Desenvolvido por Diogo</div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
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
const leftDrawerOpen = ref(true)
</script>
