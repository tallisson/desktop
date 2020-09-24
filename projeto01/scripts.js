/* Atributo onload serve para definir um comportamento (evento) 
  a ser executado após todo o html ser carregado (renderizado) */
window.onload = function() {
  // Captura o formulário e previnir o compartamento padrão dele
  // [0 => form]
  const elementos = document.getElementsByTagName('form');
  const form = elementos[0]; 
  form.onsubmit = function(evt) {
    evt.preventDefault();
  }
}

function recuperarValores() {
  // Capturar o valor digitado no input valor1
  const inputValor1 = document.getElementById('valor1');      
  //console.log(inputValor1);
  const valor1 = Number(inputValor1.value);
  //console.log('[valor1]', valor1);
  // Capturar o valor digitado no input valor2
  const inputValor2 = document.getElementById('valor2');      
  const valor2 = Number(inputValor2.value);
  //console.log('[valor2]', valor2);

  /* Retorna um vetor (array) com dois 
  elementos [0=> valor1, 1=> valor2] */
  return [valor1, valor2];
}

function preencherResultado(res) {
  // Pegar a div onde vai ser colocado o conteúdo
  const divs = document.getElementsByClassName('div-res');
  const divRes = divs[0];
  
  // Colocar conteúdo na div
  divRes.innerHTML = 'O resultado é ' + res;
}

function somar() {      
  // Desestruturação, para recuperar direto
  // os valores retornados pela função
  const [valor1, valor2] = recuperarValores();
  // Somar os dois valores
  const res = valor1 + valor2;
  // Exibir o resultado da soma
  preencherResultado(res);
}

function subtrair() {
  // Desestruturação, para recuperar direto
  // os valores retornados pela função
  const [valor1, valor2] = recuperarValores();
  // Subtrair os dois valores
  const res = valor1 - valor2;
  // Exibir o resultado da soma
  preencherResultado(res);
}

function multiplicar() {
  // Desestruturação, para recuperar direto
  // os valores retornados pela função
  const [valor1, valor2] = recuperarValores();
  // Multiplicar os dois valores
  const res = valor1 * valor2;
  // Exibir o resultado da soma
  preencherResultado(res);
}

function dividir() {
  // Desestruturação, para recuperar direto
  // os valores retornados pela função
  let [valor1, valor2] = recuperarValores();
  // Dividir os dois valores      
  const res = (valor2 != 0 ? valor1 / valor2 : 'Divisão impossível');
  // Exibir o resultado da soma
  preencherResultado(res);
}