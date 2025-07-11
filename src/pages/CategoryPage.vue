<template>
  <category-banner :category="category" />

  <div v-if="isLoading" class="loader-wrapper">
    <base-loader />
  </div>

  <div v-else>
    <div class="filter-container">
      <p>{{ filtered.length }} products</p>
      <div>
        <label class="label" for="sort">Order by:</label>
        <select id="sort" v-model="sortOrder">
          <option value="lowest">Lowest price</option>
          <option value="highest">Biggest price</option>
        </select>
      </div>
    </div>
    <div class="cards-container">
      <base-card
        v-for="product in filtered"
        :product="product"
        :key="product._id"
      />
    </div>
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

const sortOrder = computed({
  get: () => store.getters["products/sortOrder"],
  set: (val) => store.dispatch("products/setSortOrder", val),
});

const filtered = computed(() => store.getters["products/filteredProducts"]);
const isLoading = computed(() => store.getters["products/isLoading"]);
</script>

<style scoped>
</style>

