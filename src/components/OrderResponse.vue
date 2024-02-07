<script setup>
import { useStore } from "vuex";
import MyPopup from "./MyPopup.vue";

const store = useStore();

function closePopup() {
  store.commit("orderResponse", { response: null });
}
</script>

<template>
  <MyPopup @close="closePopup">
    <div v-html="store.getters.getOrderResponse"></div
  ></MyPopup>
</template>
