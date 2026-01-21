<script setup>
import {computed, defineAsyncComponent} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '54',
  }
})

const icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
const size = computed(() => props.size + 'px');
</script>

<template>
  <component :is="icon" :height="size" :width="size" aria-hidden="true" class="icon"></component>
</template>

<style lang="scss">
.icon {
  display: inline-block;
  flex-shrink: 0;
  width: 100%;
}
</style>