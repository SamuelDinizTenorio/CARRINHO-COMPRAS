// Inicializa o valor total da compra como 0
let total = 0;

// Limpa a lista de produtos exibida na tela
document.getElementById('lista-produtos').innerHTML = '';

// Inicializa o valor total exibido na tela como 0
document.getElementById('valor-total').innerHTML = '0';

// Função para adicionar um produto ao carrinho
function adicionar() {
  // Obtém o valor da quantidade digitada pelo usuário
  let quantidade = document.getElementById('quantidade').value;
  // Obtém o nome do produto selecionado pelo usuário
  let produto = document.getElementById('produto').value;
  // Extrai o nome do produto da string completa
  let nomeProduto = produto.split('-')[0];
  // Extrai o valor do produto da string completa e converte para número
  let valorProduto = produto.split('R$')[1];
  // Calcula o subtotal do produto (quantidade * valor)
  let subTotal = valorProduto * quantidade;
  // Obtém a referência para o elemento HTML que exibe o valor total
  let campoTotal = document.getElementById('valor-total');
  // Obtém a referência para o elemento HTML que lista os produtos no carrinho
  let carrinho = document.getElementById('lista-produtos');

  // Verifica se um produto válido foi selecionado
  if (!produto || produto.innerHTML == "") {
    // Exibe um alerta caso nenhum produto tenha sido selecionado
    alert("Selecione um produto válido!");
    // Interrompe a função
    return;
  }

  // Verifica se a quantidade informada é válida
  if (quantidade <= 0 || quantidade.innerHTML == "") {
    // Exibe um alerta caso a quantidade seja inválida
    alert("Insira uma quantidade válida!");
    // Interrompe a função
    return;
  }

  // Adiciona um novo item à lista de produtos no carrinho
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${valorProduto}</span>
  </section>`;

  // Acumula o subtotal ao valor total da compra
  total += subTotal;

  // Atualiza o valor total exibido na tela
  campoTotal.innerHTML = `R$ ${total}`;

  // Limpa o campo de quantidade para a próxima adição
  document.getElementById('quantidade').value = 0;
}

// Função para limpar o carrinho e zerar o valor total
function limpar() {
  // Zera o valor total da compra
  total = 0;
  // Limpa a lista de produtos exibida na tela
  campoTotal.innerHTML = '';
  // Limpa a lista de produtos no carrinho
  carrinho.innerHTML = '';
}