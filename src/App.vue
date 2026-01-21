<template>
  <main class="weather-widget">
    <div class="weather-widget__body">
      <div class="weather-widget__info">
        <Error :data="error"></Error>

        <template v-if="data">
          <div class="weather-widget__statistic">
            <Statistic v-for="item in dataModified" :key="item.label" v-bind="item"></Statistic>
          </div>
          <!-- /.weather-widget__statistic -->

          <div class="weather-widget__forecast">
            <Day
                v-for="item in data.forecast.forecastday"
                :key="item.date"
                :date="item.date"
                :temp="item.day.avgtemp_c"
                :weather-code="item.day.condition.code">
            </Day>
          </div>
          <!-- /.weather-widget__forecast -->
        </template>

        <CitySelect @select-city="getCity"></CitySelect>
      </div>
      <!-- /.weather-widget__info -->
    </div>
    <!-- /.weather-widget__body -->
  </main>
</template>

<script setup>
import {computed, ref} from "vue";
import Statistic from "./components/Statistic.vue";
import CitySelect from "./components/CitySelect.vue";
import Error from "./components/Error.vue";
import Day from "./components/Card/Day.vue";

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

<style lang="scss" scoped>
@use "@/styles/abstracts/vars";

.weather-widget {
  &__statistic {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__forecast {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4px;
    margin-top: 90px;
  }

  &__info {
    width: 540px;
    padding: 54px 48px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: var(--gray-900);
  }
}
</style>