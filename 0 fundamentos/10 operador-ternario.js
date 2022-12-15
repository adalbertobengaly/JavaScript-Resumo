/*
    Operador "Condicional" ou "Ternário"
    
    Sintaxe: let result = condition ? value1 : value2;

    Se a condição avaliada for verdadeira "value1" é retornado, 
    caso contrário, "value2".
*/

let nota = 6.9;

let resultado = (nota >= 7) ? 'Aprovado' : 'Reprovado';

console.log(resultado);

/*  OBS.:
    Os parênteses ao redor de "nota >= 7"  pode ser omitido. O operador
    de ponto de interrogação tem precedência baixa, portando, é executado
    após a comparação ">=".
     
    O uso dos parênteses tem apenas a finalidade de tornar 
    o código mais legível e por isso seu uso é recomendado.
*/