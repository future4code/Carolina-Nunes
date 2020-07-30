// Exercícios de interpretação //
// Exercício 1 - 

/* Quando rodamos o código, um numero de teste é pedido e faz um teste. 
Se este número inserido é dividido por 2 e o resto é igual a zero, ou seja par,
imprime a mensagem "Passou no teste." Se for diferente, ou seja ímpar, aparece a mensagem "Não passou no teste."" */

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Exercício 2 - 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
   
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. para te informar o preço de uma determinada fruta
// b. O preço da fruta  maçã  é  R$  5
// c. a mensagem impressa seria "O preço da fruta  pêra  é  R$  5"


// Exercício 3 - 

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. pedindo um número
// b. no caso do numero 10 o terminal imprime a mensagem "Esse número passou no teste". No caso do numero -10 imprime uma mensagem de erro
// c. a mensagem de erro aparece pq o comando está fora das chaves

//Exercícios de escrita 
//Exercício 4
// const idade = Number(prompt("Qual é a sua idade?"))

// if(idade >= 18) {
//     console.log("Você pode dirigir.")  
//   } else {
//       console.log("Você não pode dirigir.")
//   }

// Exercício 5 - 
// const turno = prompt("Em qual turno você estuda? Por favor, digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// if(turno === "M") {
//     console.log("Bom dia!")  
//   } else if (turno === "V"){
//       console.log("Boa tarde!")
//   } else {
//       console.log("Boa noite!")
//   }

//Exercício 6
// let turno = prompt("Em qual turno você estuda? Por favor, digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
// switch (turno){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     default:
//         console.log("Boa noite!")
//         break
// }   
    
//Exercício 7

// let filme = prompt("Que tipo de filme você quer assistir?")

// const genero = "fantasia"
// const precoMenor = true

// if (genero === filme){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }