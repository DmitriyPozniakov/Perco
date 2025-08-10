<template>
  <div v-if="isLoading" class="loader-wrapper">
    <base-loader />
  </div>

  <section v-else-if="product">
    <div class="breadcrumbs-container">
      <span v-if="!isMobile">
        <router-link to="/">Homepage</router-link> /
        <router-link :to="`/category/${product.category.replace(/\s+/g, '-')}`">
          {{ product.category }}
        </router-link>
        /
        <span class="breadcrumb-name">{{ product.name }}</span>
      </span>
      <span v-else>
        <router-link
          class="breadcrumb-name mobile-bread"
          :to="`/category/${product.category.replace(/\s+/g, '-')}`"
        >
          <img class="arrow" src="@/assets/images/arrow-left.svg" alt="" />
          {{ product.category }}
        </router-link>
      </span>
      <base-button class="sticky-bottom-button" @click="addToCart"
        >ADD TO CART</base-button
      >
    </div>

    <div class="images-wrapper">
      <!-- Десктоп: показываем все изображения -->
      <template v-if="!isMobile">
        <div
          class="image-box"
          v-for="(img, index) in filledImages"
          :key="index"
        >
          <img :src="img" alt="Product image" />
        </div>
      </template>

      <!-- Мобильный: показываем слайдер из одного изображения с кнопками -->
      <template v-else>
        <div class="image-box">
          <img :src="filledImages[currentIndex]" alt="Product image" />
        </div>
        <button
          class="slider-btn prev"
          @click="prevImage"
          :disabled="currentIndex === 0"
          aria-label="Previous Image"
        >
          ‹
        </button>
        <button
          class="slider-btn next"
          @click="nextImage"
          :disabled="currentIndex === filledImages.length - 1"
          aria-label="Next Image"
        >
          ›
        </button>
      </template>
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
    <cart-popup v-if="showCartPopup" :product="product" />
  </section>
</template>

<script setup>
import { onMounted, computed, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import placeholder from "@/assets/images/placeholder.svg";
import MayLike from "@/components/MayLike.vue";
import CartPopup from "@/components/CartPopup.vue";

const route = useRoute();
const store = useStore();
const id = route.params.id;

onMounted(() => {
  store.dispatch("products/fetchProductById", id);
});

watch(
  () => route.params.id,
  (newId) => {
    store.dispatch("products/fetchProductById", newId);
    currentIndex.value = 0; // сброс при смене продукта
  }
);

const showCartPopup = ref(false);

const product = computed(() => store.getters["products/productById"]);
console.log(product);
const isLoading = computed(() => store.getters["products/isLoading"]);
const type = computed(() => product.value?.type || null);

const filledImages = computed(() => {
  if (!product.value || !product.value.images) return [];
  const actualImages = product.value.images;
  const placeholderCount = Math.max(0, 5 - actualImages.length);
  const placeholders = new Array(placeholderCount).fill(placeholder);
  return [...actualImages, ...placeholders];
});

const currentIndex = ref(0);

function prevImage() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function nextImage() {
  if (currentIndex.value < filledImages.value.length - 1) currentIndex.value++;
}

const isMobile = ref(window.innerWidth <= 720);

const updateWidth = () => {
  isMobile.value = window.innerWidth <= 720;
};
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

const addToCart = async () => {
  if (!product.value) return;

  const currentCart = store.state.cart.cartItems;
  const existingItem = currentCart.find(
    (item) => item.productId === product.value.id
  );

  const image =
    Array.isArray(product.value.images) && product.value.images.length > 0
      ? product.value.images[0]
      : "";

  const updatedItem = existingItem
    ? {
        ...existingItem,
        quantity: existingItem.quantity + 1,
        totalPrice: (existingItem.quantity + 1) * product.value.price,
      }
    : {
        productId: product.value.id,
        name: product.value.name,
        price: product.value.price,
        quantity: 1,
        totalPrice: product.value.price,
        image,
      };

  const updatedCart = existingItem
    ? currentCart.map((item) =>
        item.productId === product.value.id ? updatedItem : item
      )
    : [...currentCart, updatedItem];

  // Обновляем Vuex и синхронизируем с бэком
  store.dispatch("cart/setCartItems", updatedCart);

  // Показать попап
  showCartPopup.value = true;

  try {
    await store.dispatch("cart/updateCart");
    console.log("Товар добавлен в корзину", updatedCart);
  } catch (error) {
    console.error("Ошибка при добавлении в корзину:", error.message);
  }
};
</script>

<style scoped>
section {
  padding: 125px 40px 40px 40px;
  position: relative;
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
  position: relative;
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

.arrow {
  max-width: none;
  background: none;
  height: 20px;
  width: 20px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20rem;
}

.product-name,
.product-price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.info-title {
  display: inline-block;
  align-self: flex-start;
}

.left-side-info {
  margin-bottom: 30px;
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

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(48, 42, 24, 0.7);
  /* background: #fff; */
  border: none;
  color: #fff;
  /* color: #000; */
  font-size: 3rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.slider-btn:hover:not(:disabled) {
  background: rgba(48, 42, 24, 1);
}

.prev {
  left: 0;
}

.next {
  right: 0;
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

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20rem;
}

.product-name,
.product-price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.info-title {
  display: inline-block;
  align-self: flex-start;
}

.left-side-info {
  margin-bottom: 30px;
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

@media (max-width: 720px) {
  .sticky-bottom-button {
    position: fixed;
    bottom: 5%;
    left: 50%;
    width: 100%;
    z-index: 1000;
    max-width: 90%;
    transform: translateX(-50%);
    padding: 16px;
    border-radius: 43px;
    box-shadow: -4px 4px 21.8px 0px rgba(0, 0, 0, 0.05);
  }
  .info-container {
    margin-bottom: 10rem;
  }
  section {
    padding: 60px 20px 20px 20px;
  }
  img {
    max-width: none;
    height: 40rem;
  }
  .images-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
