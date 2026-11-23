const producto = document.getElementById("producto");
const botonAgregar = document.getElementById("botonAgregar");
const listaCompras = document.getElementById("listaCompras");
const aviso = document.getElementById("aviso");

botonAgregar.addEventListener("click", function () {
    const nombreProducto = producto.value.trim();

    if (nombreProducto === "") {
        aviso.textContent = "Escribe un producto antes de agregarlo.";
        return;
    }

    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = nombreProducto;
    listaCompras.appendChild(nuevoProducto);
    producto.value = "";
    aviso.textContent = "";
    producto.focus();
});
