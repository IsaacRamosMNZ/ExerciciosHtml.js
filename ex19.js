let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(palpite)) {
        resultado.innerText = "Por favor, insira um número.";
        return;
    }

    tentativas++;

    if (palpite === numeroAleatorio) {
        resultado.innerText = `Parabéns! Você acertou em ${tentativas} tentativas.`;
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
    } else if (palpite < numeroAleatorio) {
        resultado.innerText = "O número é maior. Tente novamente.";
    } else {
        resultado.innerText = "O número é menor. Tente novamente.";
    }
}
