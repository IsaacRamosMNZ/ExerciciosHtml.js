function converterTemperatura() {
    const temperaturaCelsius = parseFloat(document.getElementById('temperaturaInput').value);
    const opcaoConversao = document.getElementById('opcaoConversao').value;
    const resultadoDiv = document.getElementById('result');
  
    // Verificar se o valor da temperatura é válido
    if (isNaN(temperaturaCelsius)) {
      resultadoDiv.textContent = "Por favor, insira um valor válido de temperatura.";
      resultadoDiv.style.color = "#f44336"; // Cor vermelha para erro
      return;
    }
  
    let resultado;
    if (opcaoConversao === 'fahrenheit') {
      resultado = (temperaturaCelsius * 9/5) + 32;
      resultadoDiv.textContent = `${temperaturaCelsius}°C = ${resultado.toFixed(2)}°F`;
      resultadoDiv.style.color = "#4caf50"; // Cor verde para sucesso
    } else if (opcaoConversao === 'kelvin') {
      resultado = temperaturaCelsius + 273.15;
      resultadoDiv.textContent = `${temperaturaCelsius}°C = ${resultado.toFixed(2)} K`;
      resultadoDiv.style.color = "#4caf50"; // Cor verde para sucesso
    }
  }
  