# RingScope

In order for the FocusRing component to work, it has to be in scope of a _RingScope_ component provider.

```html
<RingScope>
  <FocusRing>
    <button @click="action">Click on me!</button>
  </FocusRing>
</RingScope>
```

# FocusRing

  By default, the element slotted inside FocusRing will be surrounded in a focus indicator when clicked or otherwise focused.

  ```html
  <FocusRing>
    <button @click="action">Click on me!</button>
  </FocusRing>
  ```

  One caveat: you HAVE to pass a ref to the target element you want stylized when the component inside FocusRing has dynamic content: either it contains {{ }} or it uses a slot (due to the internal API of Vue, a component can't know the contents of its slot). Use the _target_ prop on FocusRing for this.

  ```html
  <FocusRing :ref="buttonRef" >
    <button ref="buttonRef" @click="action">{{ customText }}</button>
  </FocusRing>


  <FocusRing :ref="magicRef" >
    <MagicButton ref="magicRef" @click="action">Click on me!</MagicButton>
  </FocusRing>
  ```

  You may also want to use the combination of _target_ and _container_ props when the focusable element is not the same as the element you want highlighted. Again, simply pass the refs to the respective elements as props.

   ```html
  <FocusRing :target="targetRef" :container="containerRef" >
    <div ref="containerRef" >
      <Icon>
      <input ref="targetRef" v-model="text" />
      <Icon>
    </div>
  </FocusRing>
  ```