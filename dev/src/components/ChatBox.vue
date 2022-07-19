<script setup lang="ts">
import IconBox from './IconBox.vue'
import IconGif from '~icons/icon-park-outline/file-gif'
import IconAdd from '~icons/icon-park-outline/add-one'
import IconSticker from '~icons/icon-park-outline/stickers'
import IconEmoji from '~icons/icon-park-outline/emotion-happy'
import { useFocusRing } from '../../../lib'

const { target, container } = useFocusRing()
</script>

<template>
  <div id="container" ref="container">
    <span id="before">
      <IconBox>
        <IconAdd />
      </IconBox>
    </span>
    <input id="input" ref="target" placeholder="Type a message..." />
    <span id="after">
      <IconBox>
        <IconGif />
      </IconBox>
      <IconBox>
        <IconSticker />
      </IconBox>
      <IconBox>
        <IconEmoji />
      </IconBox>
    </span>
  </div>
</template>

<style lang="scss" scoped>
#container {
  background-color: rgba(0, 0, 0, 0.05);
  width: fit-content;
  border-radius: 50px;
  padding: 0px 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  #input {
    border: none;
    background-color: transparent;
    width: 160px;
    margin: 0 2px;
  }
}
</style>
