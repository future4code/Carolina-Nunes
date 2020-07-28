// Exercícios de interpretação //
/* Exercício 1 - Será impresso:
a. false
b. false
c. true
e. boolean */

/* Exercício 2 - Será impresso:
a. undefined
b. null
c. 11
d. 
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9 */

//Exercícios de escrita //
//Exercício 1//
const idade = prompt("Qual é a sua idade?")
const idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")

const resultadoIdade = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", resultadoIdade)

const resultadoIdade2 = idade - idadeAmigo
console.log("A diferença de idade é: ", resultadoIdade2)

//Exercício 2//
numeroPar = prompt("Digite um número par:")
divisor = 2

const resultado = numeroPar % divisor
console.log(resultado)

//c. o resultado é sempre zero porque quando um número par é dividido por dois não há resto//
//d. quando um usuário insere um número ímpar há sobra//

//Exercício 3//
let listaDeTarefas = []
console.log('a. ', listaDeTarefas)

let tarefaUm = prompt("Digite a primeira tarefa que você precisa fazer hoje")
let tarefaDois = prompt("Digite a segunda tarefa que você precisa fazer hoje")
let tarefaTres = prompt("Digite a terceira tarefa que você precisa fazer hoje")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)

console.log('b. ', listaDeTarefas)

let i = prompt("Qual indice de tarefas você já completou? 0, 1 ou 2")
listaDeTarefas.splice(Number(i), 1)

console.log('f. ', listaDeTarefas)

//Exercício 4//
nomeDoUsuario = prompt("Qual é o seu nome?")
emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")
