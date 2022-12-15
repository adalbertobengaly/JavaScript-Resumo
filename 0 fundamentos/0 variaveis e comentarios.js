console.log("Hello World!");

// Comentário de uma linha

/*
    Comentário de
    múltiplas
    linhas
*/

var base = 2; // var -> possui escopo global... isso pode ser bem ruim...
let altura = 4; // let -> possui escopo local
const AREA_TRIANGULO = base * altura / 2; // const -> é constante, simples assim... (valor não pode ser alterado)
// "const" possui escopo local assim como "let"

console.log(AREA_TRIANGULO);

{
    {
        {
            let x = 4;
            var y = 5;
            console.log(x); // Por "let" possuir escopo local funcionará normalmente
        }
    }
    console.log(y); // -> "var" possui escopo global, portanto pode ser acessada em escopos diferentes
    // console.log(x) -> Error Not Defined ("let" possui escopo local, portanto não está presente aqui)
}
