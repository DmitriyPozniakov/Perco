<template>
  <section v-if="product">
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
    <img :src="product.images[0]" alt="" />
    <h1 class="product-name">{{ product.name }}</h1>
    <p class="product-price">${{ product.price }}</p>
    <p class="product-about">{{ product.about }}</p>
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const id = route.params.id;

onMounted(() => {
  store.dispatch("products/fetchProductById", id);
});

const product = computed(() => store.getters["products/productById"]);
// const isLoading = computed(() => store.getters["products/isLoading"]);
</script>


<style scoped>
section {
  padding: 125px 40px 40px 40px;
}

.breadcrumbs-container {
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  max-width: 40rem !important;
  height: auto;
  object-fit: contain;
  display: block;
  max-width: 100%;
  max-height: 60rem;
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

.product-about {
  max-width: 55rem;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 2rem;
  font-weight: 300;
  text-align: justify;
}

@media (min-width: 1024px) {
  img {
    width: 32rem;
    height: 50rem;
  }
}
</style>