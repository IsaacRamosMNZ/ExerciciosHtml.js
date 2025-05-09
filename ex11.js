function calcularNotas() {
    const valor = parseFloat(document.getElementById('valorInput').value);
    const resultadoDiv = document.getElementById('result');
    const notaContainer = document.getElementById('notaContainer');
  
    // Verificar se o valor inserido é válido
    if (isNaN(valor) || valor <= 0) {
      resultadoDiv.textContent = "Por favor, insira um valor válido.";
      resultadoDiv.style.color = "#f44336"; // Cor vermelha para erro
      return;
    }
  
    // Limpar o conteúdo da div que contém as notas
    notaContainer.innerHTML = '';
  
    let valorRestante = valor;
  
    // Calcular a quantidade de notas e moedas necessárias
    let notas100 = Math.floor(valorRestante / 100);
    valorRestante %= 100;
  
    let notas50 = Math.floor(valorRestante / 50);
    valorRestante %= 50;
  
    let notas20 = Math.floor(valorRestante / 20);
    valorRestante %= 20;
  
    let notas10 = Math.floor(valorRestante / 10);
    valorRestante %= 10;
  
    let notas2 = Math.floor(valorRestante / 2);
    valorRestante %= 2;
  
    let moedas1 = Math.floor(valorRestante / 1); // Moeda de R$1
    valorRestante %= 1; // Se sobrar algum valor abaixo de 1 real, vamos ignorar.
  
    // Exibir as notas e moedas de acordo com os valores calculados
    if (notas100 > 0) adicionarNotaOuMoeda(notas100, "R$100");
    if (notas50 > 0) adicionarNotaOuMoeda(notas50, "R$50");
    if (notas20 > 0) adicionarNotaOuMoeda(notas20, "R$20");
    if (notas10 > 0) adicionarNotaOuMoeda(notas10, "R$10");
    if (notas2 > 0) adicionarNotaOuMoeda(notas2, "R$2");
    if (moedas1 > 0) adicionarNotaOuMoeda(moedas1, "Moeda de R$1");
  
    // Exibir o resultado final
    resultadoDiv.textContent = `Para R$${valor.toFixed(2)}, você precisa de:`;
    resultadoDiv.style.color = "#4caf50"; // Cor verde para sucesso
  }
  
  // Função para adicionar as notas e moedas ao layout
  function adicionarNotaOuMoeda(quantidade, tipo) {
    const notaDiv = document.createElement('div');
    notaDiv.classList.add('nota-item');
    notaDiv.textContent = `${quantidade} x ${tipo}`;
    document.getElementById('notaContainer').appendChild(notaDiv);
  }
  