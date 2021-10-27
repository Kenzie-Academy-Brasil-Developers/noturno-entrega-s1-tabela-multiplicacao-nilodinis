# Entrega: Tabela de Multiplicação #

Para começar faça clone deste [repositório](https://classroom.github.com/a/tWDWlD1x)

Nessa entrega você vai construir uma tabela de multiplicação. Você deve criar uma função que recebe um parâmetro "n" do tipo inteiro que vai ditar o tamanho da sua tabela (10x10, 12x12, 16x16, etc...).

Sua função deve utilizar o conceito de __loops aninhados__ para montar um __array multidimensional__. Com o array multidimensional montado, você deve utilizar o __console.table()__ no seu array para mostrar em forma de tabela no console. Veja um exemplo de um array multidimensional:

```js
let meuArray = [["banana", "maçã"], ["uva", "pera"], ["goiaba", "morango"]]

meuArray[0] // retorna ["banana", "maçã"]
meuArray[0][1] // retorna "maçã"
meuArray[2] // retorna ["goiaba", "morango"]
meuArray[2][0] // retorna "goiaba"
```

Veja o que acontece ao executar um "console.table()" na variável usada no exemplo:

<img src="./assets/tabelaDeMultiplicacao exe1.png" width="100%">

Agora imagine que você está construindo uma tabela para que professores do ensino fundamental a usem em sala de aula. Isso que deve aparecer ao executar a sua função no Console do navegador:

<img src="./assets/tabelaDeMultiplicacao exe2.png" width="100%">


### Início

Você pode usar o seguinte Script como ponto de partida:

```js
    function nomeDaFuncao() { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
        // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
        let x = [];
        for (let i = 0; i <= 10; i++) {
            x[i] = [];
        }
        console.table(x)
    }

```

## Bônus

Agora vamos deixar sua função um pouco mais dinâmica! Altere a sua função para que ela recebe um parâmetro n do tipo inteiro que permita a geração de tabelas de diferentes tamanhos, por exemplo, 12x12, 16x16...

Veja abaixo, um exemplo do resultado esperado:

<img src="./assets/tabelaDeMultiplicacao exe3.png" width="100%">


__Se você quiser entender um pouco mais sobre o [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)__ - [Link para documentação](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
