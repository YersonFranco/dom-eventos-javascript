var nombre = document.getElementById("nombre");

var botonSaludar = document.getElementById("botonSaludar");

var botonLimpiar = document.getElementById("botonLimpiar");

var resultado = document.getElementById("resultado");

botonSaludar.addEventListener("click", function () {

    var nombreUsuario = nombre.value;

    if (nombreUsuario == "") {

        resultado.textContent = "Por favor, escribe tu nombre.";

    } else {

        resultado.textContent = "¡Hola, " + nombreUsuario + "! Bienvenid@.";

    }

});

botonLimpiar.addEventListener("click", function () {

    resultado.textContent = "";;

});