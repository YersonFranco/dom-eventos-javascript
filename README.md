# Proyecto de DOM y eventos en JavaScript

## Presentación

Proyecto académico compuesto por quince ejercicios interactivos desarrollados con HTML, CSS y JavaScript. Las actividades muestran la interacción entre los elementos de una página y las acciones realizadas por sus usuarios, como escribir, seleccionar opciones, pulsar botones y enviar formularios.

La página principal reúne las actividades en tarjetas y mantiene la identidad visual azul del portafolio. Cada ejercicio cuenta con una barra fija en la parte superior para regresar al listado y desplazarse a las actividades anterior y siguiente.

## Objetivo

Aplicar conceptos de manipulación del DOM, eventos, validación de datos y actualización de interfaces mediante ejercicios organizados de forma progresiva.

## Tecnologías y estructura

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** presentación, distribución adaptable y estados visuales.
- **JavaScript:** eventos, validaciones y actualización dinámica del DOM.
- **SVG:** ilustraciones locales utilizadas en la galería de imágenes.

El proyecto no requiere backend ni bibliotecas externas. Cada actividad tiene su propio archivo HTML, hoja de estilos y archivo JavaScript. La galería utiliza recursos SVG ubicados en `ejercicio-13/img/`. Los estilos del inicio y de la navegación común se encuentran en la carpeta `css/` de la raíz.

## Actividades

### 1. Saludo personalizado

Lee el nombre ingresado y, al pulsar **Saludar**, presenta un saludo en pantalla. Si el campo está vacío o contiene solo espacios, muestra un mensaje para completarlo. El botón **Limpiar** borra el campo y el resultado. La interacción utiliza eventos `click`, lectura de `value`, una condición y actualización mediante `textContent`.

### 2. Contador de clics

Incrementa el contador con cada clic y permite reiniciarlo. El número cambia a verde al alcanzar diez clics y vuelve a negro al reiniciar. La actividad emplea `let` para el estado del contador, operaciones aritméticas, condiciones y una clase CSS para representar el cambio de color.

### 3. Vista previa de texto

Sincroniza el contenido de un área de texto con un panel de vista previa. La actualización ocurre durante la escritura y también refleja los cambios cuando se borra texto. Utiliza el evento `input` y las propiedades `value` y `textContent`.

### 4. Cambiador de color

Modifica el fondo de una tarjeta según el color seleccionado en un menú: azul, verde, amarillo o rosa. El texto de la tarjeta permanece igual. La selección se detecta con el evento `change` y se aplica mediante `style.backgroundColor`.

### 5. Mensaje al presionar Enter

Detecta la tecla Enter dentro del campo de tarea y muestra el texto con el mensaje `Nueva tarea: ...`. Después limpia el campo para permitir una nueva entrada. Si se presiona Enter sin escribir una tarea, presenta un aviso. La actividad utiliza `keydown`, la propiedad `key` del evento y una condición para ejecutar la actualización.

### 6. Calculadora de IMC

Calcula el índice de masa corporal usando peso en kilogramos y estatura en metros. Comprueba que los campos tengan valores mayores que cero y presenta el resultado con dos decimales. La fórmula aplicada es `peso / (estatura * estatura)`.

### 7. Verificador de contraseña

Evalúa la longitud de la contraseña durante la escritura. Informa si tiene menos de seis caracteres, entre seis y nueve, o diez o más, y presenta cada estado con un color distinto. Utiliza `input`, `length`, condiciones y clases CSS.

### 8. Lista de compras

Agrega productos a una lista sin reemplazar los elementos existentes. Valida que el campo no esté vacío, limpia el input después de agregar y muestra los avisos dentro de la página. Los elementos se crean con `document.createElement()` y se incorporan mediante `appendChild()`.

### 9. Tarjeta de perfil en vivo

Actualiza el nombre y la profesión de una tarjeta conforme cambian los campos del formulario. También permite cambiar la foto mediante una URL válida e informa si la imagen no puede cargarse. La interfaz utiliza eventos `input`, `load` y `error`.

