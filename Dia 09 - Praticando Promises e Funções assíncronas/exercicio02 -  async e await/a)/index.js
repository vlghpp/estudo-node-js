/*
Uso de Async/Await:
a. Escreva uma função assíncrona que aguarde 3 segundos e, em seguida, retorne "Finalizado!".
b. Crie uma função que aguarde o resultado de duas promises e retorne a soma dos valores resolvidos.
*/


async function exercicio(){
    setTimeout(() => {
        console.log("Finalizado!")
    }, 3000);
}

exercicio()