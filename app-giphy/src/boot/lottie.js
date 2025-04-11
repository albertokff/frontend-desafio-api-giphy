import { Vue3Lottie } from 'vue3-lottie'
import { defineBoot } from 'quasar/wrappers'

export default defineBoot(({ app }) => {
  app.component('Vue3Lottie', Vue3Lottie)
})
