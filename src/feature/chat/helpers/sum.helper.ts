const ZERO_VALUE = Number(0);

const sumarEnteros = (num1: number, num2: number) => {
  if (!num1 || !num2) {
    throw new Error("Los Argumentos no son validos para ejecutar sumarEnteros")
  }

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Los Argumentos para ejecutar sumarEnteros deben ser numericos")
  }

  return num1 + num2;
}


const sumarArregloNumerico = (listaNumerica: number[]): number => {
  if (!listaNumerica) {
    throw new Error("El argumento no es valido")
  }

  if (!listaNumerica.length) return ZERO_VALUE;

  return listaNumerica.reduce((acumulado, actual) => acumulado + actual, ZERO_VALUE);
}

export {
  sumarArregloNumerico,
  sumarEnteros,
}
