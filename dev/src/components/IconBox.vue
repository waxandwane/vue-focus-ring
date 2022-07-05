<script setup lang="ts">
import { ref } from 'vue'
import { FocusRing } from '../../../lib'

const buttonRef = ref()
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <FocusRing :target="buttonRef">
    <button class="btn" ref="buttonRef" v-bind="$attrs">
      <slot />
    </button>
  </FocusRing>
</template>

<style scoped>
.btn {
  border: none;
  background-color: transparent;
  margin: 0px;
  padding-top: 5px;
  border-radius: 2px;
}
</style>
