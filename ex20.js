function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerText = "Por favor, insira todas as notas corretamente.";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;
    let status = media >= 7 ? "Aprovado" : media >= 4 ? "Recuperação" : "Reprovado";

    resultado.innerText = `Média: ${media.toFixed(2)} - Status: ${status}`;
}
