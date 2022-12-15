let numero = 1; // number (pode ser real ou inteiro)
let cadeiaCaracters = "Natália"; // string (cadeia ou conjunto de caracteres)
let logico = true; // boolean (verdadeiro ou falso / true or false)

let pessoa = { // object (conjunto de 'chave:valor')
    nome: "Otreblada",
    idade: 25,
    cpf: "123456789-00",
    nacionalidade: "brasileira",
};

// Notação ponto (".") do objeto para acessar valor ("objeto.chave")
console.log(pessoa.nome); // Otreblada
console.log(pessoa.cpf); // 123456789-00
console.log(pessoa["nacionalidade"]); // brasileira

/* OBS.: 
  Note que podemos usar tanto a notação de ponto (obj.property)
  quanto a notação com colchetes (obj["property"]) para ter acesso 
  ao valor da propriedade do objeto */

console.log("\n-------------------\n"); // "\n" para quebra de linha

// "typeof" (retorna o tipo)
console.log(typeof numero); // number
console.log(typeof cadeiaCaracters); // string
console.log(typeof logico); // boolean
console.log(typeof pessoa); // object
console.log(typeof (typeof 10)); // string. Repare que o retorno de typeof é do tipo "string"