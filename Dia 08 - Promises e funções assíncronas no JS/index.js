async function TesteAsync(){
    console.log("Iniciando")
    let exemplo = await fetch('https://apigenerator.dronahq.com/api/I-Vvh2pa/data')
    console.log(exemplo)
    console.log('Terminou a requisição')
}

function teste(){
    console.log('Iniciando')
    let exemplo = fetch('http://httpbin.org/get').then((res) => {
        console.log('Aqui está dentro do then')
        console.log()
    })
    console.log("Depois de tudo")
}

function teste2(){
    fetch('https://apigenerator.dronahq.com/api/I-Vvh2pa/data')//faço a requisição
    .then(response => response.json()) // Extrai e analisa o corpo da resposta como JSON
    .then(data => {
        console.log(data); // Exibe os dados no console
    })
    .catch(error => {
    console.error('Ocorreu um erro ao obter os dados:', error); // Lidar com erros de requisição
    });
}

function testeFetch(){
    fetch('https://apigenerator.dronahq.com/api/I-Vvh2pa/data')
}