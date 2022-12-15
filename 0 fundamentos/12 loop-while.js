/*
    Loop "while" ("enquanto")

    while(condição) { 
        // código 
        // chama-se "corpo do loop"
    }

    Enquanto a condição for verdadeira, 
    o código do corpo do loop será executado.

    Uma única execução do corpo do loop é chamada de iteração.
    A condição é conferida a cada iteração e quando for falsa o loop termina.
*/

let x = 1; // "x" servirá como um "contador"

while (x <= 10) {
    console.log(`10 x ${x} = ${x * 10}`)
    x++ // Incrementador
}

/* OBS.:
    Se "x++" não incrementasse o valor de "x", o loop se repetiria para sempre 
    uma vez que a condição sempre seria verdadeira.

    No caso do loop "while" se faz necessário criar um "contador" para que a 
    condição não seja sempre verdadeira evitando assim um loop infinito.
*/