import { expect, test } from 'vitest';

import { sumarEnteros, sumarArregloNumerico } from '../../../../src/feature/chat/helpers/sum.helper'

test('La suma 24 y 56 debe ser igual a 80', () => {
  // 💠 - Contexto y datos de entrada
  const numero1 = 24;
  const numero2 = 56;
  // 💠 - Ejecutar funcionalidad que se esta probrando
  const resultadoObtenido = sumarEnteros(numero1, numero2);
  // 💠 - Verificar que el resultado coincida con lo esperado

  /*
      .toBe se utiliza para valores primitivos o exactos
  */
  expect(resultadoObtenido).toBe( numero1 + numero2 );
});


test('La sumatoria de una lista vacia simpre es cero', () => {
  // 💠 - Contexto y datos de entrada
  const listaNumerica: number[] = [];

  // 💠 - Ejecutar funcionalidad que se esta probrando
  const resultadoObtenido = sumarArregloNumerico(listaNumerica);

  // 💠 - Verificar que el resultado coincida con lo esperado

  /*
      .toBe se utiliza para valores primitivos o exactos
  */
  expect(resultadoObtenido).toBe( 0 );
});

test('La sumatoria de 10 consecutivos debe ser 100', () => {
  // 💠 - Contexto y datos de entrada
  const listaNumerica = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  // 💠 - Ejecutar funcionalidad que se esta probrando
  const resultadoObtenido = sumarArregloNumerico(listaNumerica);

  // 💠 - Verificar que el resultado coincida con lo esperado
  const sumatoriaDe100 = 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10;

  /*
      .toBe se utiliza para valores primitivos o exactos
  */
  expect(resultadoObtenido).toBe( sumatoriaDe100 );
});
