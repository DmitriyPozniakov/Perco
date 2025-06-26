<template>
  <div class="banner">
    <p class="banner-heading">{{ category }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  category: String,
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
  padding: 30px;

  display: flex;
  align-items: flex-end;
}

.banner-heading {
  color: #fff;
  font-size: clamp(4.5rem, 8vw, 12.2rem);
  font-family: 'Maroon Black';
}

@media (max-width: 768px) {
  .banner {
    min-height: 20rem;
  }
}
</style>