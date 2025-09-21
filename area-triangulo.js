/*

Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

*/

/* Possível resolução (mais simples):

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let base = parseFloat(prompt("Informe o valor da base do triângulo:"));
let altura = parseFloat(prompt("Informe o valor da altura do triângulo:"));
let area = areaTriangulo(base, altura);
console.log(`A área do triângulo é ${area}.`);

*/


// Resolução com validação dos dados:

function obterValor(mensagem) {
  let valor;
  do {
    const entrada = prompt(mensagem);
    valor = parseFloat(entrada);
    if (isNaN(valor) || valor <= 0) {
      console.log("Erro: O valor informado não é válido. Por favor, informe um número positivo.");
    }
  } while (isNaN(valor) || valor <= 0);
  return valor;
}
function calcularAreaTriangulo() {
  const base = obterValor("Informe o valor da base do triângulo:");
  const altura = obterValor("Informe o valor da altura do triângulo:");
  const area = (base * altura) / 2;
  return area;
}
const areaCalculada = calcularAreaTriangulo();
console.log(`A área do triângulo é ${areaCalculada}.`);