### 10. Semáforo interactivo

Presenta tres luces controladas por botones. Cada selección enciende una luz, apaga las otras y muestra el mensaje asociado: **Detente**, **Precaución** o **Puedes avanzar**. Las clases CSS representan los estados encendido y apagado.

### 11. Formulario de registro con validación

Valida nombre, correo y edad antes de completar el registro. El nombre debe estar presente, el correo debe incluir `@` y la edad debe ser de al menos 18 años. Los errores aparecen junto a cada campo y el formulario no recarga la página al enviarse.

### 12. Generador de tabla de multiplicar

Genera las operaciones de multiplicación de un número desde uno hasta diez. Cada nueva generación reemplaza los resultados anteriores. La tabla se construye dinámicamente con elementos HTML y un ciclo `for`.

### 13. Galería de imágenes con miniaturas

Permite seleccionar entre tres imágenes locales. La imagen principal, su descripción y el título cambian según la miniatura elegida; la selección activa recibe un estilo visual. Las imágenes están almacenadas como SVG en el proyecto.

### 14. Calculadora de presupuesto

Registra un presupuesto inicial y una lista de gastos con nombre y valor. El resumen calcula el total gastado y el saldo restante. Cuando los gastos superan el presupuesto, el saldo cambia a rojo y se presenta un aviso. Los gastos se conservan en un arreglo de objetos.

### 15. Gestor de tareas con estado

Permite crear tareas con prioridad baja, media o alta. Cada tarea puede marcarse como completada o eliminarse; las completadas permanecen visibles con el texto tachado. El contador muestra las pendientes y un selector filtra todas, pendientes o completadas. Los eventos del cursor muestran una descripción de la tarea seleccionada.

## Desglose del JavaScript

En cada apartado, las instrucciones se presentan en el mismo orden que aparecen en `js/app.js`. Las líneas vacías y las llaves organizan los bloques; las tablas explican las instrucciones ejecutables y el propósito de cada una.

### Ejercicio 1 — `ejercicio-01/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| `const nombre = document.getElementById("nombre")` | Guarda la referencia al campo donde se escribe el nombre. |
| `const botonSaludar = document.getElementById("botonSaludar")` | Guarda el botón que inicia el saludo. |
| `const botonLimpiar = document.getElementById("botonLimpiar")` | Guarda el botón que limpia el formulario. |
| `const resultado = document.getElementById("resultado")` | Guarda el párrafo donde se muestran avisos y saludos. |
| `botonSaludar.addEventListener("click", ...)` | Registra la acción que se ejecuta al pulsar **Saludar**. |
| `const nombreUsuario = nombre.value.trim()` | Lee el campo y elimina espacios al principio y al final. |
| `if (nombreUsuario === "")` | Comprueba si el campo está vacío después de quitar espacios. |
| `resultado.textContent = ...` dentro del `if` | Muestra el aviso cuando falta el nombre. |
| `return` | Detiene el manejador para que no se genere un saludo vacío. |
| `resultado.textContent = \`¡Hola...\`` | Construye y presenta el saludo con el nombre escrito. |
| `botonLimpiar.addEventListener("click", ...)` | Registra la acción del botón **Limpiar**. |
| `nombre.value = ""` | Vacía el campo del nombre. |
| `resultado.textContent = ""` | Borra el mensaje anterior. |
| `nombre.focus()` | Devuelve el cursor al campo para permitir escribir de inmediato. |

