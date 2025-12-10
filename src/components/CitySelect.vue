<template>
  <div class="city-select">
    <div class="city-select__action">
      <Button @click="select">
        <img src="../assets/images/icons/location.svg" alt="">
        Изменить город
      </Button>

      <input type="text">
      <Button>Сохранить</Button>
    </div>
    <!-- /.city-select__action -->
  </div>
  <!-- /.city-select -->

</template>

<script setup>
import Button from './Button.vue';

const emit = defineEmits({
  selectCity: null,
});

function select() {
  emit('selectCity', 'Moscow')
}

</script>

<style lang="scss" scoped></style>