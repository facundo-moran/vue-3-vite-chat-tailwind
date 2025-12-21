<!-- El archivo App.vue es un ejemplo de SFC SINGLE FILE COMPONENT -->

<script setup lang="ts">
import { useCounter, type ICounter } from '@/composables/useCounter';

const { value, incValue, decValue } = defineProps<ICounter>();

const { counter, decremento, incremento, modificarContador, sqrCounter, } = useCounter({
  value,
  incValue,
  decValue,
})

</script>

<!--
   Dentro de lo que es el template vue extrae los valores reactivos
    por lo tanto no es necesario utilizar el .value para acceder a las
    variables y constantes
  -->
<!-- Estilos Bootstrap 5 -->
<!-- <template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card shadow text-center">
          <div class="card-body">

            <h1 class="card-title display-5 fw-bold mb-3">
              Counter: <span class="text-primary">{{ counter }}</span>
            </h1>

            <h5 class="mb-4">
              Counter al cuadrado:
              <span class="badge bg-success fs-6">
                {{ sqrCounter }}
              </span>
            </h5>

            <div class="d-flex justify-content-center gap-3">
              <button
                class="btn btn-success btn-lg"
                @click="modificarContador(incremento)"
              >
                +{{ incremento }}
              </button>

              <button
                class="btn btn-danger btn-lg"
                @click="modificarContador(decremento)"
              >
                {{ decremento }}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
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



<style scoped>
h1 {
  color: chartreuse;
}
</style>
