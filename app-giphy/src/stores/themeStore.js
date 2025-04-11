import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { Dark } from 'quasar'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(Dark.isActive)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    Dark.set(isDark.value)
  }

  watch(isDark, (val) => {
    Dark.set(val)
  })

  return {
    isDark,
    toggleTheme
  }
})
