/*
    Para criarmos uma função podemos usar uma declaração de função
    Funções são ações. Por isso geralmente contém verbo no nome.

    function nomeDaFuncao(param1, param2, ... paramN) {
        // código
        // corpo da função
    }
*/

// funções declaradas podem ser acessadas antes ou depois de sua declaração
// O Javascript ao executar primeiro procura as funções
gerarMedia(7, 8);  // 7.5 no console

function gerarMedia (a, b) {
    console.log((a + b) / 2);
}

gerarMedia(8, 9); // 8.5 no console

function mostrarHelloWorld() { // parâmetros são opcionais
    console.log("Hello world!");
}

mostrarHelloWorld(); // Hello world no console

/*
    Variáveis declaradas dentro do escopo (corpo) de uma função 
    só são visíveis dentro da própria função.

    Váriaveis externas a função podem ser acessadas, 
    portanto a variável externa só é usada se não houver uma local de mesmo nome.
*/

function somar(a, b) {
    return a + b; // funções podem retornar valores com "return"
}

let resultadoSoma = somar(5, 5);
console.log(resultadoSoma); // 10

/*
    Podem haver funções com retorno e funções sem retorno.
    "return" pode estar em qualquer lugar da função. Quando a execução o atinge,
    a função para e o valor é retornado. 
    Podem haver multiplos "return" numa função.
*/

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarMaioridade(24)); // true

/*
    "return" pode ser usado com nenhum valor. 
    Isso fará a função ser encerrada imediatamente.
    Podemos chamar funções dentro de outra função.
*/

function exibirFilme(idade) { // Exibe filme se for maior de 18
    if (!verificarMaioridade(idade)) return;
    console.log("Exibindo o filme...");
}

exibirFilme(30); // Exibindo o filme...

exibirFilme(17); // Não acontece nada devido ao "return"
/*
    a função verificarMaioridade retorna "false" pode ser menor de idade (17 anos), 
    com a negação se torna "true" adentrando no "if" e chegando ao "return"
*/

// Podemos definir um valor padrão para uma parâmetro.
function mostrarSaudacao(saudacao, nome = "Anônimo") {
    console.log(`${saudacao} ${nome}`);
}

mostrarSaudacao(); // Pela omissão, será considerado como "undefined"
mostrarSaudacao(undefined, undefined); // O valor padrão assume o lugar de "undefined"
mostrarSaudacao("Oi!", "Adalberto");
