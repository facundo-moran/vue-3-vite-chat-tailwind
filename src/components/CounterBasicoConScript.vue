<!--
   Dentro de lo que es el template vue extrae los valores reactivos
    por lo tanto no es necesario utilizar el .value para acceder a las
    variables y constantes
  -->
<template>
  <div class="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-xl border border-slate-700 text-center">
    <h1 class="text-4xl font-extrabold text-white mb-4">
      Counter
      <span class="text-indigo-400">{{ counter }}</span>
    </h1>

    <p class="text-slate-300 mb-6">
      Counter al cuadrado:
      <span
        class="ml-2 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400"
      >
        {{ sqrCounter }}
      </span>
    </p>

    <div class="flex justify-center gap-4">
      <button
        @click="modificarContador(incremento)"
        class="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white
                 hover:bg-indigo-500 active:scale-95 transition"
      >
        +{{ incremento }}
      </button>

      <button
        @click="modificarContador(decremento)"
        class="rounded-xl bg-rose-600 px-6 py-3 text-lg font-semibold text-white
                 hover:bg-rose-500 active:scale-95 transition"
      >
        {{ decremento }}
      </button>
    </div>
  </div>
</template>



<!-- <script lang="ts">
import { computed, defineComponent, ref } from "vue";

// Un componente tradicional en Vue 3 exporta por defecto el defineComponent
// esto no lo limita a nada, puede tener sus propias props y su script setup definido

export default defineComponent({
  props: {
    value: { type: Number, required: true },
    incValue: { type: Number, required: true },
    decValue: { type: Number, required: true },
  },
  setup(props) {
    // Variables y constantes

    // Constante
    const incremento = props.incValue;
    const decremento = props.decValue;
    // Variable reactiva
    const counter = ref(props.value);
    // Variable reactiva - pero solo de lectura
    const sqrCounter = computed(() => {
      return counter.value * counter.value;
    });

    const modificarContador = (incDec: number) => {
      if (isNaN(incDec)) {
        throw `modificarContador: el valor de incremento o decremento debe ser numerico y se recibio: ${incDec}`
      }

      counter.value = counter.value + (incDec);
    }

    return {
      incremento,
      decremento,
      counter,
      sqrCounter,
      modificarContador
    }
  }
})
</script> -->

<script setup lang="ts">
import { useCounter, type ICounter } from '@/composables/useCounter';

const { value, incValue, decValue } = defineProps<ICounter>();

const { counter, decremento, incremento, modificarContador, sqrCounter, } = useCounter({
  value,
  incValue,
  decValue,
})

</script>

<style scoped>
h1 {
  color: chartreuse;
}
</style>
