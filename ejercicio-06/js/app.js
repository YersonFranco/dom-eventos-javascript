const peso = document.getElementById("peso");
const estatura = document.getElementById("estatura");
const botonCalcular = document.getElementById("botonCalcular");
const resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", function () {
    const pesoIngresado = Number(peso.value);
    const estaturaIngresada = Number(estatura.value);

    if (peso.value === "" || estatura.value === "") {
        resultado.textContent = "Completa el peso y la estatura para calcular el IMC.";
        return;
    }

    if (pesoIngresado <= 0 || estaturaIngresada <= 0) {
        resultado.textContent = "El peso y la estatura deben ser mayores que cero.";
        return;
    }

    const imc = pesoIngresado / (estaturaIngresada * estaturaIngresada);
    resultado.textContent = `Tu IMC es ${imc.toFixed(2)}`;
});
