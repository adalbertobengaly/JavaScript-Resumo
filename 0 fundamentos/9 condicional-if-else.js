/*
    A instrução condicional "if" ("se") pode conter um bloco “else” ("senao") opcional. 
    O bloco de "else" executará somente quando a condição em "if" for falsa.
*/

let ano = 2024;

if (ano === 2022) {
    console.log("Estamos em 2022!");
} else {
    console.log(`O ano é ${ano}!`);
}

/* OBS.:
    if (0) { // 0 é falso
        ...
    }

    if (1) { // 1 é verdadeiro
        ...
    }
 */

// if-else ENCADEADO...

ano = 2018

if (ano < 2015) {
    console.log( 'Muito cedo...' );
  } else if (ano > 2015) {
    console.log( 'Muito tarde' );
  } else {
    console.log( 'Exato!' );
  }