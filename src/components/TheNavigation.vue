<template>
  <nav>
    <div class="left-side-mobile mobile-div">
      <img src="@/assets/images/menu.svg" alt="" />
      <router-link to="/" class="logo">perco</router-link>
    </div>
    <div class="right-side-mobile mobile-div">
      <router-link to="/login">
        <img src="@/assets/images/user.svg" alt="" />
      </router-link>
      <img src="@/assets/images/bag.svg" alt="" />
    </div>
    <div class="desktop-div">
      <div class="desktop-column-1">
        <router-link to="/" class="logo">perco</router-link>
      </div>
      <div class="column-wrapper">
        <div class="desktop-column-2">
          <router-link to="/category/bedroom">Bedroom</router-link>
          <router-link to="/category/living-room">Living room</router-link>
          <router-link to="/category/kitchen">Kitchen</router-link>
        </div>
        <div class="desktop-column-3">
          <router-link to="/category/dining-room">Dining room</router-link>
          <router-link to="/category/garden">Garden</router-link>
          <router-link to="/category/bathroom">Bathroom</router-link>
        </div>
      </div>
      <div class="user-info">
        <router-link to="/login" class="account">Account</router-link>
        <div class="bag-wraper">
          <img src="@/assets/images/bag.svg" alt="" />
          <a href="#">Bag</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
}

.desktop-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-family: "Maroon Black";
  font-size: 3.6rem;
  color: #302a18;
}

.mobile-div {
  display: none;
  align-items: center;
  gap: 15px;
}

a {
  color: #302a18;
  font-size: 1.6rem;
  font-family: "SFR-regular";
  text-transform: uppercase;
}

.desktop-column-2,
.desktop-column-3 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column-wrapper {
  display: flex;
  gap: 60px;
}

.account {
  margin-right: 52px;
}

.user-info,
.bag-wraper {
  display: flex;
  align-items: center;
}

.bag-wraper {
  gap: 10px;
}

@media (max-width: 768px) {
  .desktop-div {
    display: none;
  }
  .mobile-div {
    display: flex;
  }
}
</style>