### Ejercicio 2 — `ejercicio-02/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las tres declaraciones `const` (`contador`, `botonAumentar`, `botonReiniciar`) | Guardan las referencias al número visible y a los dos botones. |
| `let numero = 0` | Crea el valor inicial del contador; se usa `let` porque cambiará. |
| `function actualizarContador()` | Agrupa las instrucciones que sincronizan el número y su color. |
| `contador.textContent = numero` | Escribe el valor actual en el párrafo. |
| `if (numero >= 10)` | Comprueba si el contador alcanzó la meta de diez clics. |
| `contador.classList.add("meta-alcanzada")` | Activa el estilo verde cuando la condición es verdadera. |
| `contador.classList.remove("meta-alcanzada")` | Quita ese estilo cuando el contador está por debajo de diez. |
| `botonAumentar.addEventListener("click", ...)` | Escucha los clics del botón para sumar. |
| `numero = numero + 1` | Incrementa en uno el valor guardado. |
| `actualizarContador()` | Actualiza el número y revisa el color después de sumar. |
| `botonReiniciar.addEventListener("click", ...)` | Escucha los clics del botón para reiniciar. |
| `numero = 0` | Devuelve el estado del contador a cero. |
| `actualizarContador()` | Refleja el reinicio en pantalla y quita el color de meta. |

### Ejercicio 3 — `ejercicio-03/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| `const textoUsuario = document.getElementById("textoUsuario")` | Guarda el área donde se escribe el texto. |
| `const vistaPrevia = document.getElementById("vistaPrevia")` | Guarda el párrafo que recibirá la copia del texto. |
| `textoUsuario.addEventListener("input", ...)` | Ejecuta una acción cada vez que cambia el campo, incluso al borrar. |
| `vistaPrevia.textContent = textoUsuario.value` | Copia el valor actual del campo en la vista previa. |

### Ejercicio 4 — `ejercicio-04/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| `const tarjeta = document.getElementById("tarjeta")` | Guarda la referencia a la tarjeta que cambiará de fondo. |
| `const selectorColor = document.getElementById("selectorColor")` | Guarda el menú de selección de color. |
| `selectorColor.addEventListener("change", ...)` | Escucha cuándo la persona cambia la opción del menú. |
| `tarjeta.style.backgroundColor = selectorColor.value` | Aplica a la tarjeta el color de la opción seleccionada. |

### Ejercicio 5 — `ejercicio-05/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| `const mensaje = document.getElementById("mensaje")` | Guarda el campo donde se escribe la tarea. |
| `const resultado = document.getElementById("resultado")` | Guarda el párrafo que presenta el mensaje o el aviso. |
| `mensaje.addEventListener("keydown", ...)` | Escucha las teclas presionadas en el campo. |
| `if (evento.key === "Enter")` | Limita la acción a la tecla Enter. |
| `const texto = mensaje.value.trim()` | Obtiene el texto y elimina espacios sobrantes al inicio y al final. |
| `if (texto === "")` | Comprueba que sí se haya escrito una tarea. |
| `resultado.textContent = ...` dentro de ese `if` | Informa que primero se debe escribir una tarea. |
| `return` | Termina la acción si el campo está vacío. |
| `resultado.textContent = \`Nueva tarea: ${texto}\`` | Presenta la tarea ingresada con el formato solicitado. |
| `mensaje.value = ""` | Limpia el campo después de agregar la tarea. |
| `mensaje.focus()` | Deja el cursor listo para escribir otra tarea. |

### Ejercicio 6 — `ejercicio-06/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las cuatro declaraciones `const` (`peso`, `estatura`, `botonCalcular`, `resultado`) | Guardan los dos campos, el botón y el espacio de salida del cálculo. |
| `botonCalcular.addEventListener("click", ...)` | Inicia el cálculo al pulsar el botón. |
| `Number(peso.value)` | Convierte a número el texto del campo de peso. |
| `Number(estatura.value)` | Convierte a número el texto del campo de estatura. |
| `if (peso.value === "" || estatura.value === "")` | Detecta si falta cualquiera de los dos datos. `||` significa “o”. |
| La asignación a `resultado.textContent` en ese `if` | Muestra qué datos se deben completar. |
| `return` | Evita continuar con el cálculo si falta información. |
| `if (pesoIngresado <= 0 || estaturaIngresada <= 0)` | Rechaza el peso o la estatura iguales a cero o negativos. |
| La asignación de aviso a `resultado.textContent` en ese `if` | Explica que los datos deben ser mayores que cero. |
| `return` | Detiene el manejador cuando los valores no son válidos. |
| `const imc = pesoIngresado / (estaturaIngresada * estaturaIngresada)` | Aplica la fórmula del IMC: peso dividido entre estatura al cuadrado. |
| `resultado.textContent = ... imc.toFixed(2)` | Muestra el resultado redondeado visualmente a dos decimales. |

