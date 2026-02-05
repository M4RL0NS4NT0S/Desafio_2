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

//vitorias ("marlon", 1000)
Vitoria(55)

function  Vitoria () {
let resultado  

if ( Vitoria <=10){
    resultado = ( Vitoria + " Ferro")
} else if ( Vitoria >11 && Vitoria <= 20) {
    resultado = ( Vitoria +" Bronze")
}else if ( Vitoria >21 && Vitoria<= 50){
    resultado =  (Vitoria +  " Prata")
}else if (Vitoria >51 && Vitoria<70){
     resultado = (Vitoria + " Ouro")
}else if (Vitoria >71 && Vitoria<80){
    resultado = (Vitoria + " Diamante")
}else if (Vitoria >81 && Vitoria<90){
    resultado = ( Vitoria +" Acendente")
}else if (Vitoria< 100){
    resultado = (Vitoria + " Imortal")
}else {resultado (Vitoria >101 +  " Radiante ")}
 
   return resultado
   
   console.log ( "O Herói tem de saldo de " + Vitoria)
}


