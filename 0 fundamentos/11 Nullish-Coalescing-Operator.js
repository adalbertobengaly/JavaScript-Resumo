/*
    Nullish coalescing operator '??'

    O operador de coalescência nula é escrito com dois pontos de interrogação ??

    Simplificando, podemos dizer que um valor é “definido” quando 
    não é nem "null" e nem "undefined". Tratamos "null" e "undefined" similarmente.

    O resultado de (a ?? b) é:
    * Se a está definido, então retorna a.
    * Se a não está definido, então retorna b.
    
    ?? -> retorna o primeiro argumento caso ele não seja null nem undefined. 
            Senão, retorna o segundo elemento.

    Obs.: 
        result = a ?? b; 
            é igual a...
        result = (a !== null && a !== undefined) ? a : b;

*/

let user; // "undefined" é o valor padrão de uma variável não inicializada.
console.log('1)', user ?? 'Anônimo'); // Anônimo
user = null; // "null" representa "nada", "vazio" ou "valor desconhecido" em JS.
console.log('2)', user ?? 'Anônimo'); // Anônimo
user = 'Adalberto';
console.log('3)', user ?? 'Anônimo'); // Adalberto