### Ejercicio 7 — `ejercicio-07/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| `const contrasena = ...` y `const mensaje = ...` | Guardan el campo de contraseña y el párrafo de estado. |
| `contrasena.addEventListener("input", ...)` | Vuelve a evaluar el texto en cada cambio. |
| `const cantidadCaracteres = contrasena.value.length` | Obtiene cuántos caracteres tiene la contraseña. |
| `if (cantidadCaracteres === 0)` | Detecta el campo vacío. |
| `mensaje.textContent = "Escribe para revisar la longitud."` | Muestra la instrucción inicial si no hay caracteres. |
| `mensaje.className = "mensaje"` | Quita las clases de estado anteriores y restaura la clase base. |
| `else if (cantidadCaracteres < 6)` | Clasifica las contraseñas que tienen de uno a cinco caracteres. |
| Asignación del texto `Contraseña muy corta` | Presenta el estado corto. |
| `mensaje.className = "mensaje corta"` | Aplica la clase CSS de color rojo. |
| `else if (cantidadCaracteres < 10)` | Clasifica las longitudes de seis a nueve caracteres; la condición anterior ya descartó las menores de seis. |
| Asignación del texto `Contraseña aceptable` | Presenta el estado aceptable. |
| `mensaje.className = "mensaje aceptable"` | Aplica el estilo amarillo del estado aceptable. |
| `else` | Atiende las longitudes restantes, que son diez caracteres o más. |
| Asignación del texto `Contraseña fuerte` | Presenta el estado fuerte. |
| `mensaje.className = "mensaje fuerte"` | Aplica el estilo verde del estado fuerte. |

### Ejercicio 8 — `ejercicio-08/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las cuatro declaraciones `const` (`producto`, `botonAgregar`, `listaCompras`, `aviso`) | Guardan el campo, botón, lista y área de avisos. |
| `botonAgregar.addEventListener("click", ...)` | Ejecuta la acción al pulsar **Agregar**. |
| `const nombreProducto = producto.value.trim()` | Lee el producto y descarta espacios sobrantes en sus extremos. |
| `if (nombreProducto === "")` | Detecta un campo vacío o con solo espacios. |
| `aviso.textContent = ...` | Informa que se debe escribir un producto. |
| `return` | Evita crear un elemento sin contenido. |
| `document.createElement("li")` | Crea un nuevo elemento de lista. |
| `nuevoProducto.textContent = nombreProducto` | Asigna el nombre del producto como texto visible. |
| `listaCompras.appendChild(nuevoProducto)` | Añade el nuevo elemento al final de la lista existente. |
| `producto.value = ""` | Limpia el campo después de agregar. |
| `aviso.textContent = ""` | Borra un aviso anterior si la operación fue correcta. |
| `producto.focus()` | Devuelve el cursor al campo para ingresar otro producto. |

