<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

const store = useStore();
const cities = ref(null);
const currentCityId = ref(null);

function createRequest() {
  store.commit("currentCityId", { cityId: null });
}

onMounted(() => {
  cities.value = store.getters.getCitiesList;
  currentCityId.value = store.getters.getCurrentCityId;
});
</script>

<template>
  <form @submit="createRequest" v-if="cities">
    <label for="name">Имя</label>
    <input type="text" name="name" id="name" />

    <label for="phone">Телефон</label>
    <input type="text" name="phone" id="phone" />

    <label for="email">Email</label>
    <input type="email" name="email" id="email" />

    <label for="city_id">Город</label>
    <select name="city_id" id="city_id">
      <option
        v-for="city of cities"
        :value="city.name"
        :key="city.id"
        :selected="city.id === currentCityId"
      ></option>
    </select>

    <button type="submit">Отправить</button>
  </form>
</template>
