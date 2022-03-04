<script setup lang="ts">
import ChatBox from './ChatBox.vue';
import Message from './Message.vue';

const messages = [{
  author: 'Luc',
  text: 'Hi, how are you?'
}, {
  author: 'Jeanne',
  text: 'Hello Luc, I\'m fine. How about you?'
}]
</script>

<template>
  <div id="container">
    <div id="messages">
      <Message v-for="message in messages" :author="message.author" :text="message.text" />
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
  }
}
</style>