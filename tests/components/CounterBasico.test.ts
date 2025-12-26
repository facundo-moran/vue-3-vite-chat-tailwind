import { describe, test } from 'vitest';

import CounterBasico from '../../src/components/CounterBasico.vue';

import { mount } from '@vue/test-utils';

/*

  ⏬ Agrupando pruebas con describe

*/

describe('<CounterBasico />', () => {
  test('debe ser igual al snapshot', () => {
    // 💠 - Contexto y datos de entrada
    const wrapper = mount(CounterBasico);
    // 💠 - Ejecutar funcionalidad que se esta probrando
    // 💠 - Verificar que el resultado coincida con lo esperado
  });
});
