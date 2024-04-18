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