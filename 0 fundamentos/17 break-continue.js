/*
    "break" serve para quebrar o ciclo. Para o loop.
    "continue" serve para "pular" uma iteração indo para próxima. Não para o loop.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, "9", 10, 11, 12, 13];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero % 2 == 0) {
        console.log(`${numero} é par e não entra na soma`); 
        continue; // Pula cada iteração de números pares, somando apenas os ímpares.
    }

    if (typeof numero == "string") {
        console.log(`${numero} é na verdade uma string, pare!`); 
        break; // Terminará o loop se achar uma "string"
    }

    console.log(`${numero} vai entrar na soma`)
    soma += numero;
}

console.log(`\nSoma: ${soma}\n`);

// "break" pode ser usado em conjunto com um "loop infinito".
let string_numeros = `${numeros[0]}`
for (let i = 1; ; i++) {
    let numero = numeros[i];
    if (numero > 11) { 
        console.log(string_numeros);
        break; // "break" encerrará quando o número for maior que 11.
    }

    string_numeros += ` ${numero}` 
}