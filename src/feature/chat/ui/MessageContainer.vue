<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';

import { type IChatMessage } from '../interface/chat-message.interface';

/*
  DEFINICION DE PROPS ⏬
*/
defineProps<{
  mensajes: IChatMessage[]
}>();

</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Comunicacion de los mensajes - forma corta en vue 3 -->
      <ChatBubble
        v-for="(msj) in mensajes"
        :key="msj.id"
        v-bind="msj"
      />
      <!-- Comunicacion de los mensajes - forma larga en vue 3 -->
      <!-- <ChatBubble
        v-for="(msj) in mensajes"
        :key="msj.id"
        :id="msj.id"
        :from-me="msj.fromMe"
        :message="msj.message"
        :image-src="msj.imageSrc"
      /> -->
    </div>
  </div>
</template>
