import { App, inject } from 'vue'
import * as components from './components'
import { RingScopeListeners } from './types';
import { LISTENERS } from './utils';



export default function install(vue: App) {
  vue.directive('ring', {
    mounted(el, binding) {
      binding.value?.(el)
      const injectedListeners = inject<RingScopeListeners>(LISTENERS);
      console.log('ey', injectedListeners)
    }
  })

  Object.entries(components).forEach(([name, component]) => {
    vue.component(name, component)
  })
}
