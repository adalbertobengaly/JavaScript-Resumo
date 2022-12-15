/*
    Manipulando Strings - Recursos nativos

    Propriedade: length -> retorna o tamanho da string, também existe no array.
    Métodos: 
        toLowerCase/toUpperCase -> retorna em minúscula/maiúscula (lowercase/uppercase)
        trim -> serve para remover espaços em branco do início e final
        padStart/padEnd -> serve para preencher início/fim (start/end)
        replace -> substitui partes da string
        substr/substring -> extrai uma substring de dentro de uma string
        indexOf -> retorna a posição de uma substring dentro de uma string
        split -> quebra uma string em partes
*/

let frase = "O agora é uma dádiva, por isso se chama presente." 
// espaços contam como caracteres...

console.log(frase.length); // possui 49 caracteres

console.log(frase.toUpperCase()); // retorno de "frase" toda maiúscula
console.log("O AGORA É UMA DÁDIVA".toLowerCase()); // o agora é uma dádiva

let nome = "        Otreblada     "
console.log(nome); // "        Otreblada     "
nome = nome.trim()
console.log(nome) // Otreblada

console.log(nome.padStart(16, ".")); // ficará com tamanho de 16 caracteres
// padStart(tamanho máximo da string, caracter a ser usado no preenchimento)
console.log(nome.padEnd(16, ".")); // funciona que nem ao padStart, só que no final

let favorita = "JavaScript é a minha linguagem favorita! JavaScript é demais!"
console.log(favorita.replace("JavaScript", "Java")); 
// substitui a primeira ocorrência apenas. replace(termo a ser substituido, termo substituto)

console.log(favorita.substr(21, 9)); // linguagem
// substr trata-se de um ​​recurso herdado para compatibilidade do navegador
console.log(favorita.substring(21, 30)); // linguagem
/*
    substr(índice inicial, quantidade de caracteres)
    substring(índice inicial, índice final)
*/
// Obs.: Retorno igual se começar do índice 0;
console.log(favorita.substr(0, 10)); // JavaScript
console.log(favorita.substring(0, 10)); // JavaScript

console.log(favorita.indexOf("minha"), favorita.substr(15, 5)); // posição 15
console.log(favorita.indexOf("Kotlin")); // -1
/*
    indexOf retorna a posição em que começa uma substring.
    Caso a substring procurada não exista, retornará -1.
*/

console.log("Amanhã fará muito frio.".split(" ")); // split(caracteres)
// split() quebra uma string numa coleção de substrings
// [ 'Amanhã', 'fará', 'muito', 'frio.' ]

let frutas = "Maçã, Abacaxi, Pêra, Banana, Uva";
console.log(frutas.split(",")); 
// split() aceita mais de 1 caracter, portanto o mais comum é o uso de un único caracter

