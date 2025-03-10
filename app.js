// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  inputAmigo.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>¡${amigoSorteado} es tu amigo secreto!</li>`;
}