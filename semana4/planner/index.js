function addTarefa() {
    // console.log("botao-clicado")
    const userTarefa = document.getElementById("incluirTarefa")
    let valor = userTarefa.value
    // console.log(valor)

    const diasSemana = document.getElementById("dias-semana")
    let semana = diasSemana.value
    userTarefa.value = ""

    // console.log(semana)

    switch (semana) {
        case "domingo":
            document.getElementById("domingo").innerHTML += `<p>${valor}</p>`
            break
        case "segunda":
            document.getElementById("segunda").innerHTML += `<p>${valor}</p>`
            break
        case "terca":
            document.getElementById("terca").innerHTML += `<p>${valor}</p>`
            break
        case "quarta":
            document.getElementById("quarta").innerHTML += `<p>${valor}</p>`
            break
        case "quinta":
            document.getElementById("quinta").innerHTML += `<p>${valor}</p>`
            break
        case "sexta":
            document.getElementById("sexta").innerHTML += `<p>${valor}</p>`
            break
        case "sabado":
            document.getElementById("sabado").innerHTML += `<p>${valor}</p>`
            break
        default:
            alert("Tente novamente!")
            break
    }

}

