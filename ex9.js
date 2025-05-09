// Função que muda a cor do semáforo baseado no clique do botão
function mudarCor(cor) {
    // Ocultar todas as luzes do semáforo
    document.getElementById('redLight').style.backgroundColor = 'transparent';
    document.getElementById('yellowLight').style.backgroundColor = 'transparent';
    document.getElementById('greenLight').style.backgroundColor = 'transparent';
  
    // Ativar a luz correspondente
    if (cor === 'red') {
      document.getElementById('redLight').style.backgroundColor = '#e74c3c'; // Vermelho
    } else if (cor === 'yellow') {
      document.getElementById('yellowLight').style.backgroundColor = '#f39c12'; // Amarelo
    } else if (cor === 'green') {
      document.getElementById('greenLight').style.backgroundColor = '#2ecc71'; // Verde
    }
  }
  