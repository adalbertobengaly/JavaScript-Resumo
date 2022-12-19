/*
    Math.random() => retorna um número aleatória entre 0 e 1.

    Podemos utilizar Math.random() com Math.floor() para retornar 
        inteiros aleatórios.
*/

// Retornar entre 0 e 1.
console.log(Math.random()); // retorna números menores que 1. 

// Retornar um inteiro entre 0 a 9.
console.log(Math.floor(Math.random() * 10));

// Retornar um inteiro entre 1 a 10.
console.log(Math.floor(Math.random() * 10) + 1);

// Retornar um inteiro entre 1 a 100.
console.log(Math.floor(Math.random() * 100) + 1);

// Podemos criar uma função que retorna um número aleatório entre dois valores.
// min <= x < max
function aleatorioEmIntervaloAbertoDireita(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Esta retorna um número aleatório entre dois valores e com ambos incluídos.
// min <= x <= max
function aleatorioEmIntervaloFechado(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}