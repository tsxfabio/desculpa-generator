var categoria = "";

// Imagem de Apresentação
var imagemDestaque = document.getElementById("imagemApresentacao");

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

for (let botao of botoes) {
  botao.addEventListener("click", confereCategoria);
}
function confereCategoria() {
  categoria = this.id;
  console.log(categoria);
  alteraImagemDestaque();
}

function alteraImagemDestaque() {
  if (categoria == "") {
    imagemDestaque.setAttribute("src", "/assets/images/imagem-principal.png");
  } else {
    imagemDestaque.setAttribute(
      "src",
      "/assets/images/imagem-" + categoria + ".png"
    );
  }
}
