<template>
  <category-banner category="Account" />

  <div class="layout">
    <aside>
      <nav>
        <p class="email">{{ userEmail }}</p>
        <router-link to="/account/orders">your orders</router-link>
        <router-link to="/account/address">your address</router-link>
        <router-link to="/account/returns">return the item</router-link>
        <router-link to="/account/help">help and contacts</router-link>
      </nav>
      <button @click="signOut" class="logout-btn">
        <img src="@/assets/images/logout.svg" alt="" />
        <span>Log out</span>
      </button>
    </aside>

    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const userEmail = ref("");

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.value = user.email;
    } else {
      userEmail.value = "";
    }
  });
});

const store = useStore();
const router = useRouter();

const signOut = async () => {
  await store.dispatch("auth/signOut");
  router.push("/login");
};
</script>

<style scoped>
a {
  text-transform: uppercase;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  opacity: 0.5;
  transition: opacity 0.3s ease, font-weight 0.3s ease;
}

a:hover,
a:active {
  opacity: 1;
  font-weight: 700;
}

.layout {
  display: flex;
}

aside {
  display: flex;
  padding: 16px 34px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 51px;
  background: #fff;
  height: 100vh;
  max-height: 100rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
}

.email {
  margin-bottom: 60px;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 500;
  color: #302a18;
  text-transform: uppercase;
}

.router-link-active {
  opacity: 1;
  font-weight: 700;
}

.content {
  flex: 1;
  background: #f6f6f6;
  padding-bottom: 20px;
}

.logout-btn {
  background: none;
  display: flex;
  gap: 18px;
  align-items: center;

  font-family: "SFR-regular";
  font-size: 1.6rem;
  color: #302a18;
  font-weight: 500;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  aside {
    width: 100%;
    height: auto;
    max-height: none;
    padding: 12px 20px;
    gap: 20px;
  }

  nav {
    gap: 12px;
    padding-top: 12px;
  }

  .email {
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  .content {
    padding: 15px 20px;
  }
}
</style>
