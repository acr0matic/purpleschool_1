<template>
  <input v-model="data" type="text">
</template>

<script setup>
const data = defineModel(
  {
    type: String
  }
);

</script>

<style scoped lang="scss">
input {
  flex-grow: 1;
  padding: 14px 18px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: var(--white);
  background-color: var(--gray-800);

  &::placeholder {
    color: var(--gray-600);
  }
}
</style>