const luzRoja = document.getElementById("luzRoja");
const luzAmarilla = document.getElementById("luzAmarilla");
const luzVerde = document.getElementById("luzVerde");
const estado = document.getElementById("estado");
const botonRojo = document.getElementById("botonRojo");
const botonAmarillo = document.getElementById("botonAmarillo");
const botonVerde = document.getElementById("botonVerde");

function apagarLuces() {
    luzRoja.classList.remove("encendida");
    luzAmarilla.classList.remove("encendida");
    luzVerde.classList.remove("encendida");
}

botonRojo.addEventListener("click", function () {
    apagarLuces();
    luzRoja.classList.add("encendida");
    estado.textContent = "Detente";
});

botonAmarillo.addEventListener("click", function () {
    apagarLuces();
    luzAmarilla.classList.add("encendida");
    estado.textContent = "Precaución";
});

botonVerde.addEventListener("click", function () {
    apagarLuces();
    luzVerde.classList.add("encendida");
    estado.textContent = "Puedes avanzar";
});
