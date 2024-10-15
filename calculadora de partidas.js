//- Definir quantidade de jogadores
//- Definir quanto vale 1 partida ganhada
//- Definir como se ganha uma partida ao rodar o sistema

//- Definir numero de vitorias
//- Definir numero de derrotas

//- Definir posições por numero de pontuação
//- Definir rodada de partidas

// definir uma função que faça os jogadores ganhar aleatoriamente a cada rodada
// definir uma função que rode 20 partidas 


let jogadores = {
    jogador1: {
        nome: "Jogador1",
        partidas: 10,
        vitorias: 5,
        derrotas: 2,
    },
    jogador2: {
        nome: "Jogador2",
        partidas: 15,
        vitorias: 6,
        derrotas: 4,
    },
    jogador3: {
        nome: "Jogador3",
        partidas: 8,
        vitorias: 2,
        derrotas: 7,
    }
}

let numeroPartidas = 20;
function partidas(numeroPartidas) {
    let contar = 0;
    for (let i = 0; i < numeroPartidas; i++) {
        contar++
    }
    return contar;
}

//let resultadoPartida = console.log(partidas(20));


function partidaAleatoria() {
    // Gerar um número aleatório entre 1 e 3
    let vencedor = Math.floor(Math.random() * 3) + 1;

    // Determinar o vencedor
    if (vencedor === 1) {
        jogadores.jogador1.vitorias++;
        return `${jogadores.jogador1.nome} venceu! Total de vitórias: ${jogadores.jogador1.vitorias}`;
    } else if (vencedor === 2) {
        jogadores.jogador2.vitorias++;
        return `${jogadores.jogador2.nome} venceu! Total de vitórias: ${jogadores.jogador2.vitorias}`;
    } else
    
    {
        jogadores.jogador3.vitorias++;
        return `${jogadores.jogador3.nome} venceu! Total de vitórias: ${jogadores.jogador3.vitorias}`;
    }
}  

// Executar várias vezes para ver os resultados aleatórios
let resultado1 = partidaAleatoria();
let resultado2 = partidaAleatoria();
let resultado3 = partidaAleatoria();

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

/*function ranking(resultadoPartida, resultado1, resultado2, resultado3) {
    contagem = resultadoPartida;
    if (resultado1 > resultado2 && resultado1 > resultado3) {
        return "Jogador1 é o primeiro do ranking"
    } else if (resultado2 > resultado1 && resultado2 > resultado3) {
        return "Jogador2 é o primeiro do ranking"
    } else if (resultado3 > resultado1 && resultado3 > resultado2) {
        return "Jogador3 é o primeiro do ranking";
    }
    return contagem

}

console.log(ranking(resultadoPartida, resultado1, resultado2, resultado3)); */