<script setup lang="ts">
import { ref } from 'vue';
import ChatBox from './ChatBox.vue';
import Message from './Message.vue';
import { RingScope } from '../../../lib';

const messages = [{
  author: 'Luc',
  text: 'Hi, how are you?'
}, {
  author: 'Jeanne',
  text: 'Hello Luc, I\'m fine. How about you?'
}, {
  author: 'Luc',
  text: 'I\'m great! I\'m just back from holidays!'
}, {
  author: 'Iris',
  text: 'Where did you go?'
}]

const containerRef = ref()
</script>

<template>
  <div id="container">
    <div ref="containerRef" id="messages">
      <RingScope :container="containerRef">
        <Message v-for="message in messages" :author="message.author" :text="message.text" />
      </RingScope>
    </div>
    <ChatBox />
  </div>
</template>

<style lang="scss" scoped>
#container {
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 4px;
  background-color: rgb(224, 239, 255);

  #messages {
    margin-bottom: 8px;
    max-height: 240px;
    overflow-y: scroll;
    padding: 4px;

    position: relative;
  }
}
</style>