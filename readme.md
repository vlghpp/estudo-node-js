# Repositório feito para demarcar meu progresso em Node.js

- Este README.md serve como minhas anotações para cada novo conteúdo que eu aprender em node, desta forma consigo ver meu progresso e melhorar em minhas falhas e dificuldades.

## Como executar arquivos .js em Node - Dia 00

- Para executar arquivos em node é similar ao Java, quando é necessário compilar o arquivo e depois executa-lo com javac e java. Com node basta só executar dando:

```
    node 'nomeDoArquivo.js'
```

## Instalando Pacotes com npm - Dia 01

- Pacotes são códigos específicos e trabalhosos que foram feitos por outras pessoas na ideia de deixar o seu mundo mais fácil. Por exemplo: em vez de ter que criar um código e uma lógica inteira pra ler uma planilha de excel, tem um código já pronto (um pacote) que faz esse trabalho pra você, só basta instalar o pacote e criar uma dependência. (Semelhante com o gradle do Java)
    > - Para instalar basta apenas executar esse código:
    ```
        npm install 'nome do pacote'
    ```
    > - Neste dia estarei usando no npm install validator

## Testes e2e, integradores e unitários - Dia 02

- Testes são de extrema importância pois, é possível indentificar erros (bugs) logo no inicio do processo, o que mantém a garantia de qualidade do produto, a confiança do cliente no software e também mantém a facilitação de manutenção e evolução do software.

- São testes:
    > - Testes Unitários: Tem a função de testar apenas um trecho do código, de forma isolada. Por exemplo: Você testar uma função especifica do código, a qual tem a missão de receber entradas e resolver saídas, então você a valida pra ver se está tudo certo. Testes unitários são bons pois, como são trechos curtos de códigos tem-se maior facilidade em achar bugs e um menor tempo usando depurador.

    > - Testes de Integração: Tem a função de verificar se uma unidade está tendo o comportamento esperado quando está de maneira integrada a outros elementos de software, como a chamada de serviços, API e banco de dados. Aqui, a unidade de software em si não é avaliada em detalhes, mas sim a sua integração com outras unidades por completo. Dessa forma facilitando perceber se algo está errado, mas com maior dificuldade em enteder onde está o erro.

    > - Teste end to end (e2e): Tem a função de fazer uma simulação de um usuário real interagindo com o software, como por exemplo, o preenchimento de um cadastro, uma opção que foi selecionada com um clique do mouse. Como o nome entrega, este tipo de teste visa garantir o fluxo correto dos dados entre todas camadas que fazem parte da solução de software.

## Exportando métodos e Módulos no Node.js - Dia 03

- É possivel acessar métodos de um arquivo .js em um outro arquivo .js (ver exemplo na pasta do Dia 03 - Módulos no Node.js). É possível usando o código: 

```
    module.exports = {somar, dividir, multiplicar, diminuir}
```

- Desta forma você está dizendo para o arquivo em que está exportando quais são os métodos que vão ser acessiveis quando instanciar o objeto.

## Criando os primeiros testes - Dia 04

- Vou estar usando o pacote jest (npm install --save-dev jest, para instalar o pacote. A flag --save-dev significa que o pacote será instalado em apenas áreas de desenvolvimento) para o uso de tests unitários. Com o uso deste pacote podemos usar códigos como este: 

```
    const calculadora = require("./calculadora")

    test('Somar um mais um é igual a 2', () => {
        expect(calculadora.somar(1,1)).toBe(3)
    });
```
- Desta forma, podemos instanciar um objeto calculadora que terá os métodos herdados do arquivo ./calculadora (apenas os que foram exportados -  Dia 03 para rever como exportar)
    > - Este código funciona da seguinte forma: 
    ```
        const calculadora = require("./calculadora")
        -> Faz uma requisição dos métodos ./calculadora e instancia o objeto calculadora
    ```

    ```
        test('Somar um mais um é igual a 2', () => {
            expect(calculadora.somar(1,1)).toBe(3)
        });
        -> Faz o teste unitário, pasando dois parâmetros, sendo o primeiro o que você quer que aconteça e o segundo uma arrow function dizendo o que ele espera da função somar (expect(calculadora.somar(1,1))) e que será 3 (.toBe(3)).
        Então, este teste consiste em dizer o que você espera do retorno de uma função. Sendo assim, seguindo a definição de teste unitário (Dia 02).
    ```

