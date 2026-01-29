//desafio 2 da DIO.IO
//Calculandora de Partidas Rankeadas 

 /* 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**/

function  vitorias () {
    
    {
if (quantidadeDeXp<=1000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ferro")
} else if ( quantidadeDeXp >1001 && quantidadeDeXp <= 2000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Bronze")
}else if (quantidadeDeXp >2001 && quantidadeDeXp<= 5000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Prata")
}else if (quantidadeDeXp >5001 && quantidadeDeXp<7000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ouro")
}else if (quantidadeDeXp >7001 && quantidadeDeXp<8000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Platino")
}else if (quantidadeDeXp >8001 && quantidadeDeXp<9000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Acendente")
}else if (quantidadeDeXp< 10000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Imortal")
}else {console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Radiante ")}

    
    }   
}

function nivel (){
    console.log ("nivel do herio")
}asd

 console.log ("O Herói tem de saldo de" + vitoria + "Está no nivel de " + nivel)
