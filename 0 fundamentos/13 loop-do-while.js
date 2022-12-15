/*
    Loop "do... while" ("faça... enquanto")

    do {
        // corpo do loop
    } while(condição);

    Lembrando que uma única execução do corpo do loop é chamada de iteração.

    O loop "do... while" funciona assim como o loop "while", portanto com uma
    única diferença... "do... while" garante pelo menos a primeira iteração, uma vez que 
    o loop "do... while" primeiro executa o corpo do loop e só depois verifica a condição.
*/

let x = 1 // "x" servirá como um "contador"
do {
    console.log(`${x}) 10 x ${x} = ${x * 10}`);
    x++; // Incrementador
} while (x <= 10)

console.log(`\nValor de x = ${x}\n`);

do { // Executará o corpo do loop independentemente se a condição for verdadeira.
    console.log(`${x}) 10 x ${x} = ${x * 10}`);
    x--; // Decrementador
} while (x == 12) // Condição falsa... Se fosse o loop "while" nem executaria.

console.log(`\nValor de x = ${x}\n`);

do {
    console.log(`${x}) 10 x ${x} = ${x * 10}`);
    x--; // Decrementador
} while (x) // Quando chegar a 0 o "while" converte automaticamente para "false".
// Obs.: Valores como "null" e "undefined" também são convertidos para "false".

