<template>
  <section class="hero-section">
    <div class="centered">
      <div class="input-wrapper">
        <img src="@/assets/images/search.svg" class="search-icon" alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <h1>Synthesis of Luxury</h1>
    <p class="pre-heading">Your corner of style</p>
    <p class="article">
      Discover a world of furniture where luxury meets modern design.
    </p>
    <div class="wrapper">
      <img src="@/assets/images/hero-photo.jpg" class="hero-image" alt="" />
      <div class="button-circle">
        <p>View catalog</p>
        <img
          src="@/assets/images/arrow.svg"
          style="height: 52px; width: 52px"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: #f5f1ec;
  padding: 30px 20px;
  position: relative;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/Bitmap.png"); /* поправлен путь */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
}

.centered {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 30px;
}

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

h1 {
  color: #302a18;
  font-family: "Maroon Black";
  font-size: 7.3rem;
  font-weight: 400;
  margin-bottom: 26px;
}

.pre-heading {
  color: #302a18;
  font-family: "SFR-medium";
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.article {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.2rem;
  max-width: 21rem;
  margin-bottom: 65px;
}

.hero-image {
  width: 100%;
  height: 30rem;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}

.wrapper {
    position: relative;
}

.button-circle {
  width: 156px;
  height: 156px;
  background: #302a18;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
  color: #fff;
  font-family: "SFR-regular";
  position: absolute;
  top: -80px;
  right: 0;
}

.button-circle p {
  margin-top: 30px;
  text-transform: uppercase;
}

.button-circle img {
  margin-left: 45px;
}
</style>
