var numero = 0;

var contador = document.getElementById("contador");

var botonAumentar = document.getElementById("botonAumentar");

var botonReiniciar = document.getElementById("botonReiniciar");

botonAumentar.addEventListener("click", function () {

    numero = numero + 1;

    contador.textContent = numero;

    if (numero >= 10) {

        contador.style.color = "green";

    } else {

        contador.style.color = "black";

    }

});

botonReiniciar.addEventListener("click", function () {

    numero = 0;

    contador.textContent = numero;

    contador.style.color = "black";

});