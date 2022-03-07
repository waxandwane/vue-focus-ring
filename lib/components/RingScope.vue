<script lang="ts" setup>
import {
  computed,
  provide,
  reactive,
  readonly,
  ref,
  unref,
  watchEffect,
  Ref,
} from "vue"
import type { Dimensions, RingScopeListeners } from "../types"
import { getStyle, LISTENERS, setPosition, shouldBeLight } from "../utils"

interface Props {
  container?: Element
}

const props = defineProps<Props>()

const root = ref<Element>()
const visible = ref(false)
const light = ref(true)

const rDims: Dimensions = reactive({
  top: 0,
  left: 0,
  height: 0,
  width: 0,
  borderRadius: "2px",
})

const style = computed(() => getStyle(rDims))

watchEffect(
  () => {
    if (props.container) {
      root.value = props.container
    } else {
      root.value = document.body
    }
  },
  {
    flush: "post",
  }
)

const onFocus = ({
  container,
  offset,
}: {
  container: Element;
  offset: number;
}) => {
  setPosition(
    rDims,
    container,
    root as Ref<Element>,
    offset,
    !props.container
  );

  light.value = shouldBeLight(container)
  visible.value = true;
};

const onBlur = () => {
  visible.value = false;
};

provide<RingScopeListeners>(LISTENERS, readonly({ onBlur, onFocus }));
</script>

<template>
  <slot />
  <div class="ring" :class="light ? 'light' : 'dark'" v-if="visible" :style="style" />
</template>

<style scoped>
.ring {
  position: absolute;
  pointer-events: none;
  display: block;

  background: none;
  margin: 0;
  padding: 0;
}
.light {
  box-shadow: 0 0 0 4px rgba(252, 80, 49, 0.8);
}
.dark {
  box-shadow: 0 0 0 4px rgba(95, 212, 255, 0.8);
}
</style>