### Ejercicio 9 — `ejercicio-09/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las siete declaraciones `const` (`nombre`, `profesion`, `foto`, `nombrePerfil`, `profesionPerfil`, `imagenPerfil`, `aviso`) | Guardan las tres entradas, los elementos de la tarjeta y el mensaje de validación. |
| `nombre.addEventListener("input", ...)` | Actualiza la tarjeta a medida que cambia el nombre. |
| `if (nombre.value.trim() === "")` | Detecta si el campo está vacío o solo contiene espacios. |
| `nombrePerfil.textContent = "Tu nombre"` | Restaura el texto predeterminado en ese caso. |
| `else` y `nombrePerfil.textContent = nombre.value` | Muestra el valor escrito cuando hay un nombre. |
| `profesion.addEventListener("input", ...)` | Actualiza la profesión durante la escritura. |
| La condición `profesion.value.trim() === ""` | Detecta si la profesión está vacía. |
| Asignación `Tu profesión` | Restaura el texto predeterminado de la tarjeta. |
| Rama `else` y asignación de `profesion.value` | Muestra la profesión ingresada. |
| `foto.addEventListener("input", ...)` | Revisa la dirección de la foto cuando cambia el campo. |
| `if (foto.value === "")` | Detecta que no hay una dirección escrita y limpia el aviso. |
| `else if (foto.validity.valid)` | Consulta la validez del campo URL según las reglas del navegador. |
| `imagenPerfil.src = foto.value` | Cambia la fuente de la imagen principal de la tarjeta. |
| `aviso.textContent = ""` en esa rama | Quita un aviso anterior mientras se intenta cargar una URL válida. |
| `else` y el mensaje de URL válida | Informa que la dirección escrita no tiene formato válido. |
| `imagenPerfil.addEventListener("error", ...)` | Detecta un fallo al cargar la imagen desde la dirección indicada. |
| El texto asignado en el evento `error` | Informa que la imagen no pudo cargarse y recomienda revisar la URL. |
| `imagenPerfil.addEventListener("load", ...)` | Detecta que la imagen terminó de cargar correctamente. |
| `aviso.textContent = ""` en `load` | Quita el aviso cuando la carga se completa. |

### Ejercicio 10 — `ejercicio-10/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las seis declaraciones `const` para las luces, el estado y los botones | Guardan referencias a los tres círculos, el mensaje y los controles. |
| `function apagarLuces()` | Agrupa el reinicio visual del semáforo para reutilizarlo desde los tres botones. |
| Cada `classList.remove("encendida")` | Quita el estado de luz encendida de un círculo. Se ejecuta para rojo, amarillo y verde. |
| `botonRojo.addEventListener("click", ...)` | Registra la acción del botón rojo. |
| `apagarLuces()` dentro del manejador | Apaga cualquier luz que estuviera activa. |
| `luzRoja.classList.add("encendida")` | Enciende el círculo rojo mediante su clase CSS. |
| `estado.textContent = "Detente"` | Muestra la instrucción asociada al rojo. |
| El manejador de `botonAmarillo` | Primero apaga todas las luces, luego activa la amarilla y presenta **Precaución**. |
| El manejador de `botonVerde` | Primero apaga todas las luces, luego activa la verde y presenta **Puedes avanzar**. |

### Ejercicio 11 — `ejercicio-11/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las ocho declaraciones `const` | Guardan el formulario, los campos, los espacios de error y el mensaje de éxito. |
| `formularioRegistro.addEventListener("submit", ...)` | Ejecuta las validaciones cuando se envía el formulario. |
| `evento.preventDefault()` | Evita la recarga que normalmente provoca el envío de un formulario. |
| Las cuatro asignaciones a `textContent = ""` | Limpian los errores y el mensaje de éxito que pudieran pertenecer al envío anterior. |
| `let formularioValido = true` | Inicia el resultado de validación como correcto; se usa `let` porque puede cambiar. |
| `if (nombre.value.trim() === "")` | Comprueba que el nombre tenga contenido. |
| Asignación a `errorNombre.textContent` | Muestra el error bajo el campo del nombre. |
| `formularioValido = false` | Marca que el formulario no puede aceptarse todavía. |
| `if (correo.value.trim() === "" || !correo.value.includes("@"))` | Rechaza un correo vacío o uno que no incluya el carácter `@`. `!` invierte el resultado de la comprobación. |
| Asignación a `errorCorreo.textContent` | Explica el formato mínimo requerido para el correo. |
| `formularioValido = false` | Registra que la validación del correo falló. |
| `if (edad.value === "" || Number(edad.value) < 18)` | Rechaza una edad vacía o menor de 18 años; `Number` convierte el valor del input para compararlo numéricamente. |
| Asignación a `errorEdad.textContent` | Informa la edad mínima requerida. |
| `formularioValido = false` | Registra que la edad no cumple la regla. |
| `if (formularioValido)` | Solo entra si ninguna de las validaciones anteriores falló. |
| `mensajeExito.textContent = ...` | Muestra la confirmación del registro. |
| `formularioRegistro.reset()` | Limpia los campos después de un registro correcto. |

