<template>
  <nav>
    <!-- MOBILE -->
    <div class="left-side-mobile mobile-div">
      <img src="@/assets/images/menu.svg" alt="menu" @click="toggleMenu" />
      <router-link to="/" class="logo">perco</router-link>
    </div>
    <div class="right-side-mobile mobile-div">
      <router-link to="/login">
        <img src="@/assets/images/user.svg" alt="" />
      </router-link>
      <router-link :to="`/bag/${userId}`">
        <img src="@/assets/images/bag.svg" alt="" />
      </router-link>
    </div>

    <!-- MOBILE SLIDE MENU -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-menu-header">
          <span class="close-btn" @click="toggleMenu">✕</span>
        </div>
        <router-link to="/category/bedroom" @click="toggleMenu"
          >Bedroom</router-link
        >
        <router-link to="/category/living-room" @click="toggleMenu"
          >Living Room</router-link
        >
        <router-link to="/category/kitchen" @click="toggleMenu"
          >Kitchen</router-link
        >
        <router-link to="/category/dining-room" @click="toggleMenu"
          >Dining Room</router-link
        >
        <router-link to="/category/garden" @click="toggleMenu"
          >Garden</router-link
        >
        <router-link to="/category/bathroom" @click="toggleMenu"
          >Bathroom</router-link
        >
        <router-link to="/login" @click="toggleMenu">Account</router-link>
      </div>
    </transition>

    <!-- DESKTOP -->
    <div class="desktop-div">
      <div class="desktop-column-1">
        <router-link to="/" class="logo">perco</router-link>
      </div>
      <div class="column-wrapper">
        <div class="desktop-column-2">
          <router-link to="/category/bedroom">Bedroom</router-link>
          <router-link to="/category/living-room">Living room</router-link>
          <router-link to="/category/kitchen">Kitchen</router-link>
        </div>
        <div class="desktop-column-3">
          <router-link to="/category/dining-room">Dining room</router-link>
          <router-link to="/category/garden">Garden</router-link>
          <router-link to="/category/bathroom">Bathroom</router-link>
        </div>
      </div>
      <div class="user-info">
        <div class="bag-wraper">
          <img src="@/assets/images/user.svg" alt="account" />
          <router-link to="/login" class="account">Account</router-link>
        </div>
        <router-link class="bag-wraper" :to="`/bag/${userId}`">
            <img src="@/assets/images/bag.svg" alt="bag" />
            <a href="#">Bag</a>
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const isMenuOpen = ref(false);
const store = useStore();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Получаем UID пользователя
const userId = computed(() => store.state.auth.user?.uid || null);
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
}

.desktop-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-family: "Maroon Black";
  font-size: 3.6rem;
  color: #302a18;
}

.mobile-div {
  display: none;
  align-items: center;
  gap: 15px;
}

a {
  color: #302a18;
  font-size: 1.6rem;
  font-family: "SFR-regular";
  text-transform: uppercase;
}

.desktop-column-2,
.desktop-column-3 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column-wrapper {
  display: flex;
  gap: 60px;
}

.account {
  margin-right: 52px;
}

.user-info,
.bag-wraper {
  display: flex;
  align-items: center;
}

.bag-wraper {
  gap: 10px;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background: #fff;
  padding: 30px 20px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.close-btn {
  font-size: 2rem;
  cursor: pointer;
  color: #302a18;
}

/* Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 768px) {
  .desktop-div {
    display: none;
  }
  .mobile-div {
    display: flex;
  }
}
</style>