<template>
  <div class="address-card">
    <div class="row row-fullname">
      <img src="@/assets/images/user.svg" alt="" />
      <p>{{ fullName }}</p>
    </div>
    <div class="row row-phone">
      <img src="@/assets/images/call.svg" alt="" />
      <p>{{ phone }}</p>
    </div>
    <div class="row row-address">
      <img src="@/assets/images/location.svg" alt="" />
      <p>{{ address }}</p>
    </div>
    <hr />
    <div class="billing-container">
      <div class="pay-address shop-address">
        <img src="@/assets/images/tick-circle.svg" alt="" />
        Shipping address
      </div>
      <div class="pay-address bill-address">
        <img src="@/assets/images/tick-circle.svg" alt="" />
        Billing address
      </div>
    </div>
    <div class="buttons-container">
      <base-button @click="editAddress" class="edit">
        <img src="@/assets/images/edit.svg" alt="" />
        EDIT
      </base-button>
      <button @click="deleteAddress" class="delete-btn">
        <img src="@/assets/images/trash.svg" alt="" />
        DELETE
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: String,
  fullName: String,
  phone: String,
  address: String,
});

const emit = defineEmits(["delete-address"]);

const deleteAddress = () => {
  emit("delete-address", props.id);
};

const editAddress = () => {
  emit("edit-address", {
    id: props.id,
    fullName: props.fullName,
    phone: props.phone,
    address: props.address,
  });
};
</script>

<style scoped>
.address-card {
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  border-radius: 8px;
  height: 40rem;
  max-width: 32rem;
  min-width: 30rem;
}

.row {
  display: flex;
  gap: 12px;
}
.row img {
  height: 20px;
  width: 20px;
}
.row p {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 300;
}
.edit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.delete-btn {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0.675px solid #ea4335;
  background: #fff;
  color: #ea4335;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.delete-btn:hover,
.delete-btn:active {
  background: #ea4335;
  color: #fff;
}

.delete-btn:hover img,
.delete-btn:active img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
    hue-rotate(180deg) brightness(103%) contrast(103%);
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.billing-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pay-address {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #302a18;
  font-family: "SFR-regular";
  font-weight: 300;
  font-size: 1.6rem;
}
</style>