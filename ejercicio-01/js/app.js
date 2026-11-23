const nombre = document.getElementById("nombre");
const botonSaludar = document.getElementById("botonSaludar");
const botonLimpiar = document.getElementById("botonLimpiar");
const resultado = document.getElementById("resultado");

botonSaludar.addEventListener("click", function () {
    const nombreUsuario = nombre.value.trim();

    if (nombreUsuario === "") {
        resultado.textContent = "Por favor, escribe tu nombre.";
        return;
    }

    resultado.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
});

botonLimpiar.addEventListener("click", function () {
    nombre.value = "";
    resultado.textContent = "";
    nombre.focus();
});
