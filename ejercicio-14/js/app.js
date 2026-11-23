const presupuesto = document.getElementById("presupuesto");
const botonPresupuesto = document.getElementById("botonPresupuesto");
const nombreGasto = document.getElementById("nombreGasto");
const valorGasto = document.getElementById("valorGasto");
const botonAgregarGasto = document.getElementById("botonAgregarGasto");
const totalPresupuesto = document.getElementById("totalPresupuesto");
const totalGastado = document.getElementById("totalGastado");
const dineroRestante = document.getElementById("dineroRestante");
const mensajePresupuesto = document.getElementById("mensajePresupuesto");
const listaGastos = document.getElementById("listaGastos");
const aviso = document.getElementById("aviso");

let presupuestoInicial = 0;
let gastos = [];
let presupuestoEstablecido = false;

function actualizarResumen() {
    let sumaGastos = 0;

    gastos.forEach(function (gasto) {
        sumaGastos = sumaGastos + gasto.valor;
    });

    const restante = presupuestoInicial - sumaGastos;
    totalPresupuesto.textContent = `$${presupuestoInicial.toFixed(2)}`;
    totalGastado.textContent = `$${sumaGastos.toFixed(2)}`;
    dineroRestante.textContent = `$${restante.toFixed(2)}`;

    if (restante < 0) {
        dineroRestante.classList.add("sobre-presupuesto");
        mensajePresupuesto.textContent = "Has superado tu presupuesto.";
    } else {
        dineroRestante.classList.remove("sobre-presupuesto");
        mensajePresupuesto.textContent = "";
    }
}

botonPresupuesto.addEventListener("click", function () {
    if (presupuesto.value === "" || Number(presupuesto.value) < 0) {
        aviso.textContent = "Escribe un presupuesto de cero o más.";
        return;
    }

    presupuestoInicial = Number(presupuesto.value);
    presupuestoEstablecido = true;
    aviso.textContent = "Presupuesto guardado.";
    actualizarResumen();
});

botonAgregarGasto.addEventListener("click", function () {
    if (presupuestoEstablecido === false) {
        aviso.textContent = "Primero escribe y guarda tu presupuesto.";
        return;
    }

    const nombre = nombreGasto.value.trim();
    const valor = Number(valorGasto.value);

    if (nombre === "" || valorGasto.value === "" || valor <= 0) {
        aviso.textContent = "Escribe el nombre del gasto y un valor mayor que cero.";
        return;
    }

    const gasto = { nombre: nombre, valor: valor };
    gastos.push(gasto);

    const elementoGasto = document.createElement("li");
    elementoGasto.textContent = `${gasto.nombre}: $${gasto.valor.toFixed(2)}`;
    listaGastos.appendChild(elementoGasto);

    nombreGasto.value = "";
    valorGasto.value = "";
    aviso.textContent = "";
    actualizarResumen();
});
