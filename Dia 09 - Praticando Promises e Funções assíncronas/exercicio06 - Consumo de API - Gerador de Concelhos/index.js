/*
    Faça um código que pareça na tela (usando o innerHTML) um concelho aleatório, você consegue os
    concelhos pela API: https://api.adviceslip.com/advice
*/

let botaoGerar = document.getElementById('getAdviceBtn')
let paragrafoConcelho = document.getElementById('advice')

botaoGerar.addEventListener('click', async function gerarConcelho(){
    let requisicao = await fetch('https://api.adviceslip.com/advice')
    let resultado = await requisicao.json()
    .then(pegarConcelho => {
        paragrafoConcelho.innerHTML = pegarConcelho.slip.advice
    })
})

