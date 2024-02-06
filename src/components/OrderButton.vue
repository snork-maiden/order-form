<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  cityId: Number
})

const emit = defineEmits({
  click: null
})

const store = useStore()

function initializeOrder() {
  store.commit('currentCityId', { cityId: props.cityId })
  emit('click')
}
</script>

<template>
  <button type="button" @click="initializeOrder">
    <slot></slot>
  </button>
</template>
