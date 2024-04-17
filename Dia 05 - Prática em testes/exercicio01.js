//Elabore uma função para calcular o gasto de combustível por km rodado. Utilize as seguintes recomendações:
//Essa função deve receber dois parâmetros: a distância a ser percorrida em metros, e o tipo de combustível do carro;
//Um carro roda 16km/litro com gasolina e 11km/litro com etanol;
//A função deve retornar um int que representa quantos litros serão necessários para o percurso;
//O parâmetro de distância deve ser um inteiro e não pode ser negativo. Já o de combustível deve ser uma string e só pode ter “gasolina” ou “etanol”
//Implementar testes unitários para garantir que as validações e as funções principais estão funcionando como o esperado. Importante que os testes sejam implementados em um arquivo diferente das funções principais.



function retornarGasto(distancia, tipoCombustivel){
    //16km/litro - Gasolina
    //11km/litro - Etanol

    if(tipoCombustivel == "Gasolina" && distancia > 0){
        let quantosLitros = distancia / 16
        return quantosLitros
    }else if(tipoCombustivel == "Etanol" && distancia > 0){
        let quantosLitros = distancia / 11
        return quantosLitros
    }
}

module.exports = {retornarGasto}