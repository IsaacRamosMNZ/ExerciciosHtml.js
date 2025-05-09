function contar() {
    let texto = document.getElementById("texto").value.trim();
    let resultado = document.getElementById("resultado");

    if (texto === "") {
        resultado.innerText = "Por favor, insira um texto.";
        return;
    }

    let palavras = texto.split(/\s+/).length;
    let letras = texto.replace(/\s+/g, '').length;

    resultado.innerText = `Palavras: ${palavras} - Letras: ${letras}`;
}
