function opçãoErrada() {
  document.getElementById("respostaErrada1").style.backgroundColor = "red";
  document.getElementById("respostaErrada1").style.color = "white";
  document.getElementById("respostaErrada2").style.backgroundColor = "red";
  document.getElementById("respostaErrada2").style.color = "white";
  document.getElementById("respostaErrada3").style.backgroundColor = "red";
  document.getElementById("respostaErrada3").style.color = "white";
  alert("Sua resposta está errada")
}

function opçãoCerta() {
  document.getElementById("respostaCerta").style.backgroundColor = "green";
  document.getElementById("respostaCerta").style.color = "white";
}

function verificar() {
  var resposta = document.getElementById("respostaCerta");
  if (resposta.checked) {
    acertos++
    alert("Parabéns você Acertou!");
  } else {
    erros++;
    alert("Você Errou dessa vez")
  }
  window.location.href = "./index2.html";
}

var erros = 0;
var acertos = 0;













//https://pt.stackoverflow.com/questions/298280/estou-criando-um-quiz-e-n%C3%A3o-consigo-fazer-a-verifica%C3%A7%C3%A3o-com-javascript

