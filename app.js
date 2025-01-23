//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let  nomes = []

function adicionarAmigo(){
    let nomeDigitado = document.querySelector("input").value;
    if (nomeDigitado == ""){
      alert("Erro! Digite um nome para adicionar.");
    return;  
    }

nomes.push(nomeDigitado);

    let listaDeNomes = "";
    let contador = 0;

while (contador < nomes.length) {
    listaDeNomes += `<li>${nomes[contador]}</li>`;
    contador++;
}

let resultado = document.getElementById("resultado");
resultado.innerHTML = listaDeNomes;
}

function sortearAmigo() {
    if (nomes.length<2)
        alert("Digite pelo menos dois nomes para sortear");
    else {
        let aleatorio = Math.floor(Math.random()* nomes.length);
        nomeSorteado = nomes[aleatorio];
        resultado.innerHTML = `${nomeSorteado}`
    }
}
