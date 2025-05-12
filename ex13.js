function gerarSenha() {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(tamanho) || tamanho < 6) {
        resultado.innerText = "Por favor, insira um tamanho válido (6 ou mais caracteres).";
        return;
    }

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    resultado.innerText = Senha gerada: ${senha};
}
