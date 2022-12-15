/*
    Podemos usar rótulos com break/continue...
    É muito útil quando temos que sair de loops que estão aninhados.

    nomeDoRotulo: for (...) {
        ...
    }

    Usa-se "break/continue nomeDoRotulo" para quebrar ou continuar
*/

let colecao_jogos = [
    {nome: "God of War", ano: 2018},
    {nome: "God of War: Ragnarok", ano: 2022},
    {nome: "Spiderman Remastered (PC)", ano: 2022},
    {nome: "Grand Theft Auto VI", ano: 2024},
    {nome: "Spiderman: Miles Morales (PC)", ano: 2022},
    {nome: "Starwars Jedi: Survivor", ano: 2023}
]

percorrerColecao: for (let jogo of colecao_jogos) {
                    for (let chave in jogo) {
                        if (jogo["ano"] == 2024) {
                            console.log("Jogo de 2024 não participa da lista");
                            continue percorrerColecao;
                        }

                        if (chave == "nome") {
                            console.log(jogo[chave]);
                        }
                    }
                }