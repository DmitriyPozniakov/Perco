<template>
  <div class="banner">
    <base-input class="mobile-input"></base-input>
    <div class="container">
      <router-link v-if="isMobile" class="mobile-bread" to="/">
        <img class="arrow" src="@/assets/images/arrow-white.svg" alt="">
        Homepage
      </router-link>
      <p class="banner-heading">{{ category }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted} from "vue";

defineProps({
  category: String,
});

const isMobile = ref(window.innerWidth <= 720);

const updateWidth = () => {
  isMobile.value = window.innerWidth <= 720;
};
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
</script>

<style scoped>
.banner {
  width: 100%;
  height: auto;
  min-height: 30rem;
  background-image: url("@/assets/images/banner.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  padding: 15px 20px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}

.banner-heading {
  color: #fff;
  font-size: clamp(4.5rem, 8vw, 12.2rem);
  font-family: "Maroon Black";
}

a {
  color: #fff;
  font-size: 1.6rem;
  font-family: 'SFR-regular';
  font-weight: 300;
  margin-bottom: 15px;;
}


@media (max-width: 768px) {
  .banner {
    min-height: 20rem;
  }
}

@media (min-width: 768px) {
  .mobile-input {
    display: none;
  }
  .banner {
    justify-content: flex-end;
  }
}
</style>