function contar() {
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;
    const passo = document.getElementById('passo').value;
    const resultado = document.getElementById('resultado');
  
    // Verifica se os campos foram preenchidos corretamente
    if (inicio === "" || fim === "" || passo === "") {
      resultado.textContent = "Por favor, preencha todos os campos.";
      resultado.style.color = "yellow";
      return;
    }
  
    const numInicio = parseInt(inicio);
    const numFim = parseInt(fim);
    const numPasso = parseInt(passo);
  
    if (isNaN(numInicio) || isNaN(numFim) || isNaN(numPasso)) {
      resultado.textContent = "Por favor, insira números válidos.";
      resultado.style.color = "orange";
      return;
    }
  
    // Caso o valor do passo seja zero, o cálculo não é possível
    if (numPasso === 0) {
      resultado.textContent = "O valor do passo não pode ser zero.";
      resultado.style.color = "red";
      return;
    }
  
    // Realizando a contagem
    let contagem = "";
    if (numInicio < numFim) {
      for (let i = numInicio; i <= numFim; i += numPasso) {
        contagem += i + " ";
      }
    } else {
      for (let i = numInicio; i >= numFim; i -= numPasso) {
        contagem += i + " ";
      }
    }
  
    resultado.textContent = `Contagem: ${contagem}`;
    resultado.style.color = "#00ffcc";
  }
  