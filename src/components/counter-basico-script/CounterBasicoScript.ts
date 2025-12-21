import { computed, defineComponent, ref } from 'vue';

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
        throw `modificarContador: el valor de incremento o decremento debe ser numerico y se recibio: ${incDec}`;
      }

      counter.value = counter.value + incDec;
    };

    return {
      incremento,
      decremento,
      counter,
      sqrCounter,
      modificarContador,
    };
  },
});
