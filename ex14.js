function sortear() {
    let minimo = parseInt(document.getElementById("minimo").value);
    let maximo = parseInt(document.getElementById("maximo").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        resultado.innerText = "Por favor, insira valores válidos.";
        return;
    }

    let sorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    resultado.innerText = `Número sorteado: ${sorteado}`;
}
