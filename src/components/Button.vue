<template>
  <button class="button">Кнопка</button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '../styles/abstracts/vars';

.button {
  min-width: 140px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px 24px;

  background-size: 100%;
  background-image: var(--gradient);
  color: var(--text-primary);

  font-weight: vars.$weight-SemiBold;

  cursor: pointer;
  transition: 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-size: 200%;
      background-position: right;
    }
  }
}
</style>