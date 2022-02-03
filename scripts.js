function verificar() {
   var resposta = document.getElementById("respostaCerta");
  if (resposta.checked) {
    acertos++
    alert("Parabéns você Acertou!");
  } else {
    erros++;
    alert("Você errou, a resposta correta é: " + document.getElementById("respostaCerta").value)
  }
  proximaPagina()
}

function proximaPagina() {
  if (acertos + erros == 1) {
    window.location.href = "./index2.html";
  }
  if (acertos + erros >= 2) {
    window.location.href = "./index3.html";
  }
}

var erros = 0;
var acertos = 0;



//https://pt.stackoverflow.com/questions/298280/estou-criando-um-quiz-e-n%C3%A3o-consigo-fazer-a-verifica%C3%A7%C3%A3o-com-javascript

