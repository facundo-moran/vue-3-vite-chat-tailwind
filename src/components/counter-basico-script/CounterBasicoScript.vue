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



<!-- Aqui esta todo el codigo del componente separado en su propio archivo -->
<!-- <script lang="ts" src="./CounterBasicoScript.ts"></script> -->

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
  color: coral;
}
</style>
