let tbody = null;

window.onload = function() {     
  // Pegar referência para a tbody da tabela
  tbody = document.getElementsByTagName('tbody')[0];
  
  capturarTdsContatos();  
}

function capturarTdsContatos() {
  // Capturar tds os contatos no localStorage
  /*
   Pegamos todos os contatos e passamos ele para 
   um objeto item. Para isso, utilizamos o 
   spread operator do js (operador de espalhamento)
   */
  const items = {
    ...localStorage // Passa os dados do localStorage
  };

  // Percorrer o objeto item e recuperar as chaves de acesso
  for(let chave in items) {
    /* Com base nas chaves obtemos os atributos dos 
       contatos
     */
    const contatoString = localStorage.getItem(chave);
    
    try {
      // Transformar contato no formato de string em obj
      const contato = JSON.parse(contatoString);

      tbody.innerHTML += `
        <tr>
          <td>${contato.nome}</td>
          <td>${contato.zap}</td>
          <td>${contato.instagram}</td>
          <td>${contato.endereco}</td>
          <td class="text-center">
            <button class="btn btn-primary"
              onclick="js:atualizarContato('${contato.nome}');"  
            >
              Atualizar
            </button>
            <button class="btn btn-danger" onclick="js:removerContato('${chave}');">
              Remover
            </button>
          </td>
        </tr>
      `
    } catch(error) {
      console.log(error.message);
      continue;
    }
  }
}

function atualizarContato(nome) {
  localStorage.setItem('atualiza', nome);
  location.href = 'novo-contato.html';
}

function removerContato(chave) {
  const resposta = confirm('Deseja realmente remover');
  
  if(resposta == true) {
    localStorage.removeItem(chave);    
    tbody.innerHTML = '';
    capturarTdsContatos();
  }
}

function criarContato() {
  localStorage.removeItem('atualiza');
  
  document.location = 'novo-contato.html';
}