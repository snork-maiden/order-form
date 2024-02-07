<script setup>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import MyPopup from "./MyPopup.vue";
import { sendOrderRequest } from "@/api/orderAPI";

const emit = defineEmits({
  close: null,
});

const store = useStore();
const cities = ref(null);
const form = ref({
  name: "",
  phone: "",
  email: "",
  city_id: null,
});

let isFieldsNotEmpty = computed(
  () => form.value.name && form.value.phone && form.value.email,
);

async function createRequest() {
  store.commit("currentCityId", { cityId: null });

  emit("close");
  
  form.value.phone = "+" + form.value.phone.replaceAll(/[^0-9]/g, "");
  const response = (await sendOrderRequest(form.value)).data;

  store.commit("orderResponse", { response });
}

onMounted(() => {
  cities.value = store.getters.getCitiesList;
  form.value.city_id = store.getters.getCurrentCityId;
});
</script>

<template>
  <MyPopup @close="$emit('close')">
    <form
      @submit.prevent="createRequest"
      v-if="cities"
      class="flex flex-col space-y-4 mt-4"
    >
      <label for="name" class="block text-sm font-medium text-gray-700">
        Имя<span class="text-red-800">*</span></label
      >
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="text"
        v-model="form.name"
        name="name"
        id="name"
        required
      />

      <label for="phone" class="block text-sm font-medium text-gray-700">
        Телефон<span class="text-red-800">*</span>
      </label>
      <input
        v-maska
        data-maska="+7 (###) ###-##-##"
        class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        v-model="form.phone"
        name="phone"
        id="phone"
        placeholder="+7 (900) 000-00-00"
        @focus="form.phone += '.'"
        required
      />

      <label for="email" class="block text-sm font-medium text-gray-700">
        Email<span class="text-red-800">*</span>
      </label>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="email"
        v-model="form.email"
        name="email"
        id="email"
        required
      />

      <label for="city_id" class="block text-sm font-medium text-gray-700">
        Город
      </label>
      <div class="pb-5">
        <select
          class="mt-1 block w-full pl-3 pr-10 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          v-model="form.city_id"
          name="city_id"
          id="city_id"
          required
        >
          <option v-for="city of cities" :value="city.id" :key="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        :class="{ 'opacity-75': !isFieldsNotEmpty }"
      >
        Отправить
      </button>
    </form>
  </MyPopup>
</template>
