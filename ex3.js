function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
  
    // Verifica se os campos foram preenchidos corretamente
    if (peso === "" || altura === "") {
      resultado.textContent = "Por favor, preencha ambos os campos.";
      resultado.style.color = "yellow";
      return;
    }
  
    const numPeso = parseFloat(peso);
    const numAltura = parseFloat(altura);
  
    if (isNaN(numPeso) || isNaN(numAltura)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      resultado.style.color = "orange";
      return;
    }
  
    // Calculando o IMC
    const imc = numPeso / (numAltura * numAltura);
  
    // Determinando a categoria do IMC
    let mensagem = "";
    if (imc < 18.5) {
      mensagem = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      mensagem = "Sobrepeso";
    } else {
      mensagem = "Obesidade";
    }
  
    // Exibindo o IMC e a mensagem correspondente
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br/> ${mensagem}`;
    resultado.style.color = "#00ffcc";
  }
  