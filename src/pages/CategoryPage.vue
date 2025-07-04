<template>
  <category-banner :category="category" />

  <div v-if="isLoading" class="loader-wrapper">
    <base-loader />
  </div>

  <div v-else class="cards-container">
    <base-card
      :product="product"
      v-for="product in filtered"
      :key="product._id"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

// берём категорию из URL
const category = computed(() => route.params.category);

const loadProducts = () => {
  if (category.value) {
    store.dispatch("products/fetchProductsByCategory", category.value);
  }
};

onMounted(loadProducts);
watch(category, loadProducts);

const filtered = computed(() => store.getters["products/filteredProducts"]);
const isLoading = computed(() => store.getters["products/isLoading"]);
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.cards-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  padding: 30px;
}
</style>

