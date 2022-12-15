/*
    A estrutura condicional "switch".

    switch(x) {
        case 'value1':  // if (x === 'value1')
            ...
        [break]

        case 'value2':  // if (x === 'value2')
            ...
        [break]

        default: // Resposta padrão do switch (Ou senão) caso as outras opções não sejam satisfeitas
            ...
        [break]
}

    Um switch pode substituir vários condicionais "if".
    O tipo analisado em cada case também importa. Trata de uma igualdade estrita...
    Ex.:
    case 'value': 
        é igual a...
    if (x === 'value') // ("x é estritamente igual a 'value?'")

*/

let opcao = 3;

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada")
    break;

    case 2:
        console.log("Opção 2 selecionada")
    break;

    case 3:
        console.log("Opção 3 selecionada")
    break;

    default:
        console.log("Opção desconhecida!")

}

/*
    O "switch" começa a comparar a partir da "case 3" e por isso se faz necessário o "break".
     Se não houver "break", a execução continua com a próxima "case" sem nenhuma verificação.
    "break" no "default" é opcional uma vez que se trata da última opção.

    Sabendo disso podemos fazer agrupamentos...
*/

// Agrupando "cases" ...
opcao = 2;
switch (opcao) {
    case 0:
    case 1:
        console.log("Opções 1 ou 0")
    break;

    case 3: case 4:
        console.log("Opções 3 ou 4")
    break

    case 1 + 1: // É permitido expressões arbitrárias
        console.log("Opção 2")
    break

    default:
        console.log(`${opcao}) Opção desconhecida!`)
}
