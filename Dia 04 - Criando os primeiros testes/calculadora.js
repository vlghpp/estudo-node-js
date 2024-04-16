//Crio uma calculadora ficticia com algumas funções

function somar(x, y){
    return x + y
}

function diminuir(x, y){
    return x - y
}

function multiplicar(x, y){
    return x * y
}

function dividir(x, y){
    return x / y
}

//Código necessário para que o calculadora.js dê permissão de exportar algumas funções, por exemplo, somar e diminuir. Quando feito isto, na hora em que instanciar
//um objeto no index.js aquele objeto passa a poder acessar estas duas funções. Repare que se quiser acessar a de multiplicar/dividir n conseguirá acessar
//pois não foi exportada no código abaixo.
module.exports = {somar, diminuir}