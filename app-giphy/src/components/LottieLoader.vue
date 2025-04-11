<template>
    <div ref="lottieContainer" class="w-24 h-24 mx-auto"></div>
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
    path: 'https://lottie.host/38fd9cf3-2463-4d69-9e29-01dc56fa0f18/U4TzLbhUab.json'
})
})
</script>
  