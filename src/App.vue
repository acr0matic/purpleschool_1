<template>
  <main>
    {{ currentCity }}
    <div class="statistic__list">
      <Statistic v-for="item in dataModified" :key="item" v-bind="item"></Statistic>
    </div>
    <!-- /.statistic__list -->

    <CitySelect @select-city="getCity"></CitySelect>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import Statistic from "./components/Statistic.vue";
import CitySelect from "./components/CitySelect.vue";

const currentCity = ref('Tambov');

let data = ref({
  hydration: 90,
  rain: 20,
  wind: 3,
});

const dataModified = computed(() => {
  return [
    {
      label: 'Влажность',
      value: data.value.hydration + '%'
    },
    {
      label: 'Осадки',
      value: data.value.rain + '%'
    },
    {
      label: 'Ветер',
      value: data.value.wind + ' м/с'
    }
  ]
});

const getCity = (city) => {  
  currentCity.value = city;
}
</script>

<style scoped lang="scss">
</style>