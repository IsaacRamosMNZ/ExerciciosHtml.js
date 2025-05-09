function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(numero)) {
      resultado.textContent = "Por favor, insira um número válido.";
      resultado.style.color = "#f0f0f0"; // Cor suave de erro
      return;
    }
  
    let tabuadaHtml = "<div class='tabuada'>";
  
    // Gerar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
      tabuadaHtml += `${numero} x ${i} = ${numero * i}<br>`;
    }
  
    tabuadaHtml += "</div>";
  
    // Exibir a tabuada gerada
    resultado.innerHTML = tabuadaHtml;
  }
  