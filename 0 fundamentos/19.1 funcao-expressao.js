/*
    Existe uma sintaxe para criar uma função que, chamada
    "Expressão de Função" (Function Expression), nos permite criar
    uma nova função no meio de qualquer expressão.
*/

let cumprimentar = function() {
    console.log("Hello!");
}; // A sintaxe de uma declaração não possui um ";", já em expressões o ";" é recomendado.

/*
    Como a criação da função ocorre no contexto da expressão de atribuição 
    (ao lado direito de "="), esta é uma Function Expression .

    Observe que não há nome após a function palavra-chave. Omitir um nome é permitido 
    para expressões de função, seria uma função anônima.

    O ponto e vírgula estaria lá para uma atribuição mais simples, como let cumprimentar = "Hello";
    e o mesmo vale para a atribuição de uma função.
*/

// Função é um valor
function falar() { // Expressão de função
    console.log("Falando...");
}

let func = falar; // Copiando função falar para uma variável
let func2 = cumprimentar;

falar(); // Ao chamar uma função o uso dos () "parênteses" é obrigatório
func();
func2();

/*
    Funções "Callback" (Retorno de chamada)
*/

function possuiMaioridade(idade, sim, nao) {
    if(idade >= 18) sim();
    else nao();
}  // Dependendo do valor boolean, será chamado sim() ou nao().

// sim -> função a ser chamada caso idade >= 18 seja "true"
// nao -> função a ser chamada caso idade >= 18 seja "false"

function deMaior() { console.log("É maior de idade!")}
function deMenor() { console.log("Não é maior de idade!")}

possuiMaioridade(20, deMaior, deMenor); // É maior de idade!
possuiMaioridade(17, deMaior, deMenor); // Não é maior de idade!

/*
    Os argumentos "deMaior" e "deMenor" de "possuiMaioridade" 
    são chamados de funções de retorno de chamada ("callbacks") ou 
    apenas retornos de chamada ("callback").

    A ideia é passarmos uma função e esperarmos que ela seja 
    “chamada de volta” mais tarde, se necessário. 
    Neste caso, "deMaior" torna-se o callback para resposta “sim” 
    e "deMenor" para resposta “nao”.
*/

function aceitar(bool, sim, nao) {
    if (bool) sim();
    else nao();
}

aceitar(
    true,
    function() {console.log("Aceito!")}, // Função anônima, não tem nome.
    function() {console.log("Aceito não!")}
);

/*
    Em aceitar(...) as funções são declaradas dentro da chamada. Elas não têm nome e, 
    portanto, são chamadas de anônimas. Tais funções não são acessíveis fora de 
    aceitar(porque não são atribuídas a variáveis).

    Obs.:  EXPRESSÃO DE FUNÇÃO X DECLARAÇÃO DE FUNÇÃO

    Uma EXPRESSÃO DE FUNÇÃO é criada quando a execução a atinge e só pode
    ser utilizada a partir desse momento. Isto acontece pelo fato de ser atribuída 
    a uma variável. Portanto, só pode ser chamada após ser definida e chamando-a
    antes haverá erro: Cannot access 'funcao' before initialization
    (Não é possível acessar 'funcao' antes da inicialização).

    A DECLARAÇÃO DE FUNÇÃO já cria a função antes mesmo de executar o código e
    por isso pode ser chamada antes mesmo de ser definida.
*/