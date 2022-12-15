const a = 7;
let b = 3;

console.log("Atribuição");
b += a; // b = b + a
console.log(b); // 10

b -= 4 // b = b - 4
console.log(b); // 6

b *= 2; // b = b * 2
console.log(b); // 12

b /= 2; // b = b / 2
console.log(b); // 6

b %= 2; // b = b % 2
console.log(b); // 0

b = 2;
b **= 2; // b = b ** 2
console.log(b); // 4

b = b ** (1/2); // Raíz quadrada
console.log(2); // 2

console.log("\nUnários")
// Unários
let c = 5;
console.log(++c); // Increment // 6 -> Igual a fazer c = c + 1
console.log(--c); // Decrement // 5 -> Igual a fazer c = c - 1

let d = 10;
console.log(d++); // 10 -> Aqui ele soma somente após mostrar na tela, inverso do console.log() anterior
console.log(d); // 11