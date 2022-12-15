var a = 3;
let b = 4;

var a = 30; // var permite redeclarar
// let b = 40; // Error -> let não permite redeclarar
b = 40;

console.log(a, b);

a = 300;
b = 400;
console.log(a, b);

const c = 5; // Constante
// c = 50 -> Error // Constante não pode ser reatribuída
console.log(c);