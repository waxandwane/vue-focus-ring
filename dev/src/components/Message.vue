<script setup lang="ts">
import { computed, ref } from 'vue';
import { FocusRing } from '../../../lib';

type Message = {
  author: string
  text: string
}

const props = defineProps<Message>()

const { author, text } = props

const initial = computed(() => author.charAt(0).toUpperCase())

const avatarRef = ref()
const authorRef = ref()
</script>

<template>
  <FocusRing :target="authorRef">
    <a ref="authorRef" href="/" class="author">{{ author }}</a>
  </FocusRing>
  <div class="container">
    <FocusRing :target="avatarRef">
      <button ref="avatarRef" class="avatar">{{ initial }}</button>
    </FocusRing>
    <div>
      <p class="bubble">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.author {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  .avatar {
    background-color: burlywood;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    border: none;
  }

  .bubble {
    background-color: white;
    padding: 8px 12px;
    border-radius: 24px 24px 0 24px;
    word-wrap: normal;
    max-width: 200px;
    font-size: 0.9rem;
    text-align: justify;
  }
}
</style>