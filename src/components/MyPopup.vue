<script setup>
import IconClose from "./icons/IconClose.vue";
defineEmits({
  close: null,
});
</script>

<template>
  <Teleport to="body">
    <div
      @click.self="$emit('close')"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
    >
      <div class="relative bg-white p-10 rounded-lg shadow-lg">
        <button
          class="absolute top-0 right-0 mt-2 mr-2 p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <IconClose @click="$emit('close')" />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
