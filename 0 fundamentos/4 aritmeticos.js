
const arrayNumbers = [ 3, 5, 1, 15 ];
const [a, b, c, d] = arrayNumbers; // Atribuição por Destructuring
// Mesma coisa que fazer...
// const a = arrayNumbers[0]
// const b = arrayNumbers[1]
// const c = arrayNumbers[2]
// const d = arrayNumbers[3]

const soma = a + b + c + d;
const subtracao = b - a;
const multiplicacao = b * d;
const divisao = d / a;
const modulo = a % 2; // (resto)
const potencia = a ** 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo, potencia);