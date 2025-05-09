function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero <= 1) {
        resultado.innerText = "Por favor, insira um número maior que 1.";
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        resultado.innerText = `${numero} é um número primo.`;
    } else {
        resultado.innerText = `${numero} não é um número primo.`;
    }
}
