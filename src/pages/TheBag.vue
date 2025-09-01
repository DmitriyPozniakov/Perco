<template>
  <category-banner :category="'Your bag'" />

  <section>
    <div v-if="isLoading" class="loader-wrapper">
      <base-loader />
    </div>

    <div v-else-if="!cartItems?.length">
      <EmptyCard />
    </div>

    <div v-else class="wrapper">
      <!-- Левая колонка: товары -->
      <div class="cart-products">
        <div class="product" v-for="item in cartItems" :key="item.productId">
          <div class="img-box">
            <img :src="item.image" alt="" />
          </div>
          <div class="product-info-wrapper">
            <div class="product-info-top">
              <p class="name">{{ item.name }}</p>
              <button @click="deleteProduct(item.productId)" class="delete-btn">
                Remove Item
              </button>
            </div>
            <div class="product-info-bottom">
              <p class="price">{{ item.price * item.quantity }}$</p>
              <div class="quantity-controls">
                <button
                  class="change-quantity"
                  @click="decrease(item.productId)"
                  :disabled="item.quantity === 1"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  class="change-quantity"
                  @click="increase(item.productId)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Правая колонка: финальная карточка -->
      <div class="final-card">
        <div class="card-body">
          <div class="card-total">
            <p>Total price</p>
            <p>{{ totalPrice }}$</p>
          </div>
        </div>
        <base-button class="checkout-btn">Place order</base-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import EmptyCard from "@/components/EmptyCard.vue";

const store = useStore();

const cartItems = computed(() => store.state.cart.cartItems);
const isLoading = computed(() => store.getters["cart/isLoading"]);

const deleteProduct = async (productId) => {
  try {
    await store.dispatch("cart/deleteCartItem", productId);
  } catch (err) {
    console.error("Ошибка при удалении товара:", err);
  }
};

const increase = async (productId) => {
  try {
    await store.dispatch("cart/changeCartItemQuantity", {
      productId,
      change: 1,
    });
  } catch (err) {
    console.error("Ошибка при увеличении количества:", err);
  }
};

const decrease = async (productId) => {
  try {
    await store.dispatch("cart/changeCartItemQuantity", {
      productId,
      change: -1,
    });
  } catch (err) {
    console.error("Ошибка при уменьшении количества:", err);
  }
};

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<style scoped>
section {
  padding: 20px;
  background: #f6f6f6;
}

.wrapper {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.cart-products {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.final-card {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 20px;
  width: 100%;
}

.checkout-btn {
  width: 100%;
}

.card-total {
  display: flex;
  justify-content: space-between;
  font-family: "SFR-bold";
  font-size: 1.6rem;
  margin-bottom: 20px;
}

.product {
  background: #fff;
  padding: 16px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
}

.img-box {
  background: #f6f6f6;
  height: 16rem;
  width: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16rem;
}

.product-info-top,
.product-info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name,
.price {
  color: #302a18;
  font-family: "SFR-bold";
  font-size: clamp(1.6rem, 2vw + 1rem, 2.2rem);
  font-weight: 500;
  text-transform: uppercase;
}

.delete-btn {
  align-self: flex-start;
  padding: 6px;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: "SFR-regular";
  background: transparent;
  border: none;
}

.delete-btn:hover {
  text-decoration: underline #e74c3c;
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

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
  .img-box {
    width: 11rem;
  }
}

@media (max-width: 530px) {
  .product {
    flex-direction: column; /* колонки станут сверху вниз */
    align-items: flex-start;
  }

  .img-box {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  .img-box img {
    width: 100%;
    height: auto;
    max-height: 20rem;
    object-fit: cover;
  }

  .product-info-wrapper {
    width: 100%;
    height: auto;
  }

  .product-info-top,
  .product-info-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .product-info-top {
    margin-bottom: 30px;
  }
}
</style>
