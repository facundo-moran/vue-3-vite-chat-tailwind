<template>
  <div class="bg-white p-4 flex items-center rounded">
    <!--
      RECORDAR QUE PARA CONECTAR UN EVENTO DEL TECLADO SE USA
      @ Y PARA UNA VARIABLE USAMOS V-MODEL
    -->
    <input
      type="text"
      placeholder="Escribe tu mensaje..."
      class="flex-1 border rounded-full px-4 py-2 focus:outline-none text-vuejs"
      v-model="messageInbox"
      @keyup.enter="emitInboxMessage"
    />
    <button
      @click="emitInboxMessage"
      class="bg-vuejs text-white rounded-full p-2 ml-2 hover:bg-green-400 hover:cursor-pointer focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="#fff"
        viewBox="0 0 24 24"
      >
        <path
          id="SVGRepo_iconCarrier"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 0 0 0-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 0 0-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 0 1 0 .385c-.02.144-.066.285-.16.566"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
/*
  ⏬` DEFINICION DE EMITS
*/
const evtEmitter = defineEmits<{
  emitInboxMessage: [message: string]
}>()

/*
  ⏬` VARIABLES
*/
const messageInbox = ref('');

/*
  ⏬` FUNCIONALIDADES
*/
const emitInboxMessage = () => {
  // reset message inbox
  if (!messageInbox.value) return;

  // emit in console when key up is "enter"
  // console.log({ messageInbox: messageInbox.value });

  // emit as event
  evtEmitter("emitInboxMessage", messageInbox.value);

  // reset message inbox
  messageInbox.value = '';
}


</script>
