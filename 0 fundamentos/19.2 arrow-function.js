/*
    Arrow Function ("Função de seta")

    let func = (arg1, arg2, ..., argN) => expression; // "retorno" ímplicito

    let func = (arg1, arg2, ..., argN) => {
        return expression; // se usarmos chaves precisamos de um "retorno" explícito
    };
*/

let somar = (a, b) => a + b;
console.log(somar(5, 2)); // 7 

let quadrado = a => a * a; 
// se tivermos apenas um argumento/parâmetro, os "parênteses" () podem ser omitidos 
console.log(quadrado(2)); // 4

let helloWorld = () => console.log("Hello World!");
// caso não haja argumento/parâmetro, os "parênteses" () são obrigatórios

helloWorld(); // Hello World!

let nota = 8;
// Arrow Function pode ser usada assim como uma expressão de função.
let estaAprovado = (nota >= 7) ? 
    () => console.log("Aprovado!") :
    () => console.log("Reprovado!");

estaAprovado() // Aprovado!

// Obs.: Podemos usa-las como "callbacks".