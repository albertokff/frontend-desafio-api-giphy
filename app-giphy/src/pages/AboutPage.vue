<template>
    <div
      class="min-h-screen px-6 py-10 transition-colors duration-300"
      :class="isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'"
    >
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-green-500 mb-10 text-center">Sobre o Giphy Explorer</h1>
  
        <div class="grid gap-10">
          <div class="flex items-start gap-4">
            <q-icon name="search" size="32px" color="primary" />
            <div>
              <h2 class="text-xl font-semibold text-green-400">Exploração de GIFs</h2>
              <p class="text-lg">
                Acesse os melhores GIFs do momento com a API do GIPHY, navegue por categorias e encontre o que procura com facilidade.
              </p>
            </div>
          </div>
  
          <div class="flex items-start gap-4">
            <q-icon name="favorite" size="32px" color="red" />
            <div>
              <h2 class="text-xl font-semibold text-green-400">Sistema de Favoritos</h2>
              <p class="text-lg">
                Adicione seus GIFs preferidos aos favoritos e acesse-os facilmente, mesmo depois de fechar o app.
              </p>
            </div>
          </div>
  
          <div class="flex items-start gap-4">
            <q-icon name="light_mode" size="32px" color="yellow-400" />
            <div>
              <h2 class="text-xl font-semibold text-green-400">Tema Claro e Escuro</h2>
              <p class="text-lg">
                Alterne entre tema claro e escuro com um único clique, adaptando o visual ao seu gosto.
              </p>
            </div>
          </div>
  
          <div class="flex items-start gap-4">
            <q-icon name="code" size="32px" color="blue-400" />
            <div>
              <h2 class="text-xl font-semibold text-green-400">Tecnologias Utilizadas</h2>
              <p class="text-lg">
                Vue 3, Quasar, Tailwind CSS, Pinia, Axios, Lottie e LocalStorage.
              </p>
            </div>
          </div>
        </div>
  
        <div class="text-center text-sm text-gray-400 mt-16">
          Projeto desenvolvido por Diogo 💻 — {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { storeToRefs } from 'pinia'
    import { useThemeStore } from '../stores/themeStore'
    
    const { isDark } = storeToRefs(useThemeStore())
  </script>
  