### Ejercicio 12 — `ejercicio-12/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las cuatro declaraciones `const` | Guardan el campo numérico, el botón, el contenedor de resultados y el aviso. |
| `botonGenerar.addEventListener("click", ...)` | Inicia la generación al pulsar el botón. |
| `contenedorTabla.textContent = ""` | Elimina una tabla anterior para que solo se vea el resultado nuevo. |
| `if (numero.value.trim() === "")` | Comprueba que se haya ingresado un valor. |
| `aviso.textContent = ...` | Solicita el número cuando el campo está vacío. |
| `return` | Detiene la generación si no hay dato. |
| `aviso.textContent = ""` | Quita un aviso anterior cuando el dato ya está presente. |
| `Number(numero.value)` | Convierte el valor del input a tipo numérico. |
| `document.createElement("table")` y `document.createElement("tbody")` | Crean la tabla y su cuerpo en memoria antes de mostrarlos. |
| `for (let multiplicador = 1; multiplicador <= 10; multiplicador = multiplicador + 1)` | Repite el bloque diez veces, usando los multiplicadores del 1 al 10. `let` permite que el contador del ciclo avance. |
| Creación de `fila`, `celdaOperacion` y `celdaResultado` | Crea una fila y dos celdas para cada multiplicación. |
| Asignación a `celdaOperacion.textContent` | Escribe el número y el multiplicador de la operación. |
| Asignación a `celdaResultado.textContent` | Calcula y escribe el producto. |
| `fila.appendChild(...)` para las dos celdas | Coloca las celdas dentro de su fila. |
| `cuerpoTabla.appendChild(fila)` | Agrega cada fila al cuerpo de la tabla. |
| `tabla.appendChild(cuerpoTabla)` | Completa la estructura de la tabla. |
| `contenedorTabla.appendChild(tabla)` | Inserta la tabla terminada en la página. |

### Ejercicio 13 — `ejercicio-13/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las tres declaraciones `const` | Guardan la imagen principal, el título y la colección de miniaturas. |
| `document.querySelectorAll(".miniatura")` | Selecciona todas las miniaturas que tienen esa clase CSS. |
| `miniaturas.forEach(...)` | Recorre cada miniatura para asignarle su propio evento. |
| `miniatura.addEventListener("click", ...)` | Ejecuta el cambio cuando se hace clic en una miniatura. |
| `imagenPrincipal.src = miniatura.dataset.src` | Carga en la imagen grande la dirección guardada en `data-src`. |
| Asignación de `imagenPrincipal.alt` | Actualiza el texto alternativo de la imagen con el título elegido. |
| `tituloImagen.textContent = miniatura.dataset.titulo` | Cambia el título visible de la imagen seleccionada. |
| El segundo `miniaturas.forEach(...)` | Recorre otra vez la colección para limpiar la selección visual previa. |
| `otraMiniatura.classList.remove("activa")` | Quita la clase activa de cada miniatura. |
| `miniatura.classList.add("activa")` | Marca como activa únicamente la miniatura que recibió el clic. |

