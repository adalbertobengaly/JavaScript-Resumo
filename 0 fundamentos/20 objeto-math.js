/*
    Math trata-se de um objeto estático que possui propriedades e métodos para constantes 
    e funções matemáticas. Por exemplo, Math.PI que retorna o valor de PI.

    A sintaxe é Math.property
*/

console.log(Math.PI); // 3.141592653589793

// Math.abs(x) => retorna o valor absoluto de x.
console.log(Math.abs(-10)); // 10 

// Math.round(x) => retorna o inteiro mais próximo de x.
console.log(Math.round(5.7), Math.round(10.5), Math.round(2.4)); // 6 11 2
/*
    Obs.: Repare que Math.round() a partir de 5 décimos já considera o 
    próximo inteiro como mais próximo. Ex.: 6.5 para 7.
*/

// Math.ceil(x) => retorna o arredondamento de x para cima.
console.log(Math.ceil(7.1)); // 8

// Math.floor(x) => retorna o arredondamento x para baixo.
console.log(Math.floor(7.9)); // 7

// Math.trunc(x) => retorna somente a parte inteira de x.
console.log(Math.trunc(21.345)); // 24
console.log(Math.trunc(50.678)); // 50

// Math.min(args) e Math.max(args) => retornam o menor e maior valor de múltiplos argumentos.
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 1
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10

// Math.pow(x, y) => retorna o valor de x elevado a y.
console.log(Math.pow(2, 3)) // 8

// Math.sqrt(x) => retorna a raíz quadrada de x.
console.log(Math.sqrt(64)) // 8

/*  Obs.:
    E se quiser calcular a raíz de um número com qualquer índice?
    Podemos usar Math.pow(x, y) também. 
    Basta utilizarmos de uma propriedade matemática... 
    Só invertermos o índice e teremos a radiciação.
    Se quisermos a raíz quadrada, basta elevar para 1/2. 
    Se quisermos a raíz cúbica, basta elevar para 1/3. 
*/

// Raíz quadrada de 64.
console.log(Math.pow(64, 1/2)) // 8

// Raíz cúbica de 8.
console.log(Math.pow(8, 1/3)) // 2

/*
    Existem diversas funções e constantes além dessas no objeto Math, 
    tais como constante de Euler, funções seno, cosseno e entre diversas outras...
*/