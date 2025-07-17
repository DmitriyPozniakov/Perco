<template>
  <section class="login-section">
    <p class="logo">perco</p>
    <form @submit.prevent="handleLogin">
      <div class="form-header">
        <p class="form-logo">Login</p>
        <p class="form-text">
          Sign in to view your personal information and check up on your recent
          orders
        </p>
      </div>
      <div class="form-inputs">
        <input
          v-model="email"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <a href="#" class="forgot">Forgot password?</a>
      </div>
      <div class="form-buttons">
        <button class="login-button" :disabled="loading" type="submit">
          {{ loading ? "Logging in..." : "Log in" }}
        </button>
        <button
          class="guest-button"
          type="button"
          :disabled="loading"
          @click="handleGuest"
        >
          Continue as a guest
        </button>
        <a href="#" class="without-acc" @click.prevent="handleSignUp">
          Don’t have an account? Sign up
        </a>
      </div>
      <p v-if="error" style="color: red; margin-top: 10px">{{ error }}</p>
    </form>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const email = ref('');
const password = ref('');

const loading = computed(() => store.getters['auth/isLoading']);
const error = computed(() => store.getters['auth/authError']);

async function handleLogin() {
  await store.dispatch('auth/signIn', { email: email.value, password: password.value });
  if (!store.getters['auth/authError']) {
    alert('Logged in successfully!');
  }
}

async function handleGuest() {
  await store.dispatch('auth/signInAnon');
  if (!store.getters['auth/authError']) {
    alert('Logged in as guest!');
  }
}

async function handleSignUp() {
  if (!email.value || !password.value) {
    alert('Enter email and password for sign up');
    return;
  }
  await store.dispatch('auth/signUp', { email: email.value, password: password.value });
  if (!store.getters['auth/authError']) {
    alert('Registered successfully!');
  }
}

const uid = computed(() => store.getters['auth/currentUserUid']);

watch(uid, (newUid) => {
  if (newUid) {
    console.log('User UID:', newUid);
  }
});


</script>

<style scoped>
.login-section {
  width: 100%;
  height: auto;
  min-height: 90rem;
  background-image: url("@/assets/images/loginBG.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;

  padding: 30px;
}

.logo {
  color: #fff;
  font-family: "Maroon Black";
  font-size: clamp(9rem, 10vw, 14rem);
  font-weight: 400;
}

form {
  padding: 50px 90px;
  background: #fafafa;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.form-logo {
  color: #302a18;
  font-family: "Maroon Black";
  font-size: clamp(7rem, 10vw, 12rem);
  font-style: normal;
  font-weight: 400;
  margin-bottom: 15px;
}

.form-text {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.8rem;
  font-weight: 300;
  max-width: 38rem;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-inputs input {
  border-radius: 8px;
  background: #fff;
  box-shadow: -4px 4px 21.8px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
  color: #302a18;
  font-family: "SFR-regular";
}

.form-inputs input::placeholder {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 300;
  opacity: 0.5;
}

a {
  text-decoration: underline;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.5rem;
}

.forgot {
  opacity: 0.4;
}

.without-acc {
  opacity: 0.8;
  margin-top: 10px;
  text-align: center;
}

.form-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-buttons button {
  padding: 16px 32px;
  border-radius: 8px;
  font-family: "SFR-regular";
  font-size: 1.4rem;
  text-transform: uppercase;
}

.login-button {
  background: #302a18;
  color: #fff;
}

.guest-button {
  background: #fff;
  color: #302a18;
  border: 1px solid #302a18;
}

@media (max-width: 1200px) {
  .login-section {
    flex-direction: column;
    gap: 75px;
    min-height: 75rem;
  }
  form {
    padding: 40px;
  }
  .logo {
    display: none;
  }
}
</style>