const formularioRegistro = document.getElementById("formularioRegistro");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorEdad = document.getElementById("errorEdad");
const mensajeExito = document.getElementById("mensajeExito");

formularioRegistro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorEdad.textContent = "";
    mensajeExito.textContent = "";

    let formularioValido = true;

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "Escribe tu nombre.";
        formularioValido = false;
    }

    if (correo.value.trim() === "" || !correo.value.includes("@")) {
        errorCorreo.textContent = "Escribe un correo válido que incluya @.";
        formularioValido = false;
    }

    if (edad.value === "" || Number(edad.value) < 18) {
        errorEdad.textContent = "La edad debe ser de 18 años o más.";
        formularioValido = false;
    }

    if (formularioValido) {
        mensajeExito.textContent = "Registro completado correctamente.";
        formularioRegistro.reset();
    }
});
