var categoria;

// Imagem de Apresentação
var imagemDestaque = document.getElementById("imagemApresentacao");

// Seletor de Botões
const btnVariados = document.querySelector("#principal");
const btnTrabalho = document.querySelector("#office");
const btnEscola = document.querySelector("#college");
const btnAmizade = document.querySelector("#party");
const btnRelacionamento = document.querySelector("#family");
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
  if (categoria == "" || categoria == "principal") {
    imagemDestaque.setAttribute("src", "assets/images/imagem-principal.png");
  } else {
    imagemDestaque.setAttribute(
      "src",
      "assets/images/imagem-" + categoria + ".png"
    );
  }
}

// Pesquisar

var url = "https://excuser.herokuapp.com/v1/excuse/";
var urlFormatada = "";
var xhttp = new XMLHttpRequest();

btnPesquisar.addEventListener("click", formatarLink);

function formatarLink() {
  console.log(categoria);
  if (
    categoria !== "" &&
    categoria !== "principal" &&
    categoria !== undefined
  ) {
    urlFormatada = url + categoria;
    buscarDesculpa();
  } else {
    urlFormatada = url;
    buscarDesculpa();
  }
}

function buscarDesculpa() {
  console.log(urlFormatada);
  xhttp.open("GET", urlFormatada, true);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var data = JSON.parse(xhttp.response);

      var msgDesculpa = data.map((msg) => msg.excuse);
      var msgCategoria = data.map((msg) => msg.category);

      var desculpa = document.querySelector("#msg-retorno");
      desculpa.innerHTML = `<p class="container-msg">Categoria: ${msgCategoria}</p> <p class="container-msg">${msgDesculpa}</p>`;
    }
  };
  xhttp.send();
}
