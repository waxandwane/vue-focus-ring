import { RingScopeListeners } from '../types'
import { LISTENERS } from '../utils'
import { inject, onMounted, onUnmounted, ref, Ref } from 'vue'

type FocusRingOptions = {
  offset?: number
}

export const useFocusRing = (
  target?: Ref<HTMLElement>,
  container?: Ref<HTMLElement>,
  options: FocusRingOptions = {},
) => {
  const targetRef = ref<HTMLElement | null>(null)
  const containerRef = ref<HTMLElement | null>(null)
  const { offset = 0 } = options

  const injectedListeners = inject<RingScopeListeners>(LISTENERS)

  if (!injectedListeners) {
    throw new Error(
      'Focus Rings: make sure FocusRing is in context of a RingScope',
    )
  }

  const { onFocus, onBlur } = injectedListeners

  const updateOnFocus: EventListener = () => {
    onFocus({ container: containerRef.value as Element, offset })
  }

  const attach = (el: Element) => {
    el.addEventListener('focus', updateOnFocus)
    el.addEventListener('click', updateOnFocus)
    el.addEventListener('blur', onBlur)
  }

  const unattach = (el: Element) => {
    el.removeEventListener('focus', updateOnFocus)
    el.removeEventListener('click', updateOnFocus)
    el.removeEventListener('blur', onBlur)
  }

  onMounted(() => {
    if (container) {
      containerRef.value = container.value
    }

    if (target) {
      targetRef.value = target.value
    }

    if (targetRef.value) {
      if (!containerRef.value) {
        containerRef.value = targetRef.value
      }

      attach(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (targetRef.value) {
      unattach(targetRef.value)
    }
  })

  return {
    target: targetRef,
    container: containerRef,
  }
}
