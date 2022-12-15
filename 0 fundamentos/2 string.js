let stringQualquer = "Olá";
let outraString = 'Mundo';

console.log(stringQualquer + " " + outraString); // Olá Mundo

let maisUmaString = "estamos em";
let ano = 2022;

let stringLonga = stringQualquer + " " + outraString + ", " + maisUmaString + " " + ano;
console.log(stringLonga); /* conversão por concatenação -> 2022 foi convertido numa string 
ao se concatenar com uma */

console.log(`${stringQualquer} ${outraString}, ${maisUmaString} ${ano}.`); // Template String

let numero = 8
console.log(typeof numero); // number
numero += ""; // O mesmo que -> numero = numero + "" / number convertido em string
console.log(typeof numero); // string 
console.log(typeof String(8)); // string 

numero = "0123456789"; // uma string
console.log(typeof numero); // string

let fraseIronica = "\"Ironia\" consiste em dizer o \"contrário\"!"
console.log(fraseIronica[1]); // I -> Acesso igual de array
console.log(fraseIronica[6]); // a
console.log(fraseIronica);