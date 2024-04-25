/*
    Faça um código que peça ao usuário seu CEP e depois automaticamente mostre a rua, bairro e estado. IMPORTANTE! SEM QUE O USUÁRIO CLIQUE EM NENHUM BOTÃO
    PARA DISPARAR FUNÇÃO

    link da API: https://cep.awesomeapi.com.br/json/
    Conhecimentos necessários: HTML - Básico, DOM, Promises e Async functions
*/

let cep = document.getElementById('input')
let cidade = document.getElementById('cidade')
let bairro = document.getElementById('bairro')
let rua = document.getElementById('rua')
cep.addEventListener('input', async function (){
    let requisicao = await fetch(`https://cep.awesomeapi.com.br/json/${cep.value}`)
    .then(resultado => {
        return resultado.json()
    })
    .then(resultadoResposta => {
        cidade.value = resultadoResposta.city
        bairro.value = resultadoResposta.district
        rua.value = resultadoResposta.address
    })
    .catch(error => {
        console.error("Erro ao encontrar o endereço: ", error);
    })
})


