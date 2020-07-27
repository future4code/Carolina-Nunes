// Exercícios de interpretação //
// Exercício 1 - Será impresso 10 e depois 10 e 5 //
// Exercício 2 - Será impresso 20 10 10 //

//Exercícios de escrita //
//Exercício 1//
/*
nome = 
idade =
console.log(typeof(nome))
console.log(typeof(idade))
o resultado de ambas é undefined porque não atribuí nenhum valor às variáveis */

let nome = 'Carolina'
let idade = 37
console.log(typeof(nome))
console.log(typeof(idade))
// com os valores atribuídos às variáveis, o programa rodou meu nome e idade //

console.log("Olá, " + nome + " você tem " + idade + " anos.")

//Exercício 2//

endereco = prompt("Qual o seu endereço?")
console.log("Resposta: " + endereco)

telefone = prompt("Qual é seu número de telefone?")
console.log("Resposta: " + telefone)

cor = prompt("Qual é sua cor favorita?")
console.log("Resposta: " + cor)

comida = prompt("Qual é o seu prato favorito?")
console.log("Resposta: " + comida)

viagem = prompt("Para onde você gostaria de viajar?")
console.log("Resposta: " + viagem) 

//Exercício 3//
let array = ["churrasco ", " pizza", " hamburguer", " salada", " massa"]
console.log("Estas são minhas comidas preferidas: " + array)
prato = prompt("Qual é o seu prato favorito")
console.log(array[0] + prato + array[2] + array[3] + array[4])

//Exercício 4//
let pergunta = ["Você gosta de cachorro?", "Você mora no Rio de Janeiro?", "Você tem filhos?"]
let resposta = ["true", "false", "true"]
console.log(pergunta[0], resposta[0])
console.log(pergunta[1], resposta[1])
console.log(pergunta[2], resposta[2])