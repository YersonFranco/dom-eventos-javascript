var tarjeta = document.getElementById("tarjeta");

var selectorColor = document.getElementById("selectorColor");

selectorColor.addEventListener("change", function () {

    var colorSeleccionado = selectorColor.value;

    tarjeta.style.backgroundColor = colorSeleccionado;

});