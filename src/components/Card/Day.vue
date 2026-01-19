<template>
  <div class="card">
    <div v-if="iconName" class="card__icon">
      <Icon :name="iconName" size="54"></Icon>
    </div>
    <!-- /.card__icon -->

    <div class="card__day">
      <p>{{ formattedDate }}</p>
    </div>
    <!-- /.card__day -->

    <div class="card__temp">
      <p>{{ temp }} °C</p>
    </div>
    <!-- /.card__temp -->
  </div>
</template>

<script>
const map = new Map([
  [1000, 'sun'],
  [1003, 'cloud'],
  [1006, 'cloud'],
  [1030, 'cloud'],
  [1063, 'rain'],
  [1066, 'rain'],
  [1069, 'rain'],
])
</script>

<script setup>
import Icon from "@/components/Icon.vue";
import { computed } from "vue";

const props = defineProps({
  weatherCode: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
  temp: Number,
});

const iconName = computed(() => map.get(props.weatherCode));

const formattedDate = computed(() => {
  if (!props.date) return '';
  const date = new Date(props.date);
  return date.toLocaleDateString('ru-RU', { weekday: 'short' });
});

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding: 12px 12px 20px;
  border-radius: 10px;
  background-color: var(--bg-forecast);
  font-size: 20px;

  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: var(--bg-forecast-hover);
    }
  }

  &.current {
    background-color: var(--bg-forecast-active);
    color: var(--text-inverted);
  }

  &__temp {
    font-weight: 700;
  }
}
</style>
