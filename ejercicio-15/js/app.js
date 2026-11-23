const nuevaTarea = document.getElementById("nuevaTarea");
const prioridad = document.getElementById("prioridad");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");
const contadorPendientes = document.getElementById("contadorPendientes");
const aviso = document.getElementById("aviso");
const filtro = document.getElementById("filtro");
const mensajeMouse = document.getElementById("mensajeMouse");

const tareas = [];

function mostrarTareas() {
    listaTareas.textContent = "";
    let pendientes = 0;

    tareas.forEach(function (tarea) {
        if (tarea.completada === false) {
            pendientes = pendientes + 1;
        }

        if (filtro.value === "pendientes" && tarea.completada) {
            return;
        }

        if (filtro.value === "completadas" && tarea.completada === false) {
            return;
        }

        const elementoTarea = document.createElement("li");
        elementoTarea.className = "tarea";
        const descripcion = document.createElement("span");
        descripcion.textContent = `${tarea.nombre} — Prioridad: ${tarea.prioridad}`;

        if (tarea.completada) {
            descripcion.classList.add("completada");
        }

        const botonCompletar = document.createElement("button");
        botonCompletar.type = "button";
        botonCompletar.textContent = tarea.completada ? "Completada" : "Completar";
        botonCompletar.disabled = tarea.completada;
        botonCompletar.addEventListener("click", function () {
            tarea.completada = true;
            mostrarTareas();
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminar";
        botonEliminar.addEventListener("click", function () {
            const indice = tareas.indexOf(tarea);
            tareas.splice(indice, 1);
            mostrarTareas();
        });

        elementoTarea.appendChild(descripcion);
        elementoTarea.appendChild(botonCompletar);
        elementoTarea.appendChild(botonEliminar);
        elementoTarea.addEventListener("mouseenter", function () {
            mensajeMouse.textContent = `Tarea: ${tarea.nombre} (prioridad ${tarea.prioridad})`;
        });
        elementoTarea.addEventListener("mouseleave", function () {
            mensajeMouse.textContent = "";
        });
        listaTareas.appendChild(elementoTarea);
    });

    contadorPendientes.textContent = `Tareas pendientes: ${pendientes}`;
}

botonAgregar.addEventListener("click", function () {
    const nombreTarea = nuevaTarea.value.trim();

    if (nombreTarea === "") {
        aviso.textContent = "Escribe una tarea antes de agregarla.";
        return;
    }

    const tarea = {
        nombre: nombreTarea,
        prioridad: prioridad.value,
        completada: false
    };

    tareas.push(tarea);
    nuevaTarea.value = "";
    aviso.textContent = "";
    mostrarTareas();
});

filtro.addEventListener("change", mostrarTareas);
