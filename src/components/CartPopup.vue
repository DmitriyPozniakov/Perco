<template>
  <div class="mobile-view">
    <img :src="product.images[0]" alt="" />
    <div class="about-product">
      <p class="product-name">{{ product.name }}</p>
      <p class="product-price">${{ product.price * quantity }}</p>
      <div class="quantity-controls">
        <button class="change-quantity" @click="decrease" :disabled="quantity === 1">-</button>
        <span>{{ quantity }}</span>
        <button class="change-quantity" @click="increase">+</button>
      </div>
    </div>
  </div>
  <div class="desktop-view">
    <!-- опционально -->
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  product: Object,
});

const store = useStore();

// Получаем текущий товар из корзины
const quantity = computed(() => {
  const item = store.state.cart.cartItems.find(
    (i) => i.productId === props.product.id
  );
  return item ? item.quantity : 0;
});

// Увеличить количество
const increase = async () => {
  try {
    await store.dispatch("cart/changeCartItemQuantity", {
      productId: props.product.id,
      change: 1,
    });
  } catch (err) {
    console.error("Ошибка при увеличении количества:", err);
  }
};

// Уменьшить количество
const decrease = async () => {
  try {
    await store.dispatch("cart/changeCartItemQuantity", {
      productId: props.product.id,
      change: -1,
    });
  } catch (err) {
    console.error("Ошибка при уменьшении количества:", err);
  }
};
</script>

<style scoped>
.mobile-view {
  width: 100%;
  padding: 15px;
  display: flex;
  gap: 15px;
  height: 15rem;
  border: 0.5px solid #302a18;
  border-radius: 30px;
  background: #fff;
}
img {
  object-fit: contain;
  width: 12rem;
  background: #e7e7e7;
  border-radius: 20px;
}
.about-product {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.product-name {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
}
.product-price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: 1.6rem;
  font-weight: 500;
}
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}
.quantity-controls span {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.3rem;
  font-weight: 300;
}
.change-quantity {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  font-family: "SFR-regular";
}
</style>