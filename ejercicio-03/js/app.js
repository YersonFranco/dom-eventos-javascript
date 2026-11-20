var textoUsuario = document.getElementById("textoUsuario");

var vistaPrevia = document.getElementById("vistaPrevia");


textoUsuario.addEventListener("input", function () {

    vistaPrevia.textContent = textoUsuario.value;

});