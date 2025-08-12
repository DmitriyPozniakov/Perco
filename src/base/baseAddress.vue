<template>
  <div class="address-card">
    <div class="row">
      <img src="@/assets/images/user.svg" alt="" />
      <p>{{ fullName }}</p>
    </div>
    <div class="row">
      <img src="@/assets/images/call.svg" alt="" />
      <p>{{ phone }}</p>
    </div>
    <div class="row">
      <img src="@/assets/images/location.svg" alt="" />
      <p>{{ address }}</p>
    </div>
    <div class="buttons-container">
      <base-button class="edit">EDIT</base-button>
      <button class="delete-btn">DELETE</button>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
    fullName: String,
    phone: String,
    address: String
})
</script>

<style scoped>
.address-card {
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  border-radius: 8px;
  height: 43rem;
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
}
.delete-btn {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 0.675px solid #ea4335;
  background: #fff;
  color:#ea4335
}
</style>