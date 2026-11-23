const contador = document.getElementById("contador");
const botonAumentar = document.getElementById("botonAumentar");
const botonReiniciar = document.getElementById("botonReiniciar");

let numero = 0;

function actualizarContador() {
    contador.textContent = numero;

    if (numero >= 10) {
        contador.classList.add("meta-alcanzada");
    } else {
        contador.classList.remove("meta-alcanzada");
    }
}

botonAumentar.addEventListener("click", function () {
    numero = numero + 1;
    actualizarContador();
});

botonReiniciar.addEventListener("click", function () {
    numero = 0;
    actualizarContador();
});
