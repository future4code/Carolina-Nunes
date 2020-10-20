let message: string = "Hello, world!"

//Exercício 1

// const minhaString: string = 8
// a. Quando passo o cursor, aparece a mensagem dizendo que eu atribuí errado

// const meuNumero: number = 8
// b. Colocando o operador |

// c. d. e.
enum ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    ROXO = "Roxo"
}

type person = { 
    nome: string, 
    idade: number, 
    corFavorita: ARCO_IRIS,
}
const carolina: person = {
    nome: "Carolina",
    idade: 37,
    corFavorita: ARCO_IRIS.ROXO
}
const lucas: person = {
    nome: "Lucas",
    idade: 4,
    corFavorita: ARCO_IRIS.VERDE,
}
const joao: person = {
    nome: "João",
    idade: 4,
    corFavorita: ARCO_IRIS.VERMELHO
}
const roberto: person = {
    nome: "Roberto",
    idade: 72,
    corFavorita: ARCO_IRIS.AZUL
}
const pessoas: person[] = [carolina, lucas, joao, roberto]
console.log(pessoas)


// Exercício 2

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a. incluí a tipagem no parâmetro da função explicitando que é um array de números
// b. um array
// c. 
type amostra = { 
    numeros: [],
    obterEstatisticas: (numeros: number) => {} 
}

// Exercício 3

type post = { 
    autor: string, 
    texto: string, 
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

// b. 
function buscarPostsPorAutor(posts: [], autorInformado: string) {
    return posts.filter(
      (post: post) => {
        return post.autor === autorInformado
      }
    )
  }

