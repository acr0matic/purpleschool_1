<template>
  <main>
    <div class="statistic__list">
      <Statistic v-for="stat in data" :key="stat" v-bind="stat"></Statistic>
    </div>
    <!-- /.statistic__list -->

    <CitySelect @select-city="getCity"></CitySelect>
  </main>
</template>

<script setup>
import Statistic from "./components/Statistic.vue";
import CitySelect from "./components/CitySelect.vue";

const data = {
  hydration: {
    label: 'Влажность',
    value: '90%'
  },
  rain: {
    label: 'Осадки',
    value: '5%'
  },
  wind: {
    label: 'Ветер',
    value: '3 м/с'
  },
}

const getCity = (city) => {
  console.log(city);
}
</script>

<style scoped lang="scss"></style>