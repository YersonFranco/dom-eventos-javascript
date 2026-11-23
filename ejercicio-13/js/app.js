const imagenPrincipal = document.getElementById("imagenPrincipal");
const tituloImagen = document.getElementById("tituloImagen");
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener("click", function () {
        imagenPrincipal.src = miniatura.dataset.src;
        imagenPrincipal.alt = `Paisaje de ${miniatura.dataset.titulo.toLowerCase()}`;
        tituloImagen.textContent = miniatura.dataset.titulo;

        miniaturas.forEach(function (otraMiniatura) {
            otraMiniatura.classList.remove("activa");
        });

        miniatura.classList.add("activa");
    });
});
