<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';

import { type IChatMessage } from '../interface/chat-message.interface';
import { ref, watch } from 'vue';

/*
  ⏬ DEFINICION DE PROPS
*/
const props = defineProps<{
  mensajes: IChatMessage[]
}>();

/*
  ⏬ VARIABLES
*/
const contenedorMensajesRef = ref<HTMLDivElement | null>(null);

/*
  ⏬ LOGICA
*/

// Observamos cambios en la lista de mensajes para realizar scrollToBottom en el contenedor
watch(props.mensajes, () => {

  setTimeout(() => {
    contenedorMensajesRef.value?.scrollTo({
      top: contenedorMensajesRef.value.scrollHeight,
      behavior: 'smooth'
    });
  }, 777);

});
</script>

<template>
  <div
    ref="contenedorMensajesRef"
    class="flex-1 overflow-y-auto p-4"
  >
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
