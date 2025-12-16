<template>
  <div v-if="display">
    {{ display }}
  </div>
</template>

<script>
const map = new Map([
  [1006, 'Указаный город не найден']
])
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => null,
  }
})

const display = computed(() => {
  const code = props.data?.error?.code;
  if (!code) return null;

  const message = map.get(code);

  return message ? `Ошибка: ${message}` : `Неизвестная ошибка (Код: ${code})`;
})
</script>