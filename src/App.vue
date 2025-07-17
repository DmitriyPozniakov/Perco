<template>
  <div class="layout">
    <TheNavigation />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";

import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";

const store = useStore();

onMounted(() => {
  store.dispatch('auth/listenAuthStateChange');
})
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}


@media (min-width: 1980px) {
  .layout {
    max-width: 1980px; /* можно менять под твой дизайн */
    margin: 0 auto;
  }
}

</style>


