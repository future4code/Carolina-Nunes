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

// EXERCÍCIO 4 

// const lado1 = prompt('Insira o valor do lado 1')
// const lado2 = prompt('Insira o valor do lado 2')
// const lado3 = prompt('Insira o valor do lado 3')

// console.log(lado1, lado2, lado3)

// if (lado1 === lado2 && lado2 === lado3){
//     console.log('O triângulo é equilátero')
// } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//     console.log('O triângulo é isósceles')
// } else {
//     console.log('O triângulo é escaleno')
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
// EXERCÍCIO 1 

// const array = [34, 13, 45, 65, 33, 23, 56, 98]
// let novoArrayNumerosMaior =[]
// let novoArrayNumerosMenor = []
// let maiorNum = 0
// let menorNum = Infinity



// const defineMaiorNum = (array, funcao) => {
//     for(let numero of array) {
//         if (numero > maiorNum) {
//             maiorNum = numero
//         }
//     }
//     console.log(`O array original é ${array}`)
//     console.log(`O maior número é ${maiorNum}`)
//     funcao(array, maiorNum)
// }
// const arraySemMaiorNum = (array, maiorNum) => {
//     let segMaior = 0
//     for (let numero of array) {
//         if (numero !== maiorNum) {
//             novoArrayNumerosMaior.push(numero)
//         }
//     }
//     console.log(`O novo array é ${novoArrayNumerosMaior}`)
//     for(let numero of novoArrayNumerosMaior) {
//         if (numero > segMaior) {
//             segMaior = numero
//         }
//     }
//     console.log(`O segundo maior número do array original é ${segMaior}`)
//     return segMaior
// }
// defineMaiorNum(arrayNumeros, arraySemMaiorNum)

// const defineMenorNum = (array, funcao) => {
//     for(let numero of array) {
//         if (numero < menorNum) {
//             menorNum = numero
//         }
//     }
//     console.log(`O array original é ${array}`)
//     console.log(`O menor número é ${menorNum}`)
//     funcao(array, menorNum)
// }
// const arraySemMenorNum = (array, menorNum) => {
//     let segMenor = 0
//     for (let numero of array) {
//         if (numero !== menorNum) {
//             novoArrayNumerosMenor.push(numero)
//         }
//     }
//     console.log(`O novo array é ${novoArrayNumerosMenor}`)
//     for(let numero of novoArrayNumerosMenor) {
//         if (numero < segMenor) {
//             segMenor = numero
//         }
//     }
//     console.log(`O segundo menor número do array original é ${segMenor}`)
//     return segMenor
// }
// defineMenorNum(arrayNumeros, arraySemMenorNum)


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

// EXERCÍCIO 2

// const criaRetangulo = (lado1, lado2) => {
//     return({
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1+lado2),
//         area: lado1*lado2
//     })
// }
// console.log(criaRetangulo(10, 20))

// EXERCÍCIO 3

// const filme = {
//     titulo: "Pulp Fiction",
//     ano: 1994,
//     diretor: "Quentin Tarantino",
//     atores: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Rosana Arquette"]
// }
// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)

// EXERCÍCIO 4

// const pessoa = {
//     nome: "João",
//     idade: 4,
//     email: "joao@gmail.com",
//     endereco: "Avenida Sabiá"
// }
// console.log(pessoa)

// function anonimizarPessoa (objetoPessoa) {
//     const novaPessoa = {...objetoPessoa, nome: 'ANONIMO'}
//     console.log(novaPessoa)

// }
// anonimizarPessoa(pessoa)


// EXERCÍCIOS DE FUNÇÕES DE ARRAY
// EXERCÍCIO 1

// let pessoas = [
//     {nome: "Pedro", idade: 20},
//     {nome: "João", idade: 10},
//     {nome: "Paula", idade: 12},
//     {nome: "Artur", idade: 89}
// ]
// const adultos = pessoas.filter(adulto => adulto.idade > 18)
// const criancas = pessoas.filter(criancas => criancas.idade < 18)

// console.log(pessoas)
// console.log(adultos)
// console.log(criancas)

// EXERCÍCIO 2 
// const array = [1, 2, 3, 4, 5, 6]

// const arrayNova = array.map((numero, index, array)=>{
//     return (numero*2)
// })

// console.log(arrayNova)

// const arrayNova2 = array.map((numero, index, array) => {
//     return (numero*3).toString()
// })
// console.log(arrayNova2)

// const arrayNova3 = array.map((numero, index, array) => {
//     if (numero%2 === 0) {
//         return (`${numero} é par`)
//     } else {
//         return (`${numero} é ímpar`)
//     }
// })
// console.log(arrayNova3)


// EXERCÍCIO 3
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
// const podeIr = pessoas.filter(pode => pode.idade > 14 && pode.idade < 70 && pode.altura > 1.5)
// console.log(podeIr)

// const naoPodeIr = pessoas.filter(naopode => naopode.idade < 14 || naopode.idade >= 70 || naopode.altura < 1.5)
// console.log(naoPodeIr)


// EXERCÍCIO 4 - ===================INCORRETO===================
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]
// const emailEnviado = consultas.map((consultas) => {
//     let introducao = "Sr."
//     let lembranca = "lembrá-lo"

//     if(consultas.cancelada){
//         const msgCancelamento = `Olá, ${introducao} ${consultas.nome}. Infelizmente, sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//         if(consultas.genero === "feminino") {
//             introducao = "Sra."
//             lembranca = "lembrá-la"
//         } else {
//         }
//         return msgCancelamento
//     }
//     if(consultas.cancelada === false) {
//         const msgConfirmacao = `Olá, ${introducao} ${consultas.nome}. Estamos enviando esta mensagem para ${lembranca} da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, confirme o recebimento deste e-mail.`
//         if(consultas.genero === "feminino") {
//             introducao = "Sra."
//             lembranca = "lembrá-la"
//         } else {
//         }
//         return msgConfirmacao
//     }
// })
// console.log(emailEnviado)

// // EXERCÍCIO 5 
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]
// contas.forEach((conta, index, array)=>{

//     let totalCompras = 0
//     conta.compras.forEach((compra, index, array)=> {
//         totalCompras += compra
//     })

//     conta.saldoTotal -= totalCompras
// })

// console.log(contas)