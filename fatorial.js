/*

Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

*/

/*

function obterValor() {
  let valor;
  do {
    const entrada = prompt("Informe um número inteiro positivo:");
    valor = parseInt(entrada);
    if (isNaN(valor) || valor < 0) {
      console.log("Erro: O valor informado não é válido. Por favor, informe um número inteiro positivo.");
    }
  } while (isNaN(valor) || valor < 0);
  return valor;
}
function calcularFatorial(valor) {
    if (valor === 0 || valor === 1) {
        return 1;
    } else {
        return valor * calcularFatorial(valor-1);
    }
}
let fatorial = calcularFatorial(valor);
console.log(`O fatorial de `)

*/

function fatorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * fatorialRecursivo(n - 1);
    }
}
function calcularFatorial() {
    const numeroUsuario = parseInt(prompt("Digite um número inteiro positivo para calcular o fatorial:"));
    if (isNaN(numeroUsuario) || numeroUsuario < 0) {
        console.log("Entrada inválida! Por favor, digite um número inteiro maior ou igual a zero.");
    } else {
        const resultado = fatorialRecursivo(numeroUsuario);
        console.log(`O fatorial de ${numeroUsuario} é: ${resultado}.`);
    }
}
calcularFatorial();