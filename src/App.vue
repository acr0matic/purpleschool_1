<template>
  <div>
    <p>Текущая дата: {{ getCurrentDate() }}</p>
  </div>
</template>

<script setup>
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