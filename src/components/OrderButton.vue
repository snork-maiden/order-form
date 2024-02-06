<script setup>

const props = defineProps({
  cityName: String
})

const emit = defineEmits({
  click: null,
})

function initializeOrder() {
    // change current city in store
    emit('click')
}
</script>

<template>
<button type="button" @click="initializeOrder">
    <slot></slot>
</button>
</template>

