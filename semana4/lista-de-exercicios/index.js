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
Serão impressas todos os números com exceção do -10 */

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
const quantidadeDeNumerosPares = true
let i = 0

while(i <= quantidadeDeNumerosPares) {
    console.log(i*2)
    i++
}
/* O código não funciona inicialmente porque está incompleto.