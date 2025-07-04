<template>
  <category-banner category="Dining room"></category-banner>
  <div v-for="product in filtered" :key="product._id">
    <img :src="product.images[0]" alt=""/>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const filterBy = () => {
  store.dispatch("products/fetchProductsByCategory", "dining-room");
};
filterBy();

const filtered = computed(() => store.state.products.filtered);
</script>