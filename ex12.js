// Variáveis para o cronômetro
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let cronometroInterval;
let cronometroAtivo = false;

// Função para exibir o cronômetro
function atualizarCronometro() {
  document.getElementById('minutos').textContent = formatarTempo(minutos);
  document.getElementById('segundos').textContent = formatarTempo(segundos);
  document.getElementById('milissegundos').textContent = formatarTempo(milissegundos);
}

// Função para formatar o tempo (para exibir 01, 02 em vez de 1, 2)
function formatarTempo(tempo) {
  return tempo < 10 ? '0' + tempo : tempo;
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
  if (!cronometroAtivo) {
    cronometroInterval = setInterval(function() {
      milissegundos++;
      if (milissegundos >= 100) {
        milissegundos = 0;
        segundos++;
      }
      if (segundos >= 60) {
        segundos = 0;
        minutos++;
      }
      atualizarCronometro();
    }, 10);
    cronometroAtivo = true;
  }
}

// Função para pausar o cronômetro
function pausarCronometro() {
  clearInterval(cronometroInterval);
  cronometroAtivo = false;
}

// Função para zerar o cronômetro
function zerarCronometro() {
  clearInterval(cronometroInterval);
  cronometroAtivo = false;
  minutos = 0;
  segundos = 0;
  milissegundos = 0;
  atualizarCronometro();
}

// Função para mostrar o relógio atual
function exibirRelogio() {
  setInterval(function() {
    const now = new Date();
    const horas = formatarTempo(now.getHours());
    const minutos = formatarTempo(now.getMinutes());
    const segundos = formatarTempo(now.getSeconds());
    document.getElementById('relogioAtual').textContent = `Hora Atual: ${horas}:${minutos}:${segundos}`;
  }, 1000);
}

// Chama a função para exibir o relógio assim que a página carrega
exibirRelogio();