### Ejercicio 14 — `ejercicio-14/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las once declaraciones `const` iniciales | Guardan campos, botones, saldos, mensajes y lista del presupuesto. |
| `let presupuestoInicial = 0` | Conserva el presupuesto confirmado y permite actualizarlo. |
| `let gastos = []` | Crea la lista de gastos, que se ampliará con nuevos elementos. |
| `let presupuestoEstablecido = false` | Indica si ya se confirmó un presupuesto; cambia al guardarlo. |
| `function actualizarResumen()` | Agrupa la suma de gastos, el cálculo del saldo y su presentación. |
| `let sumaGastos = 0` | Inicializa el acumulador que sumará los importes. |
| `gastos.forEach(...)` | Recorre todos los objetos guardados en la lista de gastos. |
| `sumaGastos = sumaGastos + gasto.valor` | Añade cada importe al acumulado. |
| `const restante = presupuestoInicial - sumaGastos` | Calcula el saldo al restar los gastos al presupuesto. |
| Las asignaciones de los tres totales con `toFixed(2)` | Muestran presupuesto, gasto total y saldo con dos decimales. |
| `if (restante < 0)` | Comprueba si los gastos superan el presupuesto. |
| `dineroRestante.classList.add("sobre-presupuesto")` | Aplica el estilo rojo al saldo excedido. |
| Asignación del mensaje de exceso | Informa que se superó el presupuesto. |
| `else` | Atiende el caso donde el saldo no es negativo. |
| `classList.remove("sobre-presupuesto")` y mensaje vacío | Retira el color de exceso y borra el aviso. |
| `botonPresupuesto.addEventListener("click", ...)` | Escucha la acción para guardar el presupuesto inicial. |
| La condición de presupuesto vacío o negativo | Rechaza datos faltantes y valores menores que cero. |
| Asignación del aviso y `return` | Explica el dato requerido y detiene el guardado inválido. |
| `presupuestoInicial = Number(presupuesto.value)` | Convierte y guarda el presupuesto ingresado. |
| `presupuestoEstablecido = true` | Registra que ya se guardó un presupuesto válido. |
| Mensaje de confirmación y llamada a `actualizarResumen()` | Confirma el guardado y actualiza los valores visibles. |
| `botonAgregarGasto.addEventListener("click", ...)` | Escucha la solicitud para agregar un gasto. |
| `if (presupuestoEstablecido === false)` | Impide registrar gastos antes de establecer el presupuesto. |
| Aviso y `return` en esa condición | Solicita guardar primero el presupuesto y detiene la acción. |
| `const nombre = nombreGasto.value.trim()` | Lee el nombre del gasto y quita espacios externos. |
| `const valor = Number(valorGasto.value)` | Convierte el importe a número para validarlo y sumarlo. |
| La condición del nombre vacío, valor vacío o valor no positivo | Rechaza gastos incompletos o con importe menor o igual a cero. |
| Aviso y `return` en la validación del gasto | Informa los campos requeridos y cancela el registro inválido. |
| `const gasto = { nombre: nombre, valor: valor }` | Agrupa el nombre y el importe en un objeto. |
| `gastos.push(gasto)` | Añade el objeto al arreglo que conserva los gastos. |
| `document.createElement("li")` | Crea un elemento para la lista visible de gastos. |
| Asignación de `elementoGasto.textContent` | Construye el texto del gasto con su nombre y valor. |
| `listaGastos.appendChild(elementoGasto)` | Añade el nuevo gasto a la lista de la página. |
| Las dos asignaciones `value = ""` | Limpian los campos para el siguiente gasto. |
| `aviso.textContent = ""` | Elimina mensajes anteriores cuando la operación resulta correcta. |
| `actualizarResumen()` | Recalcula el total y el saldo después de agregar el gasto. |

### Ejercicio 15 — `ejercicio-15/js/app.js`

| Instrucción | Función dentro del ejercicio |
|---|---|
| Las ocho declaraciones `const` iniciales | Guardan los campos, botones, lista, contador, filtro y mensajes. |
| `const tareas = []` | Crea el arreglo que conserva las tareas durante el uso de la página. El arreglo puede modificarse aunque su referencia sea `const`. |
| `function mostrarTareas()` | Vuelve a construir la lista y actualiza el contador con el estado actual. |
| `listaTareas.textContent = ""` | Limpia los elementos visibles antes de dibujar la lista actualizada. |
| `let pendientes = 0` | Inicializa el contador de tareas pendientes. |
| `tareas.forEach(...)` | Recorre las tareas almacenadas una por una. |
| `if (tarea.completada === false)` | Detecta una tarea pendiente. |
| `pendientes = pendientes + 1` | Incrementa el total de tareas sin completar. |
| Condición del filtro `pendientes` y `return` | Omite la tarea actual si está completada y solo se muestran pendientes. |
| Condición del filtro `completadas` y `return` | Omite la tarea actual si sigue pendiente y solo se muestran completadas. |
| `document.createElement("li")` y asignación de clase `tarea` | Crean el contenedor de lista para la tarea actual y le aplican su estilo base. |
| `document.createElement("span")` | Crea el espacio de texto para describir la tarea. |
| Asignación a `descripcion.textContent` | Combina el nombre de la tarea con su prioridad. |
| `if (tarea.completada)` | Comprueba si la tarea ya fue terminada. |
| `descripcion.classList.add("completada")` | Aplica el estilo tachado y atenuado a una tarea completada. |
| Creación de `botonCompletar` y asignación de `type` | Crea un botón que no envía formularios por accidente. |
| Asignación condicional de `textContent` | Muestra **Completar** si falta terminarla o **Completada** si ya está hecha. |
| `botonCompletar.disabled = tarea.completada` | Desactiva el botón de completar cuando la tarea ya fue terminada. |
| Evento `click` del botón de completar | Marca `tarea.completada = true` y vuelve a dibujar la lista y el contador. |
| Creación de `botonEliminar`, su texto y clase | Construye el botón de eliminación con su estilo particular. |
| Evento `click` del botón de eliminar | Inicia la eliminación de la tarea seleccionada. |
| `tareas.indexOf(tarea)` | Obtiene la posición del objeto actual en el arreglo. |
| `tareas.splice(indice, 1)` | Quita un elemento del arreglo desde esa posición. |
| `mostrarTareas()` después de `splice` | Actualiza la lista y el contador tras eliminar. |
| Tres llamadas a `appendChild(...)` | Colocan descripción y botones dentro del elemento de tarea. |
| Evento `mouseenter` | Muestra en el aviso el nombre y la prioridad al entrar el cursor en una tarea. |
| Evento `mouseleave` | Limpia el mensaje cuando el cursor sale de la tarea. |
| `listaTareas.appendChild(elementoTarea)` | Añade la tarea construida a la lista visible. |
| `contadorPendientes.textContent = ...` | Presenta el total de pendientes después de recorrer el arreglo. |
| `botonAgregar.addEventListener("click", ...)` | Escucha la acción para crear una tarea nueva. |
| `const nombreTarea = nuevaTarea.value.trim()` | Obtiene el texto y elimina espacios externos. |
| `if (nombreTarea === "")` | Evita crear tareas sin nombre. |
| Aviso y `return` en esa condición | Informa que falta el nombre y cancela la acción. |
| El objeto `tarea` con `nombre`, `prioridad` y `completada` | Reúne los datos iniciales de la tarea; `false` significa que aún está pendiente. |
| `tareas.push(tarea)` | Guarda el nuevo objeto en el arreglo. |
| `nuevaTarea.value = ""` | Limpia el campo después de agregar la tarea. |
| `aviso.textContent = ""` | Quita el aviso anterior al completar correctamente la acción. |
| `mostrarTareas()` | Redibuja la lista para incluir la tarea nueva y actualizar el contador. |
| `filtro.addEventListener("change", mostrarTareas)` | Vuelve a mostrar la lista con el filtro elegido cuando cambia el selector. |

## Criterios de implementación

Las variables se declaran con `const` para referencias que no se reasignan, como los elementos seleccionados del DOM, y con `let` para valores que cambian durante la interacción, como el contador, el presupuesto o el estado de una tarea.

La selección de elementos se realiza mediante métodos del DOM como `getElementById()` y `querySelectorAll()`. Los eventos se registran con `addEventListener()`. Las entradas se leen desde `value`, el texto visible se actualiza con `textContent` y los estados visuales se controlan con estilos y clases CSS.

## Organización del proyecto

```text
dom-eventos-javascript/
├── index.html
├── README.md
├── css/
│   ├── navegacion.css
│   └── style.css
├── ejercicio-01/ ... ejercicio-15/
│   ├── index.html
│   ├── css/estilos.css
│   └── js/app.js
└── ejercicio-13/img/
    ├── montanas.svg
    ├── playa.svg
    └── bosque.svg
```
