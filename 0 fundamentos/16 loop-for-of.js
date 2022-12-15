/*
    Loop "for... of"
    Serve para percorrer e retornar o valor de cada elemento de uma coleção ("array")

    for (element in array) {
        // executa para cada elemento do array
    }
*/

let frutas = ["Maçã", "Banana", "Pêra", "Abacaxi"]

for (let fruta of frutas) {
    console.log(fruta);
}

// Percorrendo uma coleção de objetos
let colecao_jogos = [
    {nome: "God of War", ano: 2018},
    {nome: "God of War: Ragnarok", ano: 2022},
    {nome: "Spiderman Remastered (PC)", ano: 2022},
    {nome: "Spiderman: Miles Morales (PC)", ano: 2022},
    {nome: "Starwars Jedi: Survivor", ano: 2023}
]

for (let jogo of colecao_jogos) {
    console.log(`${jogo.nome} - ${jogo.ano}`);
}