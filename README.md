# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

FocusRing

  By default, the element slotted inside FocusRing will be surrounded in a focus indicator when clicked or otherwise focused.

  You HAVE to pass a ref to the target element you want stylized when the component inside FocusRing has dynamic content: either it contains {{ }} or it uses a slot (due to the internal API of Vue, a component can't know the contents of its slot). Use the "target" prop on FocusRing for this.

  You may also want to use the combination of "target" and "container" props when the focusable element is not the same as the element you want highlighted. Again, simply pass the refs to the respective elements as props.