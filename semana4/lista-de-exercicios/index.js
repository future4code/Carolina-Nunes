// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1 
// A função converte moeda. Ela pede para o usuário inserir o valor da cotação em dólar e imprime o resultado do seu dinheiro em reais. 

// EXERCÍCIO 2


function investeDinheiro(tipoDeInvestimento, valor) {
    let valorAposInvestimento;

    switch(tipoDeInvestimento) {
        case "poupança":
            valorAposInvestimento = valor * 1,03;
            break
        case "rf":
            valorAposInvestimento = valor * 1,05;
            break
        case "cdb":
            valorAposInvestimento = valor * 1,06;
            break
        case "ac":
            valorAposInvestimento = valor * 1,1;
            break
        default:
            alert("TIPO DE INVESTIMENTO INCORRETO")
    }
    return valorAposInvestimento
}
const novoMontante = investeDinheiro("ac", 150)
const segundoMontante = investeDinheiro("tesouro", 200)

console.log(novoMontante)
console.log(segundoMontante)

//     const cotacao = Number(prompt("Informe o valor"))
//     return (valorEmDolar * cotacao);
//   }
//   const meuDin = conversorDeMoeda(100);
  
//   console.log(meuDin)