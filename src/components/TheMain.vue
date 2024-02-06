<script setup>
import { ref } from 'vue';
import OrderButton from './OrderButton.vue';
import OrderForm from './OrderForm.vue';

let showOrderForm = ref(false)
</script>

<template>
<div>
  <OrderButton cityId="1">Заказать в Москву</OrderButton>
  <OrderButton cityId="2">Заказать в Санкт-Петербург</OrderButton>

  <OrderForm v-if="showOrderForm"/>
</div>
</template>

