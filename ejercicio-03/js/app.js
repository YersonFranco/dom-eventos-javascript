const textoUsuario = document.getElementById("textoUsuario");
const vistaPrevia = document.getElementById("vistaPrevia");

textoUsuario.addEventListener("input", function () {
    vistaPrevia.textContent = textoUsuario.value;
});
