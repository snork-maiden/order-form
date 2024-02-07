<script setup>
import { ref } from "vue";
import OrderButton from "./OrderButton.vue";
import OrderForm from "./OrderForm.vue";
import OrderResponse from "./OrderResponse.vue";
import { useStore } from "vuex";

const store = useStore();

let showOrderForm = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-x-20 gap-y-7 items-center justify-center">
    <OrderButton @click="showOrderForm = true" cityId="1">
      Заказать в&nbsp;Москву
    </OrderButton>
    <OrderButton @click="showOrderForm = true" cityId="2">
      Заказать в&nbsp;Санкт-Петербург
    </OrderButton>
  </div>
  <OrderForm v-if="showOrderForm" @close="showOrderForm = false" />
  <OrderResponse v-if="store.getters.getOrderResponse" />
</template>
