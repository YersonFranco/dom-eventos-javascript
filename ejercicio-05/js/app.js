const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

mensaje.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        const texto = mensaje.value.trim();

        if (texto === "") {
            resultado.textContent = "Escribe una tarea antes de presionar Enter.";
            return;
        }

        resultado.textContent = `Nueva tarea: ${texto}`;
        mensaje.value = "";
        mensaje.focus();
    }
});
