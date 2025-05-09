function verificarPalindromo() {
    const inputTexto = document.getElementById('palindromoInput').value;
    const feedback = document.getElementById('feedback');
  
    // Remover espaços e transformar em minúsculas
    const textoFormatado = inputTexto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Verificar se o texto é um palíndromo
    const textoReverso = textoFormatado.split('').reverse().join('');
    
    // Exibir resultado
    if (textoFormatado === textoReverso) {
      feedback.textContent = `"${inputTexto}" é um palíndromo!`;
      feedback.style.color = "#4caf50"; // Cor verde para sucesso
    } else {
      feedback.textContent = `"${inputTexto}" não é um palíndromo.`;
      feedback.style.color = "#f44336"; // Cor vermelha para erro
    }
  }
  