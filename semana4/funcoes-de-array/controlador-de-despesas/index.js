// array de despesas
const listaDeDespesa = []


// função que adiciona os dados do controlador de despesas
function addDados() {
    const valorDespesa  = document.getElementById("valor-despesa")
    const tipoDespesa = document.getElementById("tipo-despesa")
    const descricaoDespesa = document.getElementById("descricao-despesa")

    //verifica se os elementos inseridos são válidos
    if (valorDespesa.value === "" && tipoDespesa.value === ""  && descricaoDespesa.value === "") {
        alert("Verifique se as informações inseridas estão corretas.")
    } else {
        const controlador = {
            despesaValor: valorDespesa.value,
            despesaTipo: tipoDespesa.value,
            despesaDescricao: descricaoDespesa.value,
        }
        //adiciona array
        listaDeDespesa.push(controlador)
    }
    
    //imprime para ver se está funcionando
    // console.log(controlador)
    console.log(listaDeDespesa)
     
    //limpa os campos
    valorDespesa.value = ""
    tipoDespesa.value = ""
    descricaoDespesa.value = ""

    //adiciona o extrato no html
    // const extratoDeDespesas = document.getElementById("extrato-despesas")
    // extratoDeDespesas.innerHTML += `<p>${valorDespesa.value}</p> <p>${tipoDespesa.value}</p> <p>${descricaoDespesa.value}</p>`
}
function filtrarDespesas() {
    const filtroTipo = document.getElementById("tipo-despesa2")
    const filtroValorMin = document.getElementById("valor-minimo")
    const filtroValorMax = document.getElementById("valor-maximo")

    const callback = (elemento, index, array) => {
        if (elemento.tipo === )
    }

}