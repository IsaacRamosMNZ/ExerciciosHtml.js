// Função para gerar a senha
function gerarSenha() {
    const tamanho = parseInt(document.getElementById('tamanho').value);
    const uso = document.getElementById('uso').value;
    const senhaDiv = document.getElementById('senhaGerada');
    const copiarBtn = document.getElementById('copiarBtn');
  
    // Verificar se o tamanho da senha é válido
    if (isNaN(tamanho) || tamanho < 6 || tamanho > 20 || !uso.trim()) {
      senhaDiv.textContent = "Por favor, insira um tamanho válido (6 a 20) e um nome para a utilização.";
      senhaDiv.style.color = "#f44336"; // Cor vermelha para erro
      copiarBtn.style.display = "none"; // Esconde o botão de copiar em caso de erro
      return;
    }
  
    const caracteres = {
      letrasMaiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      letrasMinusculas: "abcdefghijklmnopqrstuvwxyz",
      numeros: "0123456789",
      simbolos: "!@#$%^&*()_+-=[]{}|;:,.<>?/~"
    };
  
    // Combina todos os tipos de caracteres
    const todosCaracteres = caracteres.letrasMaiusculas + caracteres.letrasMinusculas + caracteres.numeros + caracteres.simbolos;
  
    let senha = "";
    
    // Gera a senha
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);
      senha += todosCaracteres[indiceAleatorio];
    }
  
    // Exibe a senha gerada
    senhaDiv.textContent = "Senha gerada: " + senha;
    senhaDiv.style.color = "#4caf50"; // Cor verde para sucesso
    copiarBtn.style.display = "inline-block"; // Mostra o botão de copiar
    
    // Salva a senha no histórico com o nome de utilização
    salvarHistorico(senha, uso);
  }
  
  // Função para salvar o histórico de senhas geradas
  function salvarHistorico(senha, uso) {
    let historico = JSON.parse(localStorage.getItem('historicoSenhas')) || [];
    const senhaObj = { senha, uso, data: new Date().toLocaleString() };
    historico.push(senhaObj);
    
    // Salva no localStorage
    localStorage.setItem('historicoSenhas', JSON.stringify(historico));
  }
  
  // Função para copiar a senha para a área de transferência
  function copiarSenha() {
    const senha = document.getElementById('senhaGerada').textContent.replace("Senha gerada: ", "");
  
    if (senha) {
      // Cria um elemento temporário para copiar a senha
      const el = document.createElement('textarea');
      el.value = senha;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
  
      // Alerta ao usuário que a senha foi copiada
      alert("Senha copiada para a área de transferência!");
    } else {
      alert("Nenhuma senha gerada para copiar.");
    }
  }
  
  // Função para mostrar o histórico de senhas geradas
  function mostrarHistorico() {
    const historicoDiv = document.getElementById('historico');
    let historico = JSON.parse(localStorage.getItem('historicoSenhas')) || [];
  
    // Se não houver histórico
    if (historico.length === 0) {
      historicoDiv.innerHTML = "<p>Não há histórico de senhas geradas.</p>";
      historicoDiv.style.display = "block";
      return;
    }
  
    // Limpa o conteúdo anterior
    historicoDiv.innerHTML = "";
  
    // Exibe o histórico
    historico.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('historico-item');
      div.innerHTML = `<strong>Senha:</strong> ${item.senha} <br> <strong>Onde foi usada:</strong> ${item.uso} <br> <strong>Data:</strong> ${item.data}`;
      historicoDiv.appendChild(div);
    });
  
    // Exibe os botões de voltar e o histórico
    document.querySelector('.voltar-btn').style.display = 'inline-block';
    document.querySelector('.historico-btn').style.display = 'none';
    historicoDiv.style.display = "block";
  }
  
  // Função para voltar para a tela de geração de senha
  function voltarParaGeracao() {
    const historicoDiv = document.getElementById('historico');
    historicoDiv.style.display = "none";
    document.querySelector('.voltar-btn').style.display = 'none';
    document.querySelector('.historico-btn').style.display = 'inline-block';
  }
  