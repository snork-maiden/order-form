<script setup>
import { ref } from "vue";
import OrderButton from "./OrderButton.vue";
import OrderForm from "./OrderForm.vue";

let showOrderForm = ref(false);
</script>

<template>
  <div class="flex space-x-20">
    <OrderButton @click="showOrderForm = true" cityId="1">
      Заказать в&nbsp;Москву
    </OrderButton>
    <OrderButton @click="showOrderForm = true" cityId="2">
      Заказать в&nbsp;Санкт-Петербург
    </OrderButton>

    <OrderForm v-if="showOrderForm" />
  </div>
</template>
