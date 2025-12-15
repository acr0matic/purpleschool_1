<template>
  <div class="statistic">
    <div class="statistic__row">
      <p class="statistic__label">{{ label }}</p>
      <p class="statistic__value">{{ value }}</p>
    </div>
    <!-- /.statistic__row -->
  </div>
</template>

<script setup>
const { label = "Не задано", value = "0" } = defineProps({
  label: String,
  value: String,
});
</script>

<style lang="scss" scoped>
@use "../styles/abstracts/vars";

.statistic {
  &__row {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    font-size: 28px;
    text-transform: uppercase;
  }

  &__label {
    &::after {
      content: ":";
    }
  }

  &__value {
    font-weight: vars.$weight-SemiBold;
  }
}
</style>