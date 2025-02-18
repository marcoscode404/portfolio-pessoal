<script setup lang="ts">
import brImage2 from '../../static/images/banner02.png'; 
import brImage3 from '../../static/images/banner03.png'; 
import brImage4 from '../../static/images/banner04.webp'; 

const items = [
  brImage2,
  brImage3,
  brImage4,
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full', arrows: {
    wrapper: 'flex items-center justify-between !bg-red-500'
  }, }"
    class="overflow-hidden h-44 lg:h-52"
    :arrows="false"
  >
    <img :src="item" class="w-full object-cover	object-center" draggable="false">
  </UCarousel>
</template>

