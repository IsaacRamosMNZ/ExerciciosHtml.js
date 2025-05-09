function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');
  
    // Verificando se os campos estão preenchidos
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = "Por favor, insira valores válidos nos dois campos.";
      resultado.style.color = "#f0f0f0"; // Cor suave de erro
      return;
    }
  
    let res;
  
    // Realizando a operação de acordo com a seleção
    switch (operacao) {
      case 'soma':
        res = num1 + num2;
        resultado.textContent = `Resultado: ${res}`;
        break;
      case 'subtracao':
        res = num1 - num2;
        resultado.textContent = `Resultado: ${res}`;
        break;
      case 'multiplicacao':
        res = num1 * num2;
        resultado.textContent = `Resultado: ${res}`;
        break;
      case 'divisao':
        if (num2 === 0) {
          resultado.textContent = "Não é possível dividir por zero!";
          resultado.style.color = "#e74c3c"; // Vermelho suave para erro
        } else {
          res = num1 / num2;
          resultado.textContent = `Resultado: ${res}`;
        }
        break;
      default:
        resultado.textContent = "Selecione uma operação.";
        resultado.style.color = "#f0f0f0"; // Cor suave de erro
        break;
    }
  
    resultado.style.color = "#e0f7fa"; // Azul bem suave para o resultado
  }
  