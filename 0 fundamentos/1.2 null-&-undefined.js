/*      Valor "undefined" - Tipo próprio
    O significado de "undefined" é "valor não atribuído".
    Caso uma variável é declarada e não for atribuida, seu valor será "undefined".

    Não recomenda-se atribuir "undefined" a uma variável. Normalmente usa-se "null"
    para atribuir um valor "vazio" ou "desconhecido", pois "undefined" é reservado como 
    um valor inicial padrão para variáveis não atribuídas.
 */

let age
console.log(age); // undefined
console.log(typeof age); // undefined
console.log(typeof undefined) // undefined

/*     Valor "null" - Tipo próprio
    Em Javascript "null" não é uma "referência a um objeto inexistente" ou
    um "ponteiro nulo" como em algumas linguagens. Significa apenas 
    um valor especial que representa "nada", "vazio" ou 
    "valor desconhecido". 
    O código abaixo afirma que a variável "age" possui valor desconhecido.
*/

age = null;
console.log(age); // null
console.log(typeof age); // object
