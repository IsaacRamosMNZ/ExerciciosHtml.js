let votos = {opcao1: 0, opcao2: 0, opcao3: 0};

function votar(opcao) {
    votos[opcao]++;
    exibirResultados();
}

function exibirResultados() {
    let totalVotos = votos.opcao1 + votos.opcao2 + votos.opcao3;
    let resultado = document.getElementById("resultado");

    if (totalVotos === 0) {
        resultado.innerHTML = "Ainda não há votos.";
        return;
    }

    let porcentagem1 = ((votos.opcao1 / totalVotos) * 100).toFixed(2);
    let porcentagem2 = ((votos.opcao2 / totalVotos) * 100).toFixed(2);
    let porcentagem3 = ((votos.opcao3 / totalVotos) * 100).toFixed(2);

    resultado.innerHTML = `
        Opção 1: ${votos.opcao1} votos (${porcentagem1}%)<br>
        Opção 2: ${votos.opcao2} votos (${porcentagem2}%)<br>
        Opção 3: ${votos.opcao3} votos (${porcentagem3}%)<br>
        Total de votos: ${totalVotos}
    `;
}
