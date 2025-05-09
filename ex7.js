let total = 0;

// Função para adicionar item na lista
function adicionarItem() {
  const itemInput = document.getElementById('itemInput');
  const priceInput = document.getElementById('priceInput');
  const quantityInput = document.getElementById('quantityInput');
  const feedback = document.getElementById('feedback');
  const itemList = document.getElementById('itemList');

  const itemText = itemInput.value.trim();
  const itemPrice = parseFloat(priceInput.value);
  const itemQuantity = parseInt(quantityInput.value);

  // Verificar se os campos estão preenchidos corretamente
  if (itemText === "" || isNaN(itemPrice) || isNaN(itemQuantity) || itemQuantity < 1) {
    feedback.textContent = "Por favor, preencha todos os campos corretamente!";
    feedback.style.color = "#f44336"; // Cor vermelha para erro
    return;
  }

  // Calcular o total do item
  const itemTotal = itemPrice * itemQuantity;

  // Criar um novo item na lista
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  // Adicionar o texto ao item
  listItem.textContent = `${itemText} - R$ ${itemPrice.toFixed(2)} x ${itemQuantity} = R$ ${itemTotal.toFixed(2)}`;

  // Criar o botão de remover
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.classList.add('remove-btn');
  removeBtn.onclick = function() {
    removerItem(listItem, itemTotal);
  };

  // Criar o botão de comprar
  const buyBtn = document.createElement('button');
  buyBtn.textContent = 'Comprar';
  buyBtn.classList.add('buy-btn');
  buyBtn.onclick = function() {
    comprarItem(listItem, itemTotal);
  };

  // Adicionar os botões ao item
  listItem.appendChild(removeBtn);
  listItem.appendChild(buyBtn);

  // Adicionar o item à lista
  itemList.appendChild(listItem);

  // Atualizar o total
  total += itemTotal;
  atualizarTotal();

  // Limpar os campos
  itemInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";

  // Feedback de item adicionado
  feedback.textContent = `Item "${itemText}" adicionado com sucesso!`;
  feedback.style.color = "#4caf50"; // Cor verde para sucesso
}

// Função para remover um item da lista
function removerItem(item, itemTotal) {
  const feedback = document.getElementById('feedback');
  const itemText = item.textContent.replace("RemoverComprar", "").trim();

  // Remover o item da lista
  item.remove();

  // Atualizar o total
  total -= itemTotal;
  atualizarTotal();

  // Feedback de item removido
  feedback.textContent = `Item "${itemText}" removido!`;
  feedback.style.color = "#f44336"; // Cor vermelha para erro
}

// Função para comprar um item
function comprarItem(item, itemTotal) {
  const feedback = document.getElementById('feedback');
  const itemText = item.textContent.replace("RemoverComprar", "").trim();

  // Atualizar o total
  total -= itemTotal;
  atualizarTotal();

  // Remover o item da lista
  item.remove();

  // Feedback de item comprado
  feedback.textContent = `Item "${itemText}" comprado!`;
  feedback.style.color = "#388e3c"; // Cor verde para sucesso
}

// Função para atualizar o total
function atualizarTotal() {
  const totalValue = document.getElementById('totalValue');
  totalValue.textContent = total.toFixed(2);
}
