/* Manipulação do local storage e armazenamento de dados
   em um arquivo gerenciado pelo navegador */
let atualizaContato = null;

window.onload = function() {
  atualizaContato = localStorage.getItem('atualiza') || null;

  // Capturar o form
  const listaDeForms = document.getElementsByTagName('form');
  const form = listaDeForms[0];

  if(atualizaContato != null) {
    document.title = 'Atualiza Cadastro';
    document.getElementsByTagName('h1')[0].innerHTML = 'Atualize o Cadastro';

    const contatoString = localStorage.getItem(atualizaContato);    
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
  if(atualizaContato == null) {
    localStorage.setItem(contato.nome, contatoString);
  } else {
    localStorage.removeItem(atualizaContato);
    localStorage.setItem(contato.nome, contatoString);
  }

  // Exibir msg de alerta
  const alerta = document.getElementsByClassName('alert')[0];
  alerta.style = "display: block;"
  
  const spanMsg = document.getElementById('msg');
  if(atualizaContato == null) {    
    spanMsg.innerHTML = 'Contato adicionado com sucesso!';
  } else {
    spanMsg.innerHTML = 'Contato atualizado com sucesso!';
  }
  deletaAtualiza();
}

function deletaAtualiza() {
  localStorage.removeItem('atualiza');
}

function voltarHome() {
  document.location.href = 'index.html';

  deletaAtualiza();
}