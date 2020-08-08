// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1 
// A função permite fazer a conversão de moedas. Ela pede para o usuário inserir o valor da cotação em dólar e imprime o resultado do seu dinheiro em reais. 

// EXERCÍCIO 2
/* É utilizada aqui estrutura de condicional onde o valor da expressão é comparado com cada case. 
Serão impressos o valor 150 e undefined. */

// EXERCÍCIO 3
/* A função percorre o o array e cria dois novos arrais. 
Serão impressos: 
Quantidade total de números 14
[12, 64, 44, 84, 48, 14]
[25, 55, 121, 11, 51, 73, 111, 283]

// EXERCÍCIO 4
/* A função compara os numeros de uma lista.
Se o número na array for menor que o infinito, então numero1 é igual ao número da lista. 
Se o número na array for maior que 0, então numero2 é igual ao numero da lista.
Serão impressos os números 1 e 1590 */

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO
// EXERCÍCIO 1
/* Podemos percorer uma lista com as funções são chamadas de callback, que são: forEach, map e filter. */

// const comidas = [
//         {nome: "Banana", tipo: "fruta", caloria: 20, sabor: 9},
//         {nome: "Chocolate", tipo: "sobremesa", caloria: 340, sabor: 10},
//         {nome: "Arroz", tipo: "jantar", caloria: 160, sabor: 7},
//         {nome: "Carne", tipo: "jantar", caloria: 320, sabor: 8},
//         {nome: "maçã", tipo: "fruta", caloria: 40, sabor: 8},
//         {nome: "bolo", tipo: "sobremesa", caloria: 450, sabor: 9}
//     ]
//     const callback = (elementoComida, index, array) => {
//         if (elementoComida.tipo === "fruta") {
//             return true
//         }
//         return false
//     }
// const comidasDieta = comidas.filter(callback)
// console.log(comidasDieta)

// EXERCÍCIO 2
/* 
a. false
b. true
c. true
d. true
e. true */

// EXERCÍCIO 3
// const quantidadeDeNumerosPares = 2
// let i = 0

// while(i <= quantidadeDeNumerosPares) {
//     console.log(i*2)
//     i++
// }
// O código não funciona inicialmente porque está incompleto, faltava o incremento.

// EXERCÍCIO 4 - INCOMPLETO

// const ladoA = true
// const ladoB = true
// const ladoC = true

// let resultado = ladoA && ladoB && ladoC
// console.log("O triângulo é equilátero", resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// console.log("e. ", typeof resultado)


// if (ladoA === ladoB === ladoC) {
//     console.log("O triângulo é equilátero")
// } else if (ladoA === ladoB !== ladoC) {
//     console.log("O triângulo é isósceles") 
// } else {
//     console.log("O triângulo é escaleno")
// }

// EXERCÍCIO 5 

// // a.
// const num1 = 15
// const num2 = 30

// if (num1 > num2) {
//     console.log(`O maior é ${num1}`)
// } else {
//     console.log(`O maior é ${num2}`)
// }

// // b. 
// const condicao1 = (num1 % num2 > 0)
// const condicao2 = (num2 % num1 > 0)

// if (condicao1 === true) {
//     console.log(`${num1} é divisível por ${num2}`)
// } else if (condicao1 === false){
//     console.log(`${num1} não é divisível por ${num2}`)
// } else if (condicao2 === true) {
//     console.log(`${num2} é divisível por ${num1}`)
// } else (condicao2 === false)
//     console.log(`${num2} não é divisível por ${num1}`)


// // c.
// const resultado1 = num1 - num2
// const resultado2 = num2 - num1

// if (resultado1 > 0){
//     console.log(`A diferença entre eles é ${resultado1}`)
// } else (resultado2 > 0) 
//     console.log(`A diferença entre eles é ${resultado2}`)

// EXERCÍCIOS DE FUNÇÕES
// EXERCÍCIO 1 - INCOMPLETO

// let numeros = [34, 13, 45, 65, 33, 23, 56, 98]

// let numero1 = Infinity 
// let numero2 = 0 

// for(let numero of numeros){
//     if (numero < numero1){
//         numero1 = numero
//     }

//     if (numero > numero2){
//         numero2 = numero
//     }
// }
// console.log(numero1)
// console.log(numero2)


// EXERCÍCIO 2
// let alerta = (mensagem) => {
//     return mensagem 
// }
// const resultado = alerta(alert("Hello Future4"))
// console.log(resultado)

// EXERCÍCIOS DE OBJETO
// EXERCÍCIO 1

/* Um objeto é um tipo especial de variável que contém algumas propriedades. São como uma coleção de dados e/ou funcionalidades relacionadas. Usam índices nomeados.
Um Array é um objeto com um construtor único e são usados para armazenar vários valores em uma única variável. Usam índices numerados.
Usamos objetos quando queremos que os nomes dos elementos sejam strings.
Usamos arrays quando queremos que os  nomes dos elementos sejam números.
*/

// EXERCÍCIO 2 - INCOMPLETO

// function criaRetangulo(lado1, lado2){
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1+lado2),
//         area: lado1*lado2,
//     }
//     return criaRetangulo
// }
// criaRetangulo(2, 4)
// console.log(criaRetangulo)

// EXERCÍCIO 3

// const filme = {
//     titulo: "Pulp Fiction",
//     ano: 1994,
//     diretor: "Quentin Tarantino",
//     atores: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Rosana Arquette"]
// }
// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)

// EXERCÍCIO 4 - INCOMPLETO

// const pessoa = {
//     nome: "João",
//     idade: 4,
//     email: "joao@gmail.com",
//     endereco: "Avenida Sabiá"
// }
// console.log(pessoa)

// function anonimizarPessoa(nomeDoElemento, valorDoElemento) {

// }

// EXERCÍCIOS DE FUNÇÕES DE ARRAY
// EXERCÍCIO 1

let pessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Artur", idade: 89}
]
const adultos = pessoas.filter(adulto => adulto.idade > 18)
const criancas = pessoas.filter(criancas => criancas.idade < 18)

console.log(pessoas)
console.log(adultos)
console.log(criancas)

