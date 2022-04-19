const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "./assets/img/gryffindor01.png";
    elementoNome.innerText = "Casa Gryffindor";
    elementoSituacao.innerText =
      "Coragem, ousadia, determinação, audácia e atrevimento";
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src = "./assets/img/ravenclaw01.png";
    elementoNome.innerText = "Casa Ravenclaw";
    elementoSituacao.innerText =
      "Inteligencia, criatividade, perspicaz, prudência e estudos";
    elementoBtn.value = "terceiro";
  } else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "./assets/img/hufflepuff.png";
    elementoNome.innerText = "Casa Hufflepuff";
    elementoSituacao.innerText =
      "Trabalho, paciência, justiça, dedicação e verdade";
    elementoBtn.value = "quarto";
  } else if (elementoBtn.value == "quarto") {
    elementoImg.src = "./assets/img/sonserina01.png";
    elementoNome.innerText = "Casa Slytherin";
    elementoSituacao.innerText =
      "Ambição, astúcia, liderança, desembaraço e individualismo";
    elementoBtn.value = "quinto";
  } else {
    elementoImg.src = "./assets/img/Hogwarts02.png";
    elementoNome.innerText = "Hogwarts";
    elementoSituacao.innerText =
      "As quatro casas da Escola de Magia e Bruxaria";
    elementoBtn.value = "primeiro";
  }
});
