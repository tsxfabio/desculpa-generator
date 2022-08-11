var categoria = "";

// Imagem de Apresentação
document.getElementById("imagemApresentacao").src =
  "/assets/images/3693790-removebg-preview.png";

// Seletor de Botões
const btnVariados = document.querySelector("#variados");
const btnTrabalho = document.querySelector("#trabalho");
const btnEscola = document.querySelector("#escola");
const btnAmizade = document.querySelector("#amizade");
const btnRelacionamento = document.querySelector("#relacionamento");
const botoes = [
  btnVariados,
  btnTrabalho,
  btnEscola,
  btnAmizade,
  btnRelacionamento,
];

btnVariados.addEventListener("click", confereCategoria);

for (let botao of botoes) {
  botao.addEventListener("click", confereCategoria);
}
function confereCategoria() {
  console.log("Clicou em " + this.id);
}
