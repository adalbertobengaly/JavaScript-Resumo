/*
    Loop "for"

    for (início; condição; passo) {
        // ... corpo do loop ...
    }

    Início -> Executa ao entrar no loop
    Codição -> Condição que será verificada a cada iteração
    Corpo do Loop -> Será executado a cada iteração
    Passo -> Executa ao fim de cada iteração

 */

for(let i = 1; i <= 5; i++) {
    console.log(i);
} // 1 2 3 4 5

// Serve para percorrer um array
let frutas = ["Maçã", "Banana", "Pêra", "Abacaxi"]

// A propriedade "frutas.length" retorna o tamanho do array
for (let i = 0; i < frutas.length; i++) { 
    console.log(frutas[i]);
} // Maçã Banana Pêra Abacaxi

/* OBS.:
    A variável "i" é declarada diretamente no loop. Chama-se variável "inline" ("em linha").
    Tais variáveis são visíveis somente dentro do loop.   
*/

// console.log(i); // Error -> "i" is not defined.

/* OBS.:
    Podemos omitir qualquer parte do loop "for".
    No caso abaixo o início foi omitido, pois se utiliza de uma variável já existente.

    Se omitirmos tudo teremos um loop infinito
    for (;;) { // repetirá sem limites }
*/

let x = 10;
for(; x >= 7; x--) {
    console.log(x);
} // 10 9 8 7