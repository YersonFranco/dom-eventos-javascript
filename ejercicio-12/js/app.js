const numero = document.getElementById("numero");
const botonGenerar = document.getElementById("botonGenerar");
const contenedorTabla = document.getElementById("contenedorTabla");
const aviso = document.getElementById("aviso");

botonGenerar.addEventListener("click", function () {
    contenedorTabla.textContent = "";

    if (numero.value.trim() === "") {
        aviso.textContent = "Escribe un número para generar la tabla.";
        return;
    }

    aviso.textContent = "";
    const numeroIngresado = Number(numero.value);
    const tabla = document.createElement("table");
    const cuerpoTabla = document.createElement("tbody");

    for (let multiplicador = 1; multiplicador <= 10; multiplicador = multiplicador + 1) {
        const fila = document.createElement("tr");
        const celdaOperacion = document.createElement("td");
        const celdaResultado = document.createElement("td");

        celdaOperacion.textContent = `${numeroIngresado} × ${multiplicador}`;
        celdaResultado.textContent = `= ${numeroIngresado * multiplicador}`;
        fila.appendChild(celdaOperacion);
        fila.appendChild(celdaResultado);
        cuerpoTabla.appendChild(fila);
    }

    tabla.appendChild(cuerpoTabla);
    contenedorTabla.appendChild(tabla);
});
