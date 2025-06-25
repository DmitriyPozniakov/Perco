<template>
  <nav>
    <div class="left-side-mobile mobile-div">
      <img src="@/assets/images/menu.svg" alt="" />
      <p class="logo">perco</p>
    </div>
    <div class="right-side-mobile mobile-div">
      <img src="@/assets/images/user.svg" alt="" />
      <img src="@/assets/images/bag.svg" alt="" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
}

.logo {
  font-family: "Maroon Black";
  font-size: 3.6rem;
  color: #302a18;
}

.mobile-div {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>