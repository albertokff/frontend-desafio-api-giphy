<template>
    <div ref="lottieContainer" class="w-64 h-64 mx-auto"></div>
</template>

<script setup>
import lottie from 'lottie-web'
import { onMounted, ref } from 'vue'

const lottieContainer = ref(null)

onMounted(() => {
lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/4c2a7b30-f924-4a4e-9a63-7d87ed94eb46/SGBTofhKIe.json'
})
})
</script>
  