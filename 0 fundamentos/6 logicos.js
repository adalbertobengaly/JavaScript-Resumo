/*
    * Lógicos -> Possuem como resposta boolean (true/false)
    && -> E // Para no primeiro "false"
    || -> OU // Para no primeiro "true"
    == -> Igual
    != -> Diferente
    ! -> Negação
    Obs.: Dupla negação (!!) converte para boolean
*/

console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true 
console.log(!(true && true)); // false

const verdadeiro = true;
console.log("\n(Negação) !true -> " + !true); // false 
console.log("(Negação) !false -> " + !false); // true

console.log();
let a = 1;
let b = 1;
console.log(a == b); // true

b = 2;
console.log(a == b); // false
console.log(a != b); // true

/**
  Como dito no início deste arquivo...
    && -> E // Para no primeiro "false"
    || -> OU // Para no primeiro "true"

    Chama-se Curto-Circuito...
 */

console.log("\nExemplos de Curto-Circuito...");

console.log("1)", false || "Verdadeiro"); // Verdadeiro
console.log("2)", true || "Verdadeiro"); // true
console.log("3)", "Tá" || "tudo certo..."); // Tá
console.log("4)", true && "tudo certo..."); // tudo certo...
console.log("5)", false && "tudo certo..."); // false
console.log("6)", "Tá" && "tudo certo..."); // tudo certo...
console.log("7)", true && false); // false
