<template>
  <account-banner category="your address" />

  <section>
    <div class="address">
        <BaseAddress
        :full-name="fullName"
        :phone="phone"
        :address="address" 
        />
    </div>
    <button class="add-adress-btn" @click="togglePopup">
      <img src="@/assets/images/add.svg" alt="" />
      <span>add new</span>
    </button>
  </section>

  <div v-if="showPopup" class="overlay" @click.self="togglePopup">
    <form @submit.prevent class="popup-content">
      <div class="header">
        <h2>Enter your address</h2>
        <button @click="togglePopup">X</button>
      </div>

      <input type="text" placeholder="Full name" v-model="fullName" required />

      <vue-tel-input
        v-model="phone"
        :preferred-countries="['ua', 'ru', 'us']"
        :inputoptions="{ showDialCode: true }"
        required
      />

      <input type="text" placeholder="Address" v-model="address" required />
      <base-button type="submit" @click="submitAddress">Submit</base-button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import {useStore} from 'vuex';
import BaseAddress from "@/base/baseAddress.vue";

const store = useStore();
const uid = computed(() => store.getters["auth/currentUserUid"]);

const showPopup = ref(false);
const fullName = ref("");
const phone = ref("");
const address = ref("");

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const submitAddress = async () => {
  try {
    const payload = {
      fullName: fullName.value,
      phone: phone.value,
      address: address.value,
    };

    console.log("Отправляемые данные:", payload);

    const res = await fetch(
      `${process.env.VUE_APP_URL}/users/${uid.value}/address`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    console.log(uid);

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }

    const data = await res.json();
    console.log("Адрес сохранён:", data);

    // Очистка формы и закрытие
    fullName.value = "";
    phone.value = "";
    address.value = "";
    togglePopup();
  } catch (err) {
    console.error("Ошибка при сохранении адреса:", err);
  }
};

</script>

<style scoped>
section {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}

img {
  height: 46px;
  width: 46px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header h2 {
  color: #302a18;
  font-size: 2.2rem;
  font-family: "SFR-regular";
  font-weight: 500;
}

.header button {
  background: none;
}

.add-adress-btn {
  background: #fff;
  border-radius: 8px;
  padding: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: 43rem;
  max-width: 32rem;
  min-width: 30rem;
}

.add-adress-btn span {
  color: #302a18;
  font-size: 2.2rem;
  font-family: "SFR-regular";
  text-transform: uppercase;
}

.vue-tel-input {
  font-family: "SFR-regular";
  font-weight: 400;
  font-size: 1.6rem;
  color: #302a18;
  padding: 10px 20px;
  border: 0.675px solid #302a18;
  border-radius: 4px;
  width: 100%;
}

input {
  font-family: "SFR-regular";
  font-weight: 400;
  font-size: 1.6rem;
  color: #302a18;
  border: 0.675px solid #302a18;
  padding: 10px 20px;
  border-radius: 4px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(2px);
  padding: 0 40px;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 40rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}



@media (max-width: 768px) {
  section {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  .add-adress-btn {
    padding: 30px;
  }
}
</style>
