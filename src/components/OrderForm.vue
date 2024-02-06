<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import MyPopup from "./MyPopup.vue";

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
  <MyPopup>
    <form @submit="createRequest" v-if="cities" class="flex flex-col space-y-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Имя</label
      >
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="text"
        name="name"
        id="name"
        required
      />

      <label for="phone" class="block text-sm font-medium text-gray-700"
        >Телефон</label
      >
      <input class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" name="phone" id="phone" required />

      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="email" name="email" id="email" required />

      <label for="city_id" class="block text-sm font-medium text-gray-700"
        >Город</label
      >
      <select class="mt-1 block w-full pl-3 pr-10 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="city_id" id="city_id" required>
        <option
          v-for="city of cities"
          :value="city.id"
          :key="city.id"
          :selected="city.id === currentCityId"
        >{{ city.name }}</option>
      </select>

      <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Отправить</button>
    </form>
  </MyPopup>
</template>
