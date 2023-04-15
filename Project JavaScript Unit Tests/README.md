<summary><strong>📝 Estrutura do projeto</strong></summary><br />

  As funções a serem implementadas estão dentro da pasta `src` e seus respectivos testes estão na pasta `tests`. O nome dos arquivos também segue uma ordem definida. Basicamente, os arquivos de teste possuem o nome do arquivo alvo (arquivo da funcionalidade) acrescido do nome `.spec.js`.

  Cada função possui um bloco de comentários em suas primeiras linhas explicando qual é o trabalho que a função deve realizar.

# Requisitos Obrigatórios

### 1. Implemente a função `average`

<details>
  <summary>A função `average` recebe um array de tamanho variável e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado.</summary><br/> 
  
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

  **O que será testado:**

  - A função `average` deve retornar a média de seus valores ao receber um array de números;
  - A função `average` deve retornar `undefined` ao receber um array que contém valores não numéricos;
  - A função `average` deve retornar `undefined` ao receber um array vazio.

</details>

---

### 2. Implemente os casos de teste para a função `numbers`

<details>
  <summary>A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.</summary><br/> 
  
  Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

  **O que será testado:**

  - A função `numbers` deve retornar `true` quando o array passado por parâmetro contém somente números.

</details>

---

### 3. Implemente a função `vqv`

<details>
  <summary>Use template literals para escrever a função `vqv` que recebe o seu nome e a sua idade e retorna o parágrafo descrito abaixo:</summary><br/>

  ```javascript
  `Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
  ```

  Caso a função `vqv` seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - `vqv` deve ser uma função;
  - A função `vqv` deve retornar dados do tipo string;
  - A função `vqv` deve retornar a frase esperada quando passados parâmetros de nome e idade;
  - A função `vqv` deve retornar `undefined` quando chamada sem parâmetro.

</details>

---

### 4. Implemente os casos de teste para a função `circle`

<details>

  <summary>A função `circle` recebe o raio de um círculo e retorna um objeto contendo as suas informações: Raio, Área e Circunferência. Se não for especificado um raio, a função retorna `undefined`.</summary></br>
  
  Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  **O que será testado**

  - O teste da função `circle`, ao receber um raio, deve retornar um objeto com as informações corretas (Raio, Área e Circunferência).

</details>

---

### 5. Implemente a função `createStudent`

<details>
<summary>A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:</summary></br>

  1. **name**, contendo o nome passado como parâmetro;
  2. **feedback**, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

  O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `createStudent` deve retornar um objeto que contenha duas chaves: `name`, contendo o nome passado como parâmetro; e `feedback`, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

</details>

---

### 6. Implemente os casos de teste para a função `productDetails`

<details>
  <summary>A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:</summary></br>

  ```javascript
  productDetails('Alcool gel', 'Máscara');
  ```

  **Retorna:**

  ```js
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  ```

  Essa função já está implementada no arquivo `src/productDetails.js`. Escreva pelo menos cinco testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

  **O que será testado**

  - O teste da função `productDetails`, ao receber duas strings, deve retornar um array de objetos e se cada objeto contém os dados necessários.

</details>

---

### 7. Implemente as funções `calculator` e `arrayGenerator`

<details>
  <summary>A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:</summary></br>
  - sum;
  - mult;
  - div;
  - sub.

  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```

  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  - o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  - o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
  O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `calculator` deve retornar os valores esperados;
  - A função `arrayGenerator` deve retornar os valores esperados.

</details>

---

### 8. Implemente a função `myCounter`

<details>
  <summary>A função `myCounter` possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.</summary></br>

   Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `myCounter` deve retornar os dados esperados de acordo com o que está implementado no teste.

</details>

---

### 9. Implemente os casos de teste para a função `getCharacter`

<details>

  <summary>A função `getCharacter` já está implementada e recebe como parâmetro de entrada uma string que representa o nome de uma personagem de ficção. Ela retorna um objeto contendo o nome da personagem, a sua classe e as suas frases.</summary></br>

  Exemplo:

  ```javascript
  getCharacter('Arya');
  ```

  **Retorna:**

  ```javascript
  {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.']
  }
  ```

  Essa função já está implementada no arquivo `src/getCharacter.js`. Escreva pelo menos seis testes para essa função no arquivo `tests/getCharacter.spec.js` para garantir que a implementação de `getCharacter` está correta.

  **O que será testado**

  - O teste da função `getCharacter` ao não receber nenhum parâmetro, deve retornar `undefined`.
  - O teste da função `getCharacter` ao receber uma string, deve retornar os dados esperados, de acordo com a tabela apresentada no arquivo de testes.
  - O teste da função `getCharacter` deve verificar se o parâmetro é _case insensitive_, ou seja, não faz diferença entre letras maiúsculas e minúsculas.

</details>

---

### 10. Implemente a função `createMenu`, bem como seus casos de teste

<details>
  <summary>Esse último requisito vai guiar você por um rico processo de Desenvolvimento Orientado a Testes ou TDD - Test Driven Development</summary></br>

  **Leia com atenção os pontos abaixo.**

  Imagine a seguinte situação: você é responsável por escrever o código do sistema de pedidos de um restaurante. Nesse sistema será possível cadastrar o menu do restaurante. 
  Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu que foi cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  O menu é cadastrado separando as comidas (`food`) das bebidas (`drinks`). Este menu é passado em um objeto, seguindo o exemplo abaixo:

  ```js
    {
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    }
  ```

  O objeto tem duas propriedades: `food` e `drinks`. Cada uma dessas propriedades tem um `value` que também é um objeto, onde as propriedades (`keys`) desse objeto são os itens do restaurante, como por exemplo `coxinha` e a `value` é o valor/preço daquele item, exemplo, `3.90`. 
  
  Você deverá se orientar através dos tópicos abaixo para garantir o bom desenvolvimento do sistema.

  **IMPORTANTE - BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js`** 

  Se surgirem dúvidas, não deixe de consultar o nosso conteúdo sobre [TDD](https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-em-jest/eb321d06-e126-4c84-8d7e-6134973bf081/conteudos/b02b5214-5797-436a-9c3f-aa9344361bd9/testando-em-pequenos-passos/d33319dc-ee06-4e09-97d6-4db1ac440e25?use_case=side_bar).

  > **Observação:** Todos os testes devem ser escritos no arquivo `tests/restaurant.spec.js` e todas as implementações devem ser escritas no arquivo `src/restaurant.js`.


  1. Escreva dois testes, um que verifica se a função `createMenu()` **retorna** um objeto que possui a chave `fetchMenu` e outro verificando se o valor da chave fetchMenu do objeto retornado pela função `createMenu()` é uma função.

  > **De olho na dica 👀:** Lembre-se: uma propriedade de um objeto pode receber qualquer valor, além de números, strings, objetos e arrays. Podemos passar como `value` de uma propriedade (`key`) de um objeto uma função.

  2. Escreva um teste que verifica se o objeto retornado pela função `createMenu({ food: {}, drinks: {} }).fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drinks`.

  3. Escreva um teste que verifica se o menu passado pra função `createMenu()` é idêntico ao menu recuperado pela função `createMenu({ food: {}, drinks: {} }).fetchMenu()`.

  4. Agora vamos começar a desenvolver a nossa função `createMenu()`! Vá até o arquivo `restaurant.js`. 
  - A função `createMenu` deve receber um objeto como parâmetro e retornar um outro objeto, contendo outras propriedade que iremos desenvolver nos tópicos abaixo.
  - Passe um parâmetro para função `createMenu`, esse parâmetro será um objeto. Depois disso, a função `createMenu` deve retornar um objeto onde uma das chaves é `fetchMenu`, o valor dessa chave é uma função e essa função retorna o objeto passado como parâmetro para `createMenu`.

  > **De olho na dica 👀:** Da uma olhadinha no teste e na dica do tópico 1.

  5. Escreva um teste que verifica se a propriedade `consumption` do objeto retornado pela função `createMenu({ food: {}, drinks: {} })`, após a criação do menu, retorna um array vazio.

  6. Volte ao arquivo `restaurant.js` e adicione ao objeto retornado por `createMenu()` uma chave `consumption` que, como valor inicial, tem um array vazio.

  7. A função `createMenu` retorna um objeto. Certo? Esse objeto até aqui já possui algumas chaves(`keys`). 
  Nosso objeto retornado pela função `createMenu` tem essa aparência:
  
  ```
  {
    fetchMenu: () => [Function: fetchMenu],
    consumption: [],
  }

  ```
  
Agora precisamos que você escreva um teste levando em consideração que nosso objeto vai receber mais uma chave, que é `order` e essa chave tem como valor uma função. 

Escreva um teste para a seguinte situação: caso o valor (que nesse caso é uma string) passada por parâmetro para `order` não conste no objeto passado como parâmetro para `createMenu` (nem em `food` ou `drinks`), o retorno da chave `order` deve ser:
  - exibir a mensagem `"Item indisponível"`;
  - e não alterar a chave `consumption`.
  - Caso o valor exista no objeto passado como parâmetro para `createMenu` o item deve ser adicionado ao array `consumption`.

Veja o exemplo abaixo:

   ```
  const objetoRetornadoCreateMenu = createMenu(
    {food: {coxinha: 3.90, sanduiche: 9.90},
    drinks: {agua: 3.90, cerveja: 6.90}});
  
  objetoRetornadoCreateMenu.order('coxinha')

  objetoRetornadoCreateMenu.consumption // deve retornar ['coxinha']  

  objetoRetornadoCreateMenu.order('picanha') // deve retornar Item indisponível 

```

  8. Vá até o arquivo `restaurant.js` e na nossa funcão `createMenu` que retorna um objeto, iremos criar a chave `order`.
  
  A chave `order` que tem como valor uma função que ao receber uma string como parâmetro, adiciona essa string ao array da chave `consumption`.

  * Caso o valor passado por parâmetro não conste no menu (nem em `food` ou `drinks`), o retorno da chave `order` deve:
  - exibir a mensagem `"Item indisponível"`;
  - não alterar a chave `consumption`.

  9. Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `consumption` contém os itens pedidos.

  10. Escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.

  11. Escreva um teste que verifica que, ao chamar a função `pay()` que será uma propriedade do objeto retornado pela função `createMenu`, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em `consumption`. A propriedade `pay` tem como valor uma função.

  12. Adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que percorre por todos os itens de `consumption`, soma o preço deles e retorna o valor somado acrescido de 10%.

   > **De olho na dica 👀:** Para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drinks`, para pegar o preço de cada item do menu.

  **O que será testado**

  * A função `createMenu()` deve retornar os dados esperados.
  * O teste da função `createMenu()` deve verificar cada um dos retornos da função e se estes retornos têm o comportamento esperado.

</details>
