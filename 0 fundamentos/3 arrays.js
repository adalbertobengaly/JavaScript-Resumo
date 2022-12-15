/* Array trata-se de um arranjo ou coleção de dados */
const primeirosFibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] // array -> arranjo

console.log(typeof primeirosFibonacci) // object

console.log(primeirosFibonacci) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// Para acessar elementos utilizamos do indíce que começa do 0 (zero).
console.log(primeirosFibonacci[5]) // 8
console.log(primeirosFibonacci[0]) // 1

console.log(primeirosFibonacci.length) // 11 
// a propriedade "length" retornará o tamanho do array

const nomes = ["Adalberto", "Abel", "Abídon"];
nomes[2] = "Abadon"; // Trocando o valor "Abídon" por "Abadon"
console.log(nomes)