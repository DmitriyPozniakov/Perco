<template>
  <section class="hero-section">
    <div class="centered">
      <base-input></base-input>
    </div>
    <div class="text-wrapper">
      <h1>Synthesis of Luxury</h1>
      <div class="article-wrapper">
        <p class="pre-heading">Your corner of style</p>
        <p class="article">
          Discover a world of furniture where luxury meets modern design.
        </p>
      </div>
    </div>
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
  background-image: url("../assets/images/Bitmap.png");
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  z-index: 0;
  pointer-events: none;
}

.centered {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 30px;
}

h1 {
  color: #302a18;
  font-family: "Maroon Black";
  font-size: clamp(6.5rem, 10vw, 17rem);
  font-weight: 400;
  margin-bottom: 26px;
}

.pre-heading {
  color: #302a18;
  font-family: "SFR-medium";
  font-size: clamp(1.6rem, 10vw, 2.2rem);
  margin-bottom: 10px;
}

.article {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: clamp(1.2rem, 10vw, 1.6rem);
  max-width: 21rem;
  margin-bottom: 65px;
}

.hero-image {
  width: 100%;
  height: 50rem;
  object-fit: cover;
  object-position: center 65%;
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
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button-circle:hover {
  transform: translateY(-10px);
}



.button-circle p {
  margin-top: 30px;
  text-transform: uppercase;
}

.button-circle img {
  margin-left: 45px;
}

@media (min-width: 768px) {
  .text-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .centered {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-image {
    height: 30rem;
  }
}

@media (min-width: 1200px) {
  h1 {
    width: 120rem;
  }
}
</style>
