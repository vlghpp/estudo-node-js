let nextQuestion = document.getElementById('question-container')
let nextButton = document.getElementById('next-btn')

/*
Fiz até aparecer a mensagem, quando eu clico em 'Proxima Questão' tem problemas como:

- Aparecem varias perguntas quando clico no botao "Proxima Questão", em vez de aparecer uma de cada vez
- Falta estilizar mais de acordo com o game
- Falta identificar quando o usuario acerta a questao

*/
nextButton.addEventListener('click', async function teste() {
    let example = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
    .then((resultado) => {
        //Crio uma div, um paragráfo e duas opções para verdadeiro e falso
        //tudo isso dentro da div com a class box, e no css vou estiliza-la
        criarElementos(resultado)
        return resultado.json();
    })
    .then((resultadoJson) => {
        // console.log(resultadoJson.results);
        // console.log(resultadoJson.results[0].question);
    })
    .catch((error) => {
        console.error("O erro foi: ", error);
    });
})

async function criarElementos(resultado) {
    let requisicao = await resultado.json()
    let div = document.createElement('div');
    div.className = "box";
    
    let pQuestao = document.createElement('p');
    pQuestao.textContent = requisicao.results[0].question;
    
    let botaoVerdade = document.createElement('button');
    botaoVerdade.id = "botaoVerdade"
    botaoVerdade.textContent = "Verdadeiro";
    
    let botaoFalso = document.createElement('button');
    botaoFalso.id = "botaoFalso"
    botaoFalso.textContent = "Falso";
    
    // Adicionando elementos à div
    div.appendChild(pQuestao);
    div.appendChild(botaoVerdade);
    div.appendChild(botaoFalso);
    
    // Adicionando a div à DOM
    nextQuestion.appendChild(div);
}

