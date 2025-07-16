<template>
  <div class="input-wrapper">
    <img src="@/assets/images/search.svg" class="search-icon" alt="" />
    <input type="text" placeholder="Search" />
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

input {
  width: 100%;
  height: 42px;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  color: #302a18;
  font-family: "SFR-regular";
}

input::placeholder {
  color: #302a18;
  font-family: "SFR-regular";
  opacity: 0.5;
}
</style>