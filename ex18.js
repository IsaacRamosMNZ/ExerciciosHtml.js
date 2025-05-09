function validarCadastro() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let resultado = document.getElementById("resultado");

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!nome || !email || !senha) {
        resultado.innerText = "Por favor, preencha todos os campos.";
        return;
    }

    if (!emailRegex.test(email)) {
        resultado.innerText = "Por favor, insira um e-mail válido.";
        return;
    }

    resultado.innerText = "Cadastro realizado com sucesso!";
}
