<template>  
  <div class="city-select">
    <div class="city-select__action">
      <template v-if="!isEdited">
        <Button @click="edit">
          <img src="../assets/images/icons/location.svg" alt="">
          Изменить город
        </Button>
      </template>

      <template v-else>
        <Input v-model="currentCity" placeholder="Введите город" @keyup.enter="save"></Input>
        <Button @click="save">Сохранить</Button>
      </template>
    </div>
    <!-- /.city-select__action -->
  </div>
  <!-- /.city-select -->

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Button from './Button.vue';
import Input from './Input.vue';

const isEdited = ref(false);
const currentCity = ref('Москва');

onMounted(() => {
  emit('selectCity', currentCity.value)
})

const emit = defineEmits({
  selectCity: null,
});

function save() {
  isEdited.value = false;
  emit('selectCity', currentCity.value)
}

function edit() {
  isEdited.value = true;
}

</script>

<style lang="scss" scoped>
.city-select {
  width: 100%;
  margin-top: 70px;

  &__action {
    display: flex;
    gap: 12px;
  }
}
</style>