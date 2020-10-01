/* Manipulação do local storage e armazenamento de dados
   em um arquivo gerenciado pelo navegador */
let queryString = null;

window.onload = function() {
  // Testar URL para ver se existe string de consulta
  queryString = location.href.split('?')[1] || null;
  if(queryString != null) {
    queryString = queryString.replace('nome=', '');
  }

  // Capturar o form
  const listaDeForms = document.getElementsByTagName('form');
  const form = listaDeForms[0];

  if(queryString != null) {
    const contatoString = localStorage.getItem(queryString);
    const contato = JSON.parse(contatoString);

    const listaDeInputs = document.getElementsByTagName('input');
    listaDeInputs[0].value = contato.nome;
    listaDeInputs[1].value = contato.zap;
    listaDeInputs[2].value = contato.instagram;
    listaDeInputs[3].value = contato.endereco;
  }

  // Prevenir o comportamento padrão do formulário para ele 
  // não submeter os dados para uma novo URL
  form.onsubmit = function(evt) {
    evt.preventDefault();
  }
}

function salvarContato() {
  // Capturar os inputs
  const listaDeInputs = document.getElementsByTagName('input');
  // Criar um objeto contato
  const contato = {
    nome: listaDeInputs[0].value,
    zap: listaDeInputs[1].value,
    instagram: listaDeInputs[2].value,
    endereco: listaDeInputs[3].value
  };

  // Transformar objeto (JSON) em string
  const contatoString = JSON.stringify(contato);

  // Salvar esse objeto no localStorage
  if(queryString == null) {
    localStorage.setItem(contato.nome, contatoString);
  } else {
    localStorage.removeItem(queryString);
    localStorage.setItem(contato.nome, contatoString);
  }

  // Exibir msg de alerta
  const alerta = document.getElementsByClassName('alert')[0];
  alerta.style = "display: block;"
  
  const spanMsg = document.getElementById('msg');
  if(queryString == null) {    
    spanMsg.innerHTML = 'Contato adicionado com sucesso!';
  } else {
    spanMsg.innerHTML = 'Contato atualizado com sucesso!';
  }
}