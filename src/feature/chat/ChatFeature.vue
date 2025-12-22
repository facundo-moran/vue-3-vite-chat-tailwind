<script setup lang="ts">
import MessageContainer from './ui/MessageContainer.vue';
import MessageInBox from './ui/MessageInBox.vue';

import { useChat } from './composables/useChat';

const {
  listaDeMensajes,
  onInboxMessageFromMe,
} = useChat();

</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto rounded">
    <div class="bg-vuejs p-4 text-white flex justify-between items-center rounded">
      <span>Vue 3 Vite - Chat - Intenta con un mensaje con signo ?? al final 🧉</span>
    </div>

    <MessageContainer :mensajes="listaDeMensajes" />
    <MessageInBox @emit-inbox-message="onInboxMessageFromMe" />
  </div>
</template>
