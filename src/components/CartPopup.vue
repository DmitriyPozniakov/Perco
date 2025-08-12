<template>
  <div class="overlay" @click="closePopup">
    <div v-if="isMobile" @click.stop class="mobile-view">
      <img class="product-image" :src="product.images[0]" alt="" />
      <div class="about-product">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">${{ product.price * quantity }}</p>
        <div class="quantity-controls">
          <button
            class="change-quantity"
            @click="decrease"
            :disabled="quantity === 1"
          >
            -
          </button>
          <span>{{ quantity }}</span>
          <button class="change-quantity" @click="increase">+</button>
        </div>
      </div>
    </div>
    <div v-else @click.stop class="desktop-view">
      <div class="container">
        <img class="product-image" :src="product.images[0]" alt="" />
        <div class="about-product">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">${{ product.price * quantity }}</p>
          <div class="quantity-controls">
            <button
              class="change-quantity"
              @click="decrease"
              :disabled="quantity === 1"
            >
              -
            </button>
            <span>{{ quantity }}</span>
            <button class="change-quantity" @click="increase">+</button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <base-button @click="checkout">GO TO CHECKOUT</base-button>
        <button class="shopping-btn" @click="closePopup">CONTINUE SHOPPING</button>
      </div>
      <div class="payments">
        <p class="payment-text">Payment with</p>
        <div class="payment-methods">
          <img class="image-pay-method" src="@/assets/images/applePay.svg" alt="">
          <img class="image-pay-method" src="@/assets/images/googlePay.svg" alt="">
          <img class="image-pay-method" src="@/assets/images/visa.svg" alt="">
          <img class="image-pay-method" src="@/assets/images/mastercard.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
});

const emit = defineEmits(["close"]);

const closePopup = () => {
  emit("close");
};

const store = useStore();

const isMobile = ref(window.innerWidth <= 768);

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen);
  document.body.style.overflow = "";
});

const router = useRouter();

const checkout = () => {
  router.push({name: 'shoppingBag'})
}

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
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(2px);
  padding: 0 40px;
}
.mobile-view {
  width: 90%;
  padding: 15px;
  display: flex;
  gap: 15px;
  height: 15rem;
  border: 0.5px solid #302a18;
  border-radius: 30px;
  background: #fff;
  position: absolute;
  top: 30px;
}
.container {
  display: flex;
  gap: 15px;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.desktop-view {
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  width: 41rem;
  gap: 10px;
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.desktop-view .product-image {
  object-fit: contain;
  width: 16rem;
  height: 16rem;
  background: #e7e7e7;
}
.mobile-view .product-image {
  object-fit: contain;
  width: 12rem;
  background: #e7e7e7;
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

.shopping-btn {
  border-radius: 8px;
  background: #fff;
  border-radius: 8px;
  border: 0.675px solid #302a18;
  color: #302a18;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  font-family: 'SFR-medium';
  height: 5rem;
  padding: 13px 34px;
}

.payments {
  display: flex;
  align-items: center;
  gap: 32px;
}

.payment-methods {
  display: flex;
  align-items: center;
  gap: 16px;
}

.payment-text {
  color: #302a18;
  font-size: 1.2rem;
  font-family: 'SFR-regular';
  font-weight: 400;
}

@media (max-width: 768px) {
  .overlay {
    padding: 0;
    justify-content: center;
  }
}
</style>