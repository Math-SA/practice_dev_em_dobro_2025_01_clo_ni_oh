let cartoes = [];
let cartaoAtual = 0;

carregar_cartas();
//Definir ações dos botões
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
  cartao = document.getElementsByClassName("lista-personagens__cartao-selecionado")[0];
  console.log(cartao.getElementsByClassName("nome")[0]);
  cartao.getElementsByClassName("nome")[0].innerHTML = cartoes[cartaoAtual].nome;
  const nivel = cartao.getElementsByClassName("custo-carta")[0];
  nivel.replaceChildren();
  for (i = 0; i < cartoes[cartaoAtual].custo; i++){
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");
    nivel.appendChild(estrela);
  }
  cartao.getElementsByClassName("imagem-carta")[0].setAttribute("src", cartoes[cartaoAtual].imagem);
  cartao.getElementsByClassName("imagem-carta")[0].setAttribute("alt", cartoes[cartaoAtual].nome);
  cartao.getElementsByClassName("descricao")[0].innerHTML = cartoes[cartaoAtual].descricao;
  const dados = cartao.getElementsByClassName("informacoes-ataque")[0];
  const ataque = document.createElement("span");
  ataque.innerHTML = "ATK: " + cartoes[cartaoAtual].ataque;
  const defesa = document.createElement("span");
  defesa.innerHTML = "DEF: " + cartoes[cartaoAtual].defesa;
  dados.replaceChildren(ataque, defesa);
}

async function carregar_cartas(){
  const res = await fetch('./cartas.json');
  cartoes = await res.json();
  cartoes = cartoes.cartas;
  if (cartoes.length > 0) {
    mostrarCartao(cartaoAtual);
  }
}