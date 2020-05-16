

- pizza.js está com um JSON porque como estamos usando um arquivo, não estamos em um servidor não tem como fazer uma requiseção, um fet por exemplo a um webservices qualquer que vá retornar o array das pizzas.

- A div models tem modelos que vamos copiar para poder exibir na tela, ela não aparece na tela pois no css está como display: none, servindo simplesmente para deixar o HTML dentro dela disponivél para o javascript copiar e usar como um modelo.

- .cloneNode(true) -> clona um item pegando tudo dentro dele.


## Passo 1 - LISTAR AS PIZZAS 

- No arquivo script.js, mapeia o pizzaJson, então com o comando: pizzaJson.map() e dentro cria uma função recebendo dois parametros, o primeiro sendo o próprio item que será cada pizza, e o index que é o número do array daquele item (começando do zero sempre) e em seguida colocando cada coisa no lugar.

## Passo 2 - CLICAR NAS PIZZAS 

- Adicionar um evento na <a>, e em seguida criar uma função para primeiramente cancelar a ação de recarregar a página

- A parte do HTML com a class '.pizzaWindowArea' no css está com display none para não aparecer a todo momento. Ao clicar na pizza deve executar uma função que mude o display para flex e apareça o modal para selecionar tamanho, quantidade.

### APARECER COM UMA ANIMAÇÃO

- Deixa a opacidade da parte do HTML com a class '.pizzaWindowArea' igual a zero, torna o display flex e após alguns segundos ela aparece.

## Passo 3 - LEVAR INFORMAÇÕES DAS PIZZAS CLICADAS PARA O MODAL

- Pimeiramente pegar a informação, para isso dentro da 'a' no javaScript, usa o element.target pois clicamos no próprio elemento que é o elemento 'a', então precisa-se sair dele para o elemento principal que é o pizzaItem e em seguida um getAttribute para pegar o elemento que clicou retornando o index dele.

- para preencher o modal faz o      c('.pizzaInfo h1').innerHTML = pizzaJson[key].name; para cada campo.

## Passo 4 - RESETAR ITENS DO MODAL

- Primeiro passo, desselecionar qualquer um que estejá marcado. 

- Selecionar o grande como padrão para todas as pizzas, colocando dentro do forEach com uma verificação.


## Passo 5 - QUANTIDADE DE ITENS

- Cria uma variavél e define o valor de 1.

- Deve resetar também a variavél de quantidade, para que ela sejá sempre 1 como padrão.

- Antes de mostrar o modal seta o valor como 1.


## Passo 6 - AÇÕES

- Cancelar/fechar o modal, primeiro cria uma função para fechar e depois chama onde for preciso.

## Passo 7 - BOTÕES MAIS E MENOS

- 

## Passo 8 - TAMANHOS

- 


## Passo 9 - ADICIONAR AO CARRINHO

- Cria um array para armazenar as informações das pizzas, com tamanho, qual é e quantidade.

- Cria uma variavél para toda vez que abrir o modal ela armazene o index da pizza e assim sabermos qual é.

- E o evento no botão para quando clicar executar o push que adiciona dentro do array.

## Passo 10 - FILTRO DO CARRINHO

- Pizzas com  o mesmo id e tamanho devem aumentar apenas na quantidade das pizzas, e não dos itens do carrinho e para que isso aconteça cria uma variavel nesse caso o identifier para ser usado na condição.

- Verificar se o identifier já existe no array e em seguida se encontar alterar a quantidade de pizzas.


## Passo 11 - ATUALIZANDO INFORMAÇÕES

- Criar uma função que mostre ou não o carrinho dependendo da quantiade de itens que tiverem no carrinho.

- E preencher os itens no próprio carrinho.


## Passo 12 - BOTÕES MAIS E MENOS NO CARRINHO

- 

## Passo 13 - SUBTOTAL, TOTAL, DESCONTO

- Cria as variaveis dentro da função que atualiza e antes do for cria as variaveis e inicia com zero.

- Coloca subtotal dento do for para que de cada item ele receba o valor dela vezes a quantidade.

- 

## Passo 14 - ADICIONAR QUANTIDADE NO ICONE DO CARRINHO E EVENTO DE CLICAR


- 






# COMANDOS COM EXPLICAÇÃO DE SUA FUNÇÃO NO SISTEMA

- const c = (elemento) => document.querySelector(elemento); -> função para não digitar **document.querySelector** toda vez mas apenas **c**, retorna somente o item e acabou.


- const ca = (elemento) => document.querySelectorAll(elemento); -> função para não digitar **document.querySelectorAll** toda vez mas apenas **ca**, retorna um array com os itens que ele encontrou.


- let pizzaItem = c('.models .pizza-item').cloneNode(true); -> clona o modelo HTML que está em models, pizza-item e repete para cada item, nesse caso cada pizza.


- pizzaItem.querySelector('.pizza-item--img img').src = item.img; -> entra na class pizza-item--img do HTML, dentro dela seleciona img, acessa o src e troca por item.img que é a imagem vinda do pizza.js


- pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;  -> busca no pizza.js o nome de cada pizza e adiciona na parte referente a class .pizza-item--name.


- pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; -> -> busca no pizza.js a preço de cada pizza e adiciona na parte referente a class .pizza-item--price, fixando dois algarismos após a virgula.


- pizzaItem.querySelector('a').addEventListener('click', (element) => { element.preventDefault();    }); -> adiciona um evento na <a>(tag a) que é o click e previne a ação padrão que é recarregar a página após o click.


- c('.pizzaWindowArea').style.opacity = 0; -> torna a parte em HTML refente a class invisivél/ transparente.


-  setTimeout(() => {   c('.pizzaWindowArea').style.opacity = '1';   }, 200); -> torna a opacidade visivel após 200 milisegundos.

-  let key = element.target.closest('.pizza-item').getAttribute('data-key'); -> sai do elemento 'a' para o elemento principal que é o '.pizzaWindowArea' e pega o index do item clicado.


- c('.pizzaInfo h1').innerHTML = pizzaJson[key].name; -> ao clicar em uma pizza ele limpa o campo e busca o nome da pizza apartir da key que é o index de cada pizza.


- c('.pizzaInfo--size.selected').classList.remove('selected'); -> pega o item que está selecionado, acessar a lista de classes e remover a classe de seleção.


- ca('.pizzaInfo--size ').forEach((size, sizeIndex) => {   size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];   });  --> 
ca siginifica selecionar todos, logo existe mais de um campo com a class '.pizzaInfo--size ', e para percorrer todos os campos selecionados com o querySelector usamos um forEach recebendo o próprio item chamado de size e o index chamado de size index para saber quem é o item 0, 1 e 2, feito isso estaremos dentro do  '.pizzaInfo--size ' e dentro dele tem um span que é onde ficará o tamanho, por fim diz que cada item(size) vai entrar no span recebendo o index de cada pizza com os tamanhos.
 

- if (sizeIndex == 2) {   size.classList.add('selected');  } -> deixa a opção  marcada como padrão para todas pizzas.


- c('pizzaInfo--qt').innerHTML = modalQt; -> seta o 1 como quantidade padrão  para toda vez abrir o modal;


- c('.pizza-area').append(pizzaItem); -> o local do HTML adiciona cada pizza com a estrutura.


- c('.pizzaInfo--size.selected').classList.remove('selected');  size.classList.add('selected'); }); -> toda vez que clicar em um tamanho remove a seleção do que estava e coloca no clicado.


- let sizeCart = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key')); ->  cada tamanho tem um data-key no html, então, size vai receber esse data-key do tamanho selecionado com o parseInt para aparecer um valor inteiro.


- let identifier = pizzaJson[modalKey].id + '&' + sizeCart; -> identfier recebe o id da pizza selecionada com o tamanho selecionado que será usado para identificar se existem pizzas iguais no mesmo pedido.


- let keyCart = cart.findIndex((item) => item.identifier == identifier); ->  o findIndex vai verificar se o identificador já existe no array, se achar retorna o index dele, se não achar retornará -1.


- if (keyCart > -1) {  cart[keyCart].quantidade += modalQt;    } ->  se encontrar altera a quantidade do pedido.

- cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            tamanho: sizeCart,
            quantidade: modalQt
        });                     -> Adiciona no carrinho o pedido com os seguintes campos.




- let pizzaCart = pizzaJson.find((item) => item.id == cart[i].id); ->  se dentro do cart tiver um id igual a item.id(estao dentro de pizzaJson) retorna para pizzaCart e utilizamos find ao invés de findIndex para retornar os itens da pizza e não somente a posição do vetor.


- cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].quantidade; -> pega a quantidade de pizzas do carrinho.


- cart.splice(i, 1); -> remove do carrinho o item da posição 'i' e remove apenas um item.


- subtotal += pizzaCart.price * cart[i].quantidade; -> o subtotal recebe o valor dele mesmo mais o valor unitario da pizza vezes a quantidade que está no carrinho.