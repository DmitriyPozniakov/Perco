<template>
  <div v-if="isLoading" class="loader-wrapper">
    <base-loader />
  </div>

  <section v-else-if="product">
    <div class="breadcrumbs-container">
      <span>
        <router-link to="/">Homepage</router-link> /
        <router-link :to="`/category/${product.category.replace(/\s+/g, '-')}`">
          {{ product.category }}
        </router-link>
        /
        <span class="breadcrumb-name">{{ product.name }}</span>
      </span>
      <base-button>ADD TO CART</base-button>
    </div>
    <div class="images-wrapper">
      <div class="image-box" v-for="(img, index) in filledImages" :key="index">
        <img :src="img" alt="Product image" />
      </div>
    </div>
    <div class="info-container">
      <div class="left-side-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-about">{{ product.about }}</p>
      </div>
      <div class="right-side-info">
        <h1 class="product-name info-title">Information</h1>
        <base-accordion></base-accordion>
      </div>
    </div>
    <may-like :type="type"></may-like>
  </section>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import placeholder from "@/assets/images/placeholder.svg";
import MayLike from "@/components/MayLike.vue";

const route = useRoute();
const store = useStore();
const id = route.params.id;

onMounted(() => {
  store.dispatch("products/fetchProductById", id);
});

const filledImages = computed(() => {
  if (!product.value || !product.value.images) return [];
  const actualImages = product.value.images;
  const placeholderCount = Math.max(0, 5 - actualImages.length);
  const placeholders = new Array(placeholderCount).fill(placeholder);

  return [...actualImages, ...placeholders];
});

watch(
  () => route.params.id,
  (newId) => {
    store.dispatch("products/fetchProductById", newId);
  }
);

const product = computed(() => store.getters["products/productById"]);
const isLoading = computed(() => store.getters["products/isLoading"]);
const type = computed(() => product.value.type || null);

</script>


<style scoped>
section {
  padding: 125px 40px 40px 40px;
}

.breadcrumbs-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.images-wrapper {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
}

a,
span {
  color: rgba(0, 0, 0, 0.3);
  font-family: "SFR-regular";
  font-size: 1.8rem;
  font-weight: 300;
}

.breadcrumb-name {
  color: #302a18;
  font-weight: 400;
  text-transform: uppercase;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
  max-width: 40rem;
  background: #e7e7e7;
}

.info-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rem;
}

.product-name,
.product-price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.info-title {
  display: inline-block;
  align-self: flex-start;
}

.right-side-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.product-about {
  max-width: 55rem;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 2rem;
  font-weight: 300;
  text-align: justify;
}
</style>