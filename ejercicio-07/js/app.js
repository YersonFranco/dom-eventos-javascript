const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

contrasena.addEventListener("input", function () {
    const cantidadCaracteres = contrasena.value.length;

    if (cantidadCaracteres === 0) {
        mensaje.textContent = "Escribe para revisar la longitud.";
        mensaje.className = "mensaje";
    } else if (cantidadCaracteres < 6) {
        mensaje.textContent = "Contraseña muy corta";
        mensaje.className = "mensaje corta";
    } else if (cantidadCaracteres < 10) {
        mensaje.textContent = "Contraseña aceptable";
        mensaje.className = "mensaje aceptable";
    } else {
        mensaje.textContent = "Contraseña fuerte";
        mensaje.className = "mensaje fuerte";
    }
});
