import { computed, ref } from 'vue';

export interface ICounter {
  value: number;
  incValue: number;
  decValue: number;
}

export function useCounter({ incValue, decValue, value }: ICounter) {
  /*
    CONSTANTES ⏬
   */
  const incremento = incValue;
  const decremento = decValue;
  /*
    VARIABLES ⏬
   */
  const counter = ref(value);
  /*
    READ ONLY ARIABLES ⏬
   */
  const sqrCounter = computed(() => {
    return counter.value * counter.value;
  });

  /*
    FUNCIONALIDADES ⏬
   */

  /**
   *  Recibe incDec positivo para incrementar y/o negativo para decrementar
   *
   * @param incDec
   */
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
}
