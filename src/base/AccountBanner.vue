<template>
    <div>
        {{ category }}
    </div>
</template>

<style scoped>
div {
   padding: 20px 40px;
   background: #fff; 
   color: #302A18;
   font-family: 'SFR-regular';
   font-size: 2.6rem;
   text-transform: uppercase;
}
</style>

<script setup>
import {defineProps} from 'vue';

defineProps({
  category: String,
});
</script>