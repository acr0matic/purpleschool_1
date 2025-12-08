<template>
  <div>
    <p>Текущая дата: {{ getCurrentDate() }}</p>
    <Button></Button>
  </div>
</template>

<script setup>
import Button from "./components/Button.vue";

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const getCurrentDate = (currentDate = new Date()) => {
  return dateFormatter.format(currentDate);
}
</script>

<style scoped></style>