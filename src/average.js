/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (med) => {
  let soma = 0;
  let media = 0;

  for (let index = 0; index < med.length; index += 1) {
    if (typeof med[index] !== 'number') {
      return undefined;
    }
  }
  if (med === []) {
    return undefined;
  } 
  for (let index2 = 0; index2 < med.length; index2 += 1) {
    soma += med[index2];
  }
  media = soma / med.length;
  return media;
};
module.exports = average;