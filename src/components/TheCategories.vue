<template>
  <div class="parent">
    <router-link class="div1" to="/category/bedroom">
      <div class="image-wrapper">
        <img src="@/assets/images/bedroom.jpg" alt="" />
        <span>bedroom</span>
      </div>
    </router-link>
    <router-link class="div2" to="/category/bathroom">
      <div class="image-wrapper">
        <img src="@/assets/images/bathroom.jpg" alt="" />
        <span>bathroom</span>
      </div>
    </router-link>
    <router-link class="div3" to="/category/living-room">
      <div class="image-wrapper">
        <img src="@/assets/images/livingRoom.jpg" alt="" />
        <span>living room</span>
      </div>
    </router-link>
    <router-link class="div4" to="/category/garden">
      <div class="image-wrapper">
        <img src="@/assets/images/garden.jpg" alt="" />
        <span>garden</span>
      </div>
    </router-link>
    <router-link class="div5" to="/category/kitchen">
      <div class="image-wrapper">
        <img src="@/assets/images/kitchen.jpg" alt="" />
        <span>kitchen</span>
      </div>
    </router-link>
    <router-link class="div6" to="/category/dining-room">
      <div class="image-wrapper">
        <img src="@/assets/images/diningRoom.jpg" alt="" />
        <span>dining room</span>
      </div>
    </router-link>
    <p class="category">Categories</p>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 26px;
  padding: 20px;
  background: rgba(253, 228, 195, 0.3);
}

a {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 8px;
}

a img {
  transition: transform 0.4s ease;
}

a:hover img {
  transform: scale(1.1);
}


.div1 {
  grid-row: span 3 / span 3;
}

.div2 {
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 4;
}

.div3 {
  grid-row: span 5 / span 5;
  grid-column-start: 2;
  grid-row-start: 1;
}

.div4 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 6;
}

.div5 {
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-column-start: 3;
  grid-row-start: 1;
}

.div6 {
  grid-row: span 3 / span 3;
  grid-column-start: 5;
  grid-row-start: 1;
}

.category {
  grid-column: 4 / 5;
  grid-row: 6;
  color: #302a18;
  font-size: clamp(6rem, 10vw, 12rem);
  font-family: "Maroon Black";
  font-weight: 400;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

span {
  font-size: clamp(1.6rem, 10vw, 3.2rem);
  font-family: "SFR-regular";
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
}

@media (max-width: 768px) {
  .parent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
  }

  .category {
    order: -1;
    font-size: clamp(3rem, 10vw, 5rem);
    text-align: center;
  }

  .parent > a {
    flex: 1 1 auto;
    height: auto;
  }

  .image-wrapper {
    aspect-ratio: 16/9;
  }

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6 {
    all: unset;
  }
}
</style>