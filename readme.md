# Repositório feito para demarcar meu progresso em Node.js

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
    > - Testes Unitários: Tem a função de testar apenas um trecho do código, de forma isolada. Quando é feito a