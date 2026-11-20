var mensaje = document.getElementById("mensaje");

var resultado = document.getElementById("resultado");


mensaje.addEventListener("keydown", function (evento) {

    if (evento.key == "Enter") {

        var texto = mensaje.value;

        resultado.textContent = "Tu mensaje: " + texto;

    }

});