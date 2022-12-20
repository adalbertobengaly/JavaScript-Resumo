/* 
    Atribuição por Destructuring (Destruturação)

    A atribuição por destructuring é uma sintaxe especial que nos permite
    "desempacotar" arrays ou objetos em variáveis...
*/

// Exemplo com array

let arr = ["John", "Smith"];

let [name, surname] = arr; // Atribuindo usando destructuring

console.log(name); // John
console.log(surname); // Smith
console.log(arr); // ["John", "Smith"]

let [banana, manga] = "Banana e Manga".split(" e "); // o método split retorna um array
console.log(banana); // Banana
console.log(manga); // Manga

// Exemplo com objeto

let pessoa = {
  // object (conjunto de 'chave:valor')
  nome: "Otreblada",
  idade: 25,
  cpf: "123456789-00",
  nacionalidade: "brasileira",
};

let { nome, idade, cpf, nacionalidade } = pessoa; // Atribuindo usando destructuring
console.log(nome); // Otreblada
console.log(idade); // 25
console.log(cpf); // 123456789-00
console.log(nacionalidade); // brasileira


let figuraGeometrica = {
    lados: 3,
    altura: 48,
    base: 22,
}

// {propriedade de origem: variável de destino}
let {lados: l, altura: a, base: b} = figuraGeometrica; // Atribuindo usando destructuring
console.log(l); // 3
console.log(a); // 48
console.log(b); // 22