<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-columns">
        <div class="left-columns">
          <ul>
            <li><router-link to="">Home</router-link></li>
            <li><router-link to="">About us</router-link></li>
            <li><router-link to="">Reviews</router-link></li>
          </ul>
          <ul>
            <li><router-link to="">Bedroom</router-link></li>
            <li><router-link to="">Living room</router-link></li>
            <li><router-link to="">Kitchen</router-link></li>
          </ul>
          <ul>
            <li><router-link to="">Dining room</router-link></li>
            <li><router-link to="">Garden</router-link></li>
            <li><router-link to="">Bathroom</router-link></li>
          </ul>
          <ul>
            <li><router-link to="">Contact</router-link></li>
            <li><router-link to="">Privacy Policy</router-link></li>
            <li><router-link to="">Terms of use</router-link></li>
          </ul>
        </div>
        <ul class="right-column">
          <li><router-link to="">Instagram</router-link></li>
          <li><router-link to="">Facebook</router-link></li>
        </ul>
      </div>
      <p class="logo">perco</p>
    </div>
    <div class="footer-bottom">
      <p>{{ currentYear }}</p>
      <p>preco@gmail.com</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  padding: 40px;
}

a {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.8rem;
  font-weight: 300;
  text-decoration: none;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 100px;
}

.left-columns {
  display: flex;
  gap: 75px;
  flex-wrap: wrap;
}

.left-columns ul,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.logo {
  text-align: center;
  color: #302a18;
  font-family: "Maroon Black";
  font-size: clamp(5.5rem, 10vw, 13rem);
  margin-bottom: 70px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
}

.footer-bottom p {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.8rem;
}

@media (max-width: 768px) {
  footer {
    padding: 30px 15px;
  }
  .footer-columns {
    flex-direction: column;
    gap: 40px;
  }

  .left-columns {
    flex-direction: column;
    gap: 40px;
  }

  .footer-columns {
    margin-bottom: 50px;
  }
}
</style>
