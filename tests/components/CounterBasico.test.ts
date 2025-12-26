import { describe, expect, test } from 'vitest';

import CounterBasico from '@/components/CounterBasico.vue';

import { mount } from '@vue/test-utils';

/*

  ⏬ Agrupando pruebas con describe

*/

describe('<CounterBasico />', () => {
  test('debe ser igual al snapshot', () => {
    // 💠 - Contexto y datos de entrada
    // 💠 - Ejecutar funcionalidad que se esta probrando
    // console.log({
    //   html: wrapper.html()
    // });

    // 💠 - Verificar que el resultado coincida con lo esperado
    const wrapper = mount(CounterBasico, {
      props: {
        value: 1,
        decValue: -2,
        incValue: 2,
      },
    });

    /*
      Para evaluar renderizado de componentes o templates
      podemos utilizar la funcion toMatchSnapshot
    */
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe renderizar el titulo del contador correctamente', () => {
    // 💠 - Contexto y datos de entrada
    const valorInicialContador = 5;
    const headingInicialContador = `Counter ${valorInicialContador}`;
    const txtValorInicialCuadrado = `${valorInicialContador * valorInicialContador}`;
    // 💠 - Ejecutar funcionalidad que se esta probrando
    const wrapper = mount(CounterBasico, {
      props: {
        value: valorInicialContador,
        decValue: -2,
        incValue: 2,
      },
    });

    // 💠 - Verificar que el resultado coincida con lo esperado

    /*
      Una prueba puede tener varios expects como sean relacionados a la misma prueba
     */ expect(wrapper.find('h2').text()).toBe(headingInicialContador);
    expect(wrapper.find('[data-testid="cuadrado-contador"]').text()).toBe(txtValorInicialCuadrado);
  });
});
