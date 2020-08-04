// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1 

// a. serão impressos os números 10 e 50.
// b. não acontece nada, pois não explicitamos o que precisaria ser feito dentro da função

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// EXERCÍCIO 2

// a. As saídas são Darvas e Goli, porque a funcão está chamando apenas os dois primeiros itens.
// b. As saídas serão Amanda e Caio. 

// let arrayDeNomes = ["Amanda", "Caio"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// EXERCÍCIO 3

// A função cria um novo array com os números pares multiplicados do array original. O nome 'método' pode ser substituido para facilitar o entendimento.

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     } 
  
//     return arrayFinal;
    
// }


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 4
// a. 
function sobreMim () {
    console.log("Oi! Meu nome é Carolina, tenho 37 anos e moro em São Paulo.")
}
sobreMim()

// b.
function sobreMim2 (nome, idade, endereco, estudante ){
   if (estudante === false) {
       console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e não sou estudante.`)
    } else {
        console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou estudante.`)
    }
}
const resultado = sobreMim2("Carolina", 37, "São Paulo", true)


// EXERCÍCIO 5
// a. 
function somaNumeros (numero1, numero2) {
    const soma = numero1 + numero2
    console.log(soma)
}
somaNumeros (34, 4)

// b.
function comparacaoNumeros (numero3, numero4) {
    let condicao1 = numero3 >= numero4
    let condicao2 = numero3 < numero4
    if (condicao1 === true) {
        console.log(condicao1)
    } else {
        console.log(condicao2)
    }
}
const resultadoComparacao = comparacaoNumeros (30, 27)

// c.
function imprimeDezVezes(string) {
    for (i=0; i < 10; i++) {
        console.log(i, string)
}
}
let mensagem = "Olá, mundo!"
imprimeDezVezes(mensagem)

// EXERCÍCIO 6
// a. 
function verTamanhoArray(arrayExemplo) {
    return arrayExemplo.length
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanhoDoArray = verTamanhoArray(array)
console.log("A quantidade de elementos é " + tamanhoDoArray)

// b.
function numeroPar(number) {
    if (number%2 === 0) {
        return true
    } else {
        return false
    }
}
let numeroUsuario = prompt("Digite um número")
let exemplo = numeroPar(numeroUsuario)
console.log(`O numero ${numeroUsuario} é par? Resposta: ${exemplo}`)

// c.
function listaPar(arrayEx){
    let arrayFinal = []
    for (let par of arrayEx){
        if (par % 2 === 0){
            arrayFinal.push(par)
        }
    }
    return arrayFinal
}
const array2 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const arrayPares = listaPar(array2)
console.log(arrayPares)

// d. 
function listaPar2(arrayEx){
    let arrayFinal = []
    for (let par of arrayEx){
        if (par % 2 === 0){
            return true
        }
    }
    return arrayFinal
}
const array3 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const parFinal = listaPar2(array3)
console.log(parFinal)



// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)