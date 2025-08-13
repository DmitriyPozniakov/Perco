<template>
  <account-banner category="your address" />

  <section class="loader-section" v-if="loading">
    <div><base-loader /></div>
  </section>

  <section class="address-section" v-else>
    <div class="address">
      <BaseAddress
        v-for="addr in addresses"
        :key="addr._id"
        :id="addr._id"
        :fullName="addr.fullName"
        :phone="addr.phone"
        :address="addr.address"
        @delete-address="handleDeleteAddress"
        @edit-address="handleEditAddress"
      />
    </div>

    <button class="add-adress-btn" @click="togglePopup">
      <img src="@/assets/images/add.svg" alt="" />
      <span>add new</span>
    </button>
  </section>

  <div v-if="showPopup" class="overlay" @click.self="togglePopup">
    <form @submit.prevent="submitAddress" class="popup-content">
      <div class="header">
        <h2>Enter your address</h2>
        <button @click="cancelEdit" type="button">X</button>
      </div>

      <input
        type="text"
        placeholder="Full name"
        v-model="fullNameInput"
        required
      />

      <vue-tel-input
        v-model="phoneInput"
        :preferred-countries="['ua', 'ru', 'us']"
        :inputoptions="{ showDialCode: true }"
        required
      />

      <input
        type="text"
        placeholder="Address"
        v-model="addressInput"
        required
      />

      <base-button type="submit">{{ editingId ? "Update" : "Submit" }}</base-button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import { useStore } from "vuex";
import BaseAddress from "@/base/baseAddress.vue";

const store = useStore();
const userId = computed(() => store.getters["auth/currentUserUid"]);

const showPopup = ref(false);
const fullNameInput = ref("");
const phoneInput = ref("");
const addressInput = ref("");
const editingId = ref(null); 

const addresses = computed(() => store.getters["account/address"]);
const loading = computed(() => store.getters["account/loading"]);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const resetForm = () => {
  fullNameInput.value = "";
  phoneInput.value = "";
  addressInput.value = "";
  editingId.value = null;
};

const cancelEdit = () => {
  resetForm();
  togglePopup();
};

const submitAddress = async () => {
  try {
    const payload = {
      fullName: fullNameInput.value.trim(),
      phone: phoneInput.value.trim(),
      address: addressInput.value.trim(),
    };

    let res;
    if (editingId.value) {
      res = await fetch(
        `${process.env.VUE_APP_URL}/users/${userId.value}/address/${editingId.value}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } else {
      res = await fetch(
        `${process.env.VUE_APP_URL}/users/${userId.value}/address`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    }

    if (!res.ok) throw new Error(`Ошибка: ${res.status}`);

    await res.json();
    await store.dispatch("account/fetchAddress", userId.value);

    resetForm();
    togglePopup();
  } catch (err) {
    console.error("Ошибка при сохранении адреса:", err);
  }
};

const handleDeleteAddress = async (addressId) => {
  try {
    await store.dispatch("account/deleteAddress", {
      userId: userId.value,
      addressId,
    });
    await store.dispatch("account/fetchAddress", userId.value);
  } catch (err) {
    console.error("Ошибка при удалении адреса:", err);
  }
};

const handleEditAddress = (address) => {
  fullNameInput.value = address.fullName;
  phoneInput.value = address.phone;
  addressInput.value = address.address;
  editingId.value = address._id; 
  showPopup.value = true;
};

onMounted(() => {
  if (userId.value) {
    store.dispatch("account/fetchAddress", userId.value);
  }
});
</script>



<style scoped>
.loader-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
}

.address {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.address-section {
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
  height: 40rem;
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
