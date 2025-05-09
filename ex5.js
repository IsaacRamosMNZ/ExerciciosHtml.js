function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(anoNascimento)) {
      resultado.textContent = "Por favor, insira um ano de nascimento válido.";
      resultado.style.color = "#f0f0f0"; // Cor suave de erro
      return;
    }
  
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
  
    let mensagem = "";
  
    // Classificação por idade
    if (anoNascimento < 1800) {
      mensagem = "Você é milenar (nascido antes de 1800).";
    } else if (idade <= 12) {
      mensagem = "Você é uma criança.";
    } else if (idade >= 13 && idade <= 17) {
      mensagem = "Você é um adolescente.";
    } else if (idade >= 18 && idade <= 59) {
      mensagem = "Você é um adulto.";
    } else if (idade >= 60) {
      mensagem = "Você é um idoso.";
    }
  
    // Exibindo o resultado
    resultado.textContent = `Idade: ${idade} anos. ${mensagem}`;
    resultado.style.color = "#e0f7fa"; // Cor suave para o resultado
  }
  