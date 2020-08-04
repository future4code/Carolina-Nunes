/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo ao jogo de Blackjack!")

const rodadaSim = true
const rodadaNao = false

let cartasUsuario1 = comprarCarta()
let cartasComputador1 = comprarCarta()
let cartasUsuario2 = comprarCarta()
let cartasComputador2 = comprarCarta()

let pontoUsuario = cartasUsuario1.valor + cartasUsuario2.valor
let pontoComputador = cartasComputador1.valor + cartasComputador2.valor

if (confirm("Quer iniciar uma nova rodada?") === true) {
   console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto}  - pontuação ${pontoUsuario}`)
   console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto}  - pontuação ${pontoComputador}`)
      if (pontoUsuario > pontoComputador) {
         console.log("O usuário ganhou!")
      } else if (pontoUsuario < pontoComputador) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate")
      }
   } else {
   console.log("O jogo acabou!")
}