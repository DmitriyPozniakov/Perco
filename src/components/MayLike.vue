<template>
  <h2>You may like</h2>

  <div class="cards-container">
    <base-card
      :product="product"
      v-for="product in recommended"
      :key="product._id"
    ></base-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, defineProps, computed } from "vue";

const props = defineProps({
  type: String,
});

const store = useStore();

const loadProducts = () => {
  store.dispatch("products/fetchProductsByType", props.type);
};

const recommendedAll = computed(() => store.getters["products/typeProducts"]);
const recommended = computed(() => recommendedAll.value.slice(0, 5));

onMounted(loadProducts);
</script>

<style scoped>
h2 {
  font-family: "Maroon Black";
  font-size: clamp(5.5rem, 10vw, 12rem);
  font-weight: 400;
  color: #302a18;
  margin-bottom: 30px;
}
.cards-container {
  padding: 0;
}

@media (max-width: 720px) {
  .cards-container {
    justify-content: center;
  }
}

</style>