import { App } from 'vue'
import * as components from './components'

export default function install(vue: App) {
  Object.entries(components).forEach(([name, component]) => {
    vue.component(name, component)
  })
}
