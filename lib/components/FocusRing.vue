<script lang="ts" setup>
import {
  inject,
  onMounted,
  onUnmounted,
  ref,
  useSlots,
  watchEffect,
} from "vue";
import type { RingScopeListeners } from "../types";
import { LISTENERS } from "../utils";

interface Props {
  offset?: number;
  target?: Element
  container?: Element
}

const props = withDefaults(defineProps<Props>(), {
  offset: 2
})

const targetRef = ref<Element | null>(null);
const containerRef = ref<Element | null>(null);

const injectedListeners = inject<RingScopeListeners>(LISTENERS);

if (!injectedListeners) {
  throw new Error(
    "Focus Rings: make sure FocusRing is in context of a RingScope"
  );
}

const { onFocus, onBlur } = injectedListeners;

let updateOnFocus: EventListener = () => {
  onFocus({ container: containerRef.value as Element, offset: props.offset });
}

const attach = (el: Element) => {
  el.addEventListener("focus", updateOnFocus);
  el.addEventListener("click", updateOnFocus);
  el.addEventListener("blur", onBlur);
}

const unattach = (el: Element) => {
  el.removeEventListener("focus", updateOnFocus);
  el.removeEventListener("click", updateOnFocus);
  el.removeEventListener("blur", onBlur);
}

watchEffect(() => {
  const { target, container } = props

  if (container) {
    containerRef.value = container
  }

  if (target) {
    targetRef.value = target

    if (!container) {
      containerRef.value = target
    }

    attach(targetRef.value)
  }
}, {
  flush: 'post'
})

onMounted(() => {
  const slots = useSlots()
  const children = slots.default?.();

  const defaultElement = children?.[0].el as Element;

  if (!defaultElement) {
    return
  }

  targetRef.value = defaultElement
  containerRef.value = defaultElement

  attach(targetRef.value)
});

onUnmounted(() => {
  if (targetRef.value) {
    unattach(targetRef.value)
  }
});
</script>

<template>
  <slot />
</template>

<style scoped>
:slotted(*):focus {
  outline: none;
}
</style>