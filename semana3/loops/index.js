// Exercícios de interpretação //
// Exercício 1 - Será impresso:
// O código está condicionando uma continuação que está atrelada a um número que é incrementado 
// o resultado impresso é 10

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Exercício 2 - Será impresso:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(numero)
// }
// a. Foram impressos os números maiores que 18.
// b. Sim. É só retirar a condição if (numero > 18)

// Desafio 1

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/* O resultado impresso é:
0
00
000
0000 */

//Exercícios de escrita //
//Exercício 3//
/* a. e b.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    const elemento = array[i]
    console.log(elemento)
    
    console.log(elemento/10)
} */

//c. 
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        console.log
    }
}

//     const novoArray = array[i%2]
//     console.log(novoArray)
// }


//d. 
// const novoArray =[]


//e. 
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let valorMaximo = 0
// let valorMinimo = 140

// for(let i = 0; i < array.length; i++) {
//     if (array[i] > valorMaximo) {
//         valorMaximo = array[i]
        
//     }
// }

// for(let i = 0; i < array.length; i++) {
//     if (array[i] < valorMinimo) {
//         valorMinimo = array[i]
//     }
// }
// console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo)