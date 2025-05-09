function verificar() {
  const numero = document.getElementById('numero').value;
  const resultado = document.getElementById('resultado');

  if (numero === "") {
    resultado.textContent = "Por favor, digite um número.";
    resultado.style.color = "yellow";
    return;
  }

  const num = parseInt(numero);

  if (isNaN(num)) {
    resultado.textContent = "Isso não é um número válido.";
    resultado.style.color = "orange";
    return;
  }

  if (num % 2 === 0) {
    resultado.textContent = `O número ${num} é PAR.`;
    resultado.style.color = "#00ffcc";
  } else {
    resultado.textContent = `O número ${num} é ÍMPAR.`;
    resultado.style.color = "#ffcc00";
  }
}
