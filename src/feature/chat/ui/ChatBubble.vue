<template>
  <!-- Mensaje propio se muestra asi, por lo tanto con ayuda de v-if verificamos si es propio -->
  <div
    v-if="fromMe"
    class="flex justify-end"
  >
    <div class="bg-slate-400 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Mensaje recibido o no propio. Renderizamos con v-else automatico -->
  <div
    v-else
    class="flex"
  >
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img
        :src="imageSrc"
        :alt="'YesOrNoResponse'"
        class="size-52 object-cover rounded-md"
        v-if="imageSrc"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IChatMessage } from '../interface/chat-message.interface';

/**
 *  Definimos las propiedades del componente de los mensajes burbuja
 */
defineProps<IChatMessage>();
</script>
