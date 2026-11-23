const tarjeta = document.getElementById("tarjeta");
const selectorColor = document.getElementById("selectorColor");

selectorColor.addEventListener("change", function () {
    tarjeta.style.backgroundColor = selectorColor.value;
});
