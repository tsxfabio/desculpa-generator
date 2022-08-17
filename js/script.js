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
const btnPesquisar = document.querySelector("#submit");

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

// Pesquisar

var url = "https://excuser.herokuapp.com/v1/excuse";
var xhttp = new XMLHttpRequest();

btnPesquisar.addEventListener("click", buscarDesculpa);

function buscarDesculpa() {
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var desculpa = JSON.parse(xhttp.response);
      var desculpaFormatada = desculpa.map((msg) => msg.excuse);
      var desculpaFormatada2 = JSON.stringify(desculpaFormatada);
      console.log(desculpaFormatada2);
      msgRetorno = document.querySelector("#msg-retorno");
      msgRetorno.innerHTML = `<p>${desculpaFormatada2}</p>`;
    }
  };
  xhttp.send();
}
