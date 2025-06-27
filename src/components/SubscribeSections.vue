<template>
  <section class="subscribe-section">
    <p class="text">subscribe on our newsletter</p>
    <img src="@/assets/images/subBG.png" alt="" />
    <div class="news-div">
      <p class="news-div-heading">DON’T MISS OUT NEWS</p>
      <input type="text" placeholder="Email address" />
      <button>SEND</button>
    </div>
  </section>
</template>

<style scoped>
.subscribe-section {
  background: #302a18;
  padding-top: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
}
.text {
  color: #fff;
  text-align: center;
  font-family: "Maroon Black";
  font-size: clamp(5rem, 12vw, 17rem);
  font-style: normal;
  font-weight: 400;
  line-height: 98.83%;
  position: absolute;
  top: 10%;
  z-index: 1;
}
img {
  width: 100%;
  height: auto;
  max-width: 56rem;
  display: block;
  position: relative;
  z-index: 0;
}
.news-div {
  padding: 50px 70px;
  background: #fde4c3;
  border-radius: 8px;
  position: absolute;
  z-index: 2;
}

.news-div p {
  margin-bottom: 40px;
  text-align: center;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 2rem;
}

input,
button {
  padding: 16px 12px;
}

input {
  border-radius: 8px 0px 0px 8px;
  font-family: "SFR-regular";
  font-size: 1.6rem;
}

input::placeholder {
  font-family: "SFR-regular";
  opacity: 0.5;
  color: #302a18;
}

button {
  border-radius: 0px 8px 8px 0px;
  background: #302a18;
  color: #fff;
  font-family: "SFR-regular";
  font-size: 1.6rem;
}

@media (max-width: 768px) {
  .news-div {
    padding: 30px;
  }
}
</style>