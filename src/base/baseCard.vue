<template>
  <router-link :to="`/products/${product._id}`" class="card">
    <div class="card-img-container">
      <img :src="product.images[0]" :alt="product.about" />
    </div>
    <div class="card-info">
      <h2 class="heading">{{ product.name }} {{ product.type }}</h2>
      <p class="collection">2025 collection</p>
      <div class="price-container">
        <p class="price">${{ product.price }}</p>
        <p class="old-price" v-if="product.oldPrice">${{ product.oldPrice }}</p>
        <button class="add-to-cart">Add to cart</button>
      </div>
    </div>
    <base-discount v-if="product.discount">{{ product.discount }}%</base-discount>
  </router-link>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  product: Object,
});
</script>

<style scoped>
.card {
  width: 32rem;
  height: 57rem;
  position: relative;
}

.card .card-img-container {
  background: #e7e7e7;
  padding: 60px 30px;
  height: 35rem;
}

.card .card-info {
  padding: 24px 8px;
}

.card .card-img-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
}

.collection {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.heading,
.price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 1.8rem;
  font-weight: 600;
}

.heading {
  margin-bottom: 14px;
  text-transform: uppercase;
}

.price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.old-price {
    color: #ea4335;
    font-family: "SFR-regular";
    font-size: 1.8rem;
    text-decoration-line: line-through;
    opacity: 0.7;
}

.add-to-cart {
    background: transparent;
    color: #302a18;
    font-size: 1.4rem;
    font-family: "SFR-bold";
    font-weight: 700;
    text-decoration-line: underline;
    text-transform: uppercase;
}
</style>

