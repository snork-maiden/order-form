<script setup>
import { useStore } from "vuex";

const props = defineProps({
  cityId: String,
});

const emit = defineEmits({
  click: null,
});

const store = useStore();

function initializeOrder() {
  store.commit("currentCityId", { cityId: +props.cityId });
  emit("click");
}
</script>

<template>
  <button
    type="button"
    @click="initializeOrder"
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    <slot></slot>
  </button>
</template>