- No node também tem como definir scripts por apelidos, ou seja, criar atalhos. Se você for em package.json verá o seguinte código:

```
{
    "scripts":{
        "test": "jest"
    },
    "devDependencies": {
        "jest": "^29.7.0"
    }
}

```

- Neste código eu defino uma script, ou seja, um apelido para rodar uma script, e em devDependencies eu apenas incluo o jest como dependência para conseguir rodar o pacote. Poderá ver que é funcional o apelido pelo seguinte código

```
    npm run test
    -> Executará o script, entenda que o 'run' é apenas para referênciar que o que vem depois é uma script
```

- E isto é a mesma coisa que:

```
    npm jest
    -> Versão sem ter que usar apelidos, ou "scripts"
```

- Existem diversos tipos de testes, com diversos tipos de formatos, pro exemplo:
    > - .toBe() -> Espero que o resultado será
    > - .not.toBe() -> Espero que não seja
    > - .toEqual() -> Espero que seja igual

- Ver a documentação do jest para mais informações, em: [Clique aqui para ver a documentação do jest](https://jestjs.io)


## Colocando em prática os Testes - Dia 05

- Dado o exercicio de prática de testes, onde é necessário criar uma função que tem parâmetros: distancia e tipo de combustivel(etanol ou gasolina), calcular o total de gasolina que será necessária para a distância x. Pode ver a resolução do exercicio em exercicio01.js, já seus testes unitários em exercicio01.test.js (primeiro teste para caso seja desejado gasolina e o segundo para caso seja etanol) 

```
    > test
    > jest --coverage

    PASS  ./exercicio01.test.js
    √ O total de gasolina percorrido 272km é de 17 litros (3 ms)
    √ O total de etanol percorrido 220km é de 20 litros (1 ms)

    ----------------|---------|----------|---------|---------|-------------------
    File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ----------------|---------|----------|---------|---------|-------------------
    All files       |     100 |     87.5 |     100 |     100 | 
    exercicio01.js  |     100 |     87.5 |     100 |     100 | 17
    ----------------|---------|----------|---------|---------|-------------------
    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        0.502 s, estimated 1 s
    Ran all test suites.
```
- Este foi o resultado dos meus testes (usando a flag --coverage para fazer essa tabela)

## Conhecendo APIs HTTP - Dia 06

### APIs (Application Programming Interface)
- No português Interface de Programação de Aplicativos, é uma interface utilizada para disponibilizar as funções de um sistema para outros sistemas facilitando a comunicação e integração entre eles. De modo que as aplicações externas que usam essa interface não tem acesso direto ao seu sistema e como ele foi implementado. Essas funções geralmente são usadas para guardar/buscar/manipular dados, mas quem está usando
essa interface não quer saber como o sistema está fazendo isso o que importa é ter o resultado esperado. As APIs são comumente usadas para comunicação entre o front-end e o back-end, mas também podem ser utilizadas dentro do back-end ou até mesmo de outra API para realizar alguma função.

### HTTP e Status Code

- HTTP é um protocolo que possibilita a comunicação entre sistemas de forma simples, suportando texto, imagens e outros tipos de mídia. Assim que é feito um REQUEST(pedido) é aberta uma conexão entre o cliente e o servidor, uma vez que servidor envia o RESPONSE(resposta) essa conexão se fecha.

- Status Code são códigos que o servidor responde para o cliente sobre a situação do seu método (get/post/pul/delete). Veja alguns exemplos: 

1. Respostas de informação (100-199),
2. Respostas de sucesso (200-299),
3. Redirecionamentos (300-399)
4. Erros do cliente (400-499)
5. Erros do servidor (500-599).

- Mais famosos: 

1. 200: Ok
2. 204: NoContent
3. 400: BadRequest
4. 401: Unauthorized
5. 404: NotFound
6. 500: InternalServerError

### Principais Métodos HTTP

- GET: é o método mais comum, geralmente usado para solicitar que um servidor envie um recurso;

- POST: foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente utilizado para adicionar, criar, enviar informações ao servidor;

- PUT: edita e atualiza as informações em um servidor;

- DELETE: como o próprio nome já diz, deleta certo dado ou coleção do servidor.

### Rotas

- Quando criamos uma API, definimos uma rota para ela. Durante um REQUEST é essa rota que será percorrida para localizar a nossa API. Que é a nossa URL.

## APIs HTTP na prática - Dia 07

- Neste dia vamos ver um conteúdo de APIs mais na prática, utilizando o site [Api Generator](https://apigenerator.dronahq.com/) podemos criar uma API para fazer alguns testes e ver como elas funcionam. 
    > - Ao acessar o site ir em "Raw JSON" e escrever um json de teste, por exemplo:

    ```
        {
            "nome": "Henrique",
            "turma": "Backend",
            "idade": 19
        }
    ```

### Insomnia

- Para fazer os testes da API e os Status Code, eu vou utilizar desse aplicativo que se chama Insomnia, abaixo está o link e vou fazer alguns passo a passos.
    > - [Link para baixar o Insomnia](https://insomnia.rest/download)

### Método GET no Navegador
- Depois de acessado e criado um nome, deverá aparecer alguns métodos HTTP com links, por exemplo o método GET, se você clicar em cima do link (requisitará um get de todos objetos que você tem, nesse caso apenas um que é o do "Henrique")
- Também tem o Get by ID, neste caso criará um ID para cada objeto, e desta forma no url da página você poderá acessar cada objeto pelo seu id, por exemplo: 
    > - https://apigenerator.dronahq.com/api/nGPawxMh/alunos/1
    > - Este é um link da minha API alunos, pegando o objeto de número 1 que me retornará o seguinte:
    ```
        {
            "nome": "Henrique",
            "turma": "Backend",
            "idade": 19,
            "id": 1
        }

        (O status code é 200 OK, pois me retornou algo que realmente existe)
    ```
    
    > - Caso eu passe o ID /2, me retornará o seguinte:
    ```
        {}
    ```
    > - Neste caso me retornará o código 404 NotFound, pois não tenho um objeto de ID 2.

### Método Get no Insomnia

- Para usar o Insomnia ao seu favor basta baixa-lo e abri-lo, quando você abrir vai estar em uma tela similar a de baixo:

![Get com Insomnia](https://i.imgur.com/GMr5gIG.png)

- Para conseguir acessar os métodos neste aplicativo vá em Create > Design document (está em vermelho na foto)

- Depois copie a rota (URL) do método get gerado no API Generator e cole no campo com o método GET selecionado

![Get com Insomnia](https://i.imgur.com/LSMvGYL.png)

- Note que ao clicar em SEND (enviar) você terá duas respostas, no quadrado ciano você vera o status code do método neste caso foi 200 OK, ou seja, não era pra retornar nada, mas disse que deu certo. 

- Em rosa você pode notar o que o GET nos trouxe, neste caso será todos os objetos que sua API registrou até o momento (se você fizer um POST e adicionar um objeto novo e dar um GET novamente você vai notar que vai aparecer o novo objeto também. Faça o este e análise!)

### Método POST

- Utilizando o método POST, conseguimos pegar nossa API alunos criada anteriormente, e adicionar/criar um novo objeto, ou seja, vamos criar o objeto de ID 2. (É necessário baixar e instalar o aplicativo Insomnia)
    > - [Link para baixar o Insomnia](https://insomnia.rest/download)

- Já no aplicativo Insomnia, podemos criar esse nosso objeto da seguinte forma:

#### Passo 01
![Passo 1](https://i.imgur.com/cUNHuTF.png)

- Em vermelho ao adicionar o método que queremos, neste caso o método POST e logo depois adicionarmos o link que o APIs Generator gerou para o método POST, podemos criar um novo objeto.

- Em rosa selecione o Body e vá na opção JSON, é ali que vamos criar nosso novo objeto, da mesma forma em que o primeiro foi escrito.

#### Passo 02

![Passo 2](https://i.imgur.com/5wZtt0s.png)

- Em rosa é o espaço para criar o nosso novo objeto, já que o método POST nos oferta essa função, a de adicionar/criar um novo objeto.

- Depois de criar o objeto JSON clique em SEND (para enviar para nossa API que foi criada um novo objeto, normalmente na vida real quem faz isso é o frontend que envia para a nossa API do back para ser criado esse novo cadastro, por exemplo)

- Note que ao lado direito em vermelho foi retornado o Status Code 201 Created, ou seja, 200 é da familia status code de sucesso, então nosso novo objeto foi criado com sucesso. Parabéns. 

- Agora volte ao navegador ao site API Generator e acesse o método GET, ou pode fazer pelo próprio Insomnia (Verá que agora aparecem dois objetos diferentes)


### Método PUT 

- O método PUT é aquele que serve para fazer alterações nos nossos objetos, então, seguindo os mesmos exemplos dos outros métodos, caso eu queria alterar o nome do meu Objeto 1, que seria este:

```
    {
        "nome": "Henrique",
        "turma": "Backend",
        "idade": 19,
        "id": 1
    }
```
- IMPORTANTE: O PUT ele age baseado no id de um objeto, então se eu quero editar o objeto 2 eu pego a rota para o objeto 2, por exemplo: https://apigenerator.dronahq.com/api/nGPawxMh/alunos/2

- Vamos supor que agora você queria mudar o nome e a turma para: Henrique Patricio e FullStack, basta você dar um get no id 1 (já que o Henrique é nosso primeiro objeto). Você pode dar um GET by ID no primeiro objeto para ele aparecer na tela:

#### Passo 01

![Passo 01 - PUT](https://i.imgur.com/TAACaM2.png)

- Desta forma, o Insomnia vai retornar para você no lado direito (em vermelho) o resultado do GET by ID 1, neste caso é o Henrique apenas. Depois disto, você copiará para o lado esquerdo no JSON (caso você esteja com algum outro objeto ali, senão tiver igual o meu exemplo em que meu objeto que aparece no JSON já é o 1, não faça nada)

- Depois você mudara o método para o PUT e colocar o link do objeto 1: https://apigenerator.dronahq.com/api/nGPawxMh/alunos/1

- Agora você fará as alterações que quiser no objeto, neste caso queremos mudar de apenas Henrique para Henrique Patricio e também de Backend para FullStack.

![Passo 02 - PUT](https://i.imgur.com/FH1AQ3c.png)

- Em vermelho podemos ver que foi colocado no Método PUT e a rota para o objeto 1

- Em preto é o resultado do nosso GET no passo anterior.

- Em ciano é a nossa alteração desejada já feita. Depois de feita basta apenas clicar em SEND, pronto, se você voltar para o navegado no API Generator e dar um GET verá que o seu objeto 1 teve suas alterações.


### Método DELETE

- O método DELETE é bem autoexplicativo, ele funciona para excluir um objeto. Para executar este método, basta seguir os mesmos passos anteriores, você vai mudar o método no Insomnia para DELETE, pegar a rota do objeto que você quer excluir e depois clicar em SEND. Desta forma ele vai ter excluido seu objeto desejado.

## Promises e funções assíncronas no JS - Dia 08

### Promise

- Promise ou promessa é um objeto JavaScript que representa a eventual conclusão ou falha de uma operação assíncrona. Ela permite que você trabalhe com operações assíncronas de maneira mais fácil e eficiente, evitando o chamado "callback hell" e permitindo um código mais legível e organizado.

- Uma Promise pode estar em um de três estados:

    > - Pendente (Pending): Este é o estado inicial da Promise, quando a operação ainda não foi concluída.  
    > - Resolvida (Fulfilled): A operação assíncrona foi concluída com sucesso e o valor resultante está disponível. Neste ponto, a Promise é considerada "cumprida".
    > - Rejeitada (Rejected): A operação assíncrona falhou, e um motivo de falha (geralmente um objeto Error) é fornecido. Neste ponto, a Promise é considerada "rejeitada".

- Após criar uma Promise, você pode encadear métodos .then() e .catch() para lidar com a resolução ou rejeição da Promise. Isso permite que você execute código dependendo do resultado da operação assíncrona.

### Callbacks

- Callbacks são funções que passam com parâmetro outras funções, na ideia de que quando o evento principal tiver acabado ela execute o evento secundário (função passada como parâmetro)

```
    setTimeout(function () {
        console.log("Este é um evento após 2 segundos")
    }, 2 * 1000)
```
- Executa a função setTimeout() que define um tempo de resposta, neste caso de 2 segundos, e passa dentro da função o que você quer executar.


### Funções assíncronas

- As funções assíncronas são de facíl entendimento, servem para executar trechos de código em paralelismo a outros trechos. Por exemplo, imagine que você está preparando seu café da manhã; De primeira vista você quer fazer café, então você coloca a água para esquentar, e, enquanto esquenta você faz um pão com queijo. Note que a função esquentarAgua() não depende da função fazerPao() e vice-versa. Essa é a ideia da função assíncrona. 

- Um exemplo prático de função assíncrona é 

```
    function teste(){
    console.log('Iniciando')
    let exemplo = fetch('http://httpbin.org/get').then((res) => {
        console.log('Aqui está dentro do then')
        console.log()
    })
    console.log("Depois de tudo")
}

```

- Este é um exemplo que funciona da seguinte forma: 
    > - 1º Ele da um console.log('iniciando')
    > - 2º Ele dá um fetch da API e aguarda uma resposta dela, e enquanto isso ele realiza o passo 3
    > - 3º Ele executará o console.log("Depois de tudo")
    > - 4º Ele entrará no then, pois vai ser uma promise com sucesso e executará o trecho de código dentro dele

- Para fazer com que o servidor guarde a resposta da API e execute o then primeiro do que o console.log("Depois de tudo"), podemos utilizar o async

### Funções assíncronas async

- As funções async são as assíncronas, mas liberam uma funcionalidade chamada await, que resolve o problema de esperar a resposta da API para depois executar os outros códigos.

- É necessário declarar a função async como: async function 'nome da função'(){}

```
    async function teste(){
    console.log('Iniciando')
    let exemplo = await fetch('http://httpbin.org/get').then((res) => {
        console.log('Aqui está dentro do then')
        console.log()
    }).catch(error => {
        console.log("A API retornou um erro: " + error)
    })
    console.log("Depois de tudo")
}

```
- Desta forma ele executarpá da seguinte forma: 
    > - 1º Ele da um console.log('iniciando')
    > - 2º Ele dá um fetch da API e espera até que a Promise seja resolvida, Fullfield ou Resjected
    > - 3º Ele executará o que está dentro do then, caso seja Fullfield (verdadeira e sem erros) ou executará a linha de código do catch caso seja Rejected
    > - 4º Ele entrará o console.log("Depois de tudo")

## Praticando Promises e Funções Assíncronas - Dia 09

- Neste repositório estou subindo algumas práticas que estou fazendo, consumindo APIs.

### Transformador de USD para BRL
- Transformador de USD para BRL -> Seu objeto é consumir a API: [Economia API](https://economia.awesomeapi.com.br/last/USD-BRL) que consiste em fazer a conversão. A ideia do projeto é que o usuário entre com a quantidade de dolares e o código retorna o equivalente em reais (R$)

![Imagem Projeto Transformador USD para BRL](https://i.imgur.com/VWiM7Zn.png)

### Buscador de CEP
- Buscador de CEP -> Seu objetivo é consumir a API: [Via Cep](https://cep.awesomeapi.com.br/json/) que consiste em buscar o cep digitado na API. A ideia do projeto é a de praticar pois, este tipo de API é comumente utilizada em forms.

![Imagem Projeto ViaCep](https://i.imgur.com/bUplEQ8.png)