/*
    Faça um código consumindo a API de dolar - real, fazendo com que o usuário digite o valor em dolar em um input, e retorne no documento html, ou seja,
    apareça logo abaixo do input na página. Conteúdos necessários: HTML - Básico, DOM, Promises, Async functions
    link da api: https://economia.awesomeapi.com.br/last/USD-BRL
*/

let input = document.getElementById('cotacao')
let mostrarTexto = document.getElementById('mostrarTexto')
let botao = document.getElementById('botao')
botao.addEventListener('click', transformarDolar)

async function transformarDolar(){
    let exemplo = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then(result => {
        return result.json()
    })
    .then(resulJson =>{
        let dolarReal = resulJson.USDBRL.high
        let transformando = input.value * dolarReal
        mostrarTexto.innerHTML = `O valor de $${input.value} equivalem a R$${transformando}`
    })
    .catch(error => {
        console.error("O erro foi: ", error)
    })
    
}