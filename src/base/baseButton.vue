<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  background: #302a18;
  max-width: 21rem;
  height: 5rem;
  padding: 13px 34px;
  color: #fff;
  font-family: "SFR-regular";
  font-weight: 400;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
}
</style>