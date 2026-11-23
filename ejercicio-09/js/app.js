const nombre = document.getElementById("nombre");
const profesion = document.getElementById("profesion");
const foto = document.getElementById("foto");
const nombrePerfil = document.getElementById("nombrePerfil");
const profesionPerfil = document.getElementById("profesionPerfil");
const imagenPerfil = document.getElementById("imagenPerfil");
const aviso = document.getElementById("aviso");

nombre.addEventListener("input", function () {
    if (nombre.value.trim() === "") {
        nombrePerfil.textContent = "Tu nombre";
    } else {
        nombrePerfil.textContent = nombre.value;
    }
});

profesion.addEventListener("input", function () {
    if (profesion.value.trim() === "") {
        profesionPerfil.textContent = "Tu profesión";
    } else {
        profesionPerfil.textContent = profesion.value;
    }
});

foto.addEventListener("input", function () {
    if (foto.value === "") {
        aviso.textContent = "";
    } else if (foto.validity.valid) {
        imagenPerfil.src = foto.value;
        aviso.textContent = "";
    } else {
        aviso.textContent = "Escribe una URL válida para la foto.";
    }
});

imagenPerfil.addEventListener("error", function () {
    aviso.textContent = "No se pudo cargar esa imagen. Revisa la URL.";
});

imagenPerfil.addEventListener("load", function () {
    aviso.textContent = "";
});
