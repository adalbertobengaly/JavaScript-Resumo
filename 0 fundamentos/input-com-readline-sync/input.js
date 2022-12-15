/*
    Obs.: Precisa ter o node instalado...
    Para usarmos o readline-sync precisamos instalar seu plugin através do terminal.
       1 - "npm init -y" (sem aspas)
       2 - "npm install readline-sync"  (sem aspas)
       3 - No arquivo "package.json" gerado inserir a "type":"module"
            Ex:     ...
                "description": "",
                "type":"module",
                "main": "input.js",
                    ...

    Instala-se no local onde será utilizado,
    no caso deste local "...\0 fundamentos\input-com-readline-sync"
    
    Depois de instalar, basta importa-lo...
    import "apelido" from 'readline-sync'

    Para rodar deverá ser executado a partir de um terminal com o node.js
    Ex.: node exemplo.js, 
    No caso deste arquivo "node input.js"
*/

import entradaDados from 'readline-sync'; // será usado como "input"
// Sintaxe: entradaDados.question("Mensagem aqui!");

function verificarMaioridade(idade) {
    if(idade >= 18) console.log("É de maior!");
    else console.log("É de menor")
}

let idade = entradaDados.question("Digite a sua idade: "); // Retorna uma string
idade = Number(idade); // E por retornar uma string pode necessitar de conversão

verificarMaioridade(idade);