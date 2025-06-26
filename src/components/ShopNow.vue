<template>
  <section class="shop-now-section">
    <p class="logo">perco</p>
    <button>Shop now</button>
  </section>
</template>

<style scoped>
.shop-now-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 30px;
}
.shop-now-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/shopNow-bg.png"); /* поправлен путь */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  pointer-events: none;
}
.logo {
  color: #fff;
  font-family: "Maroon Black";
  font-size: clamp(8rem, 10vw, 17rem);
  font-weight: 400;
}
button {
  background: #fde4c3;
  color: #302a18;
  padding: 13px 34px;
  border-radius: 8px;
  font-size: 1.6rem;
  font-family: "SFR-medium";
  text-transform: uppercase;
}
</style>