<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90px;
  border-radius: 4px 0px 0px 4px;
  background: #ee4d40;

  color: #fff;
  font-family: "SFR-medium";
  font-size: 1.6rem;

  position: absolute;
  top: 2%;
  right: 0;
}
</style>