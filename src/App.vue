<template>
  <main>
    <Error :data="error"></Error>
    <div class="statistic__list">
      <Statistic v-for="item in dataModified" :key="item.label" v-bind="item"></Statistic>
    </div>
    <!-- /.statistic__list -->

    <CitySelect @select-city="getCity"></CitySelect>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import Statistic from "./components/Statistic.vue";
import CitySelect from "./components/CitySelect.vue";
import Error from "./components/Error.vue";

const data = ref(null);
const error = ref(null);

const dataModified = computed(() => {
  if (!data.value) {
    return []
  }

  return [
    {
      label: 'Влажность',
      value: data.value.current.humidity + '%'
    },
    {
      label: 'Облачность',
      value: data.value.current.cloud + '%'
    },
    {
      label: 'Ветер',
      value: data.value.current.wind_kph + ' км/ч'
    }
  ]
});

const getCity = async (city) => {
  const params = new URLSearchParams({
    q: city,
    lang: 'ru',
    key: import.meta.env.VITE_API_KEY,
    days: 3,
  });

  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/forecast.json?${params}`)
  if (!response.ok) {
    error.value = await response.json();
    data.value = null;
    return
  }

  error.value = null;
  data.value = await response.json();
}
</script>

<style scoped lang="scss"></style>