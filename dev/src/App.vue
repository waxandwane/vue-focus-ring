<script setup>
import { RingScope } from '../../lib'
import Chat from './components/Chat.vue'
</script>

<template>
  <RingScope>
    <Chat />
  </RingScope>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
