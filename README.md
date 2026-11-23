# Ejercicios de DOM y eventos en JavaScript (1 al 15)

Este proyecto reúne los primeros quince ejercicios de la actividad de **DOM y eventos**. Con ellos se practica cómo conectar elementos HTML con JavaScript para responder a clics, escritura, envíos de formularios, cambios de selección y movimientos del cursor, y cómo actualizar lo que ve la persona en la página.

Los ejercicios 1 al 5 se hicieron inicialmente con `var`. Desde el ejercicio 6 se usa JavaScript moderno con `const` y `let`, de acuerdo con las lecturas de clase. Cada ejercicio está separado en su propia carpeta y funciona en el navegador sin backend ni instalación adicional.

## Cómo abrir y recorrer el proyecto

Abre el archivo `index.html` que está dentro de la carpeta del ejercicio que quieras revisar. Por ejemplo, abre `ejercicio-01/index.html` para el saludo o `ejercicio-15/index.html` para el gestor de tareas.

La estructura de cada ejercicio es:

```text
ejercicio-XX/
├── index.html       # Elementos y contenido de la página
├── css/
│   └── estilos.css  # Presentación visual
└── js/
    └── app.js       # Variables, eventos y comportamiento
```

El HTML carga la hoja de estilos y el archivo JavaScript. En el HTML, los atributos `id` identifican los campos, botones y zonas de resultado. JavaScript busca esos elementos con `document.getElementById(...)`, escucha eventos mediante `addEventListener(...)` y cambia contenido o estilos del DOM.

Los ejercicios 7 al 15 siguen la misma estructura. La galería del ejercicio 13 incluye además imágenes SVG locales dentro de `ejercicio-13/img/`.

## Ejercicios

### 1. Saludo personalizado

**Qué hace:** permite escribir un nombre, pulsar **Saludar** y ver un saludo en la página. Si el campo está vacío, muestra una indicación para escribir el nombre. El botón **Limpiar** borra el mensaje del resultado.

**Cómo funciona:** `app.js` obtiene el input, los dos botones y el párrafo de resultado por sus `id`. Al botón Saludar le asigna un evento `click`. Cuando se hace clic, lee la propiedad `value` del input y guarda el texto en `nombreUsuario`. Un `if` revisa si está vacío; luego `textContent` muestra el aviso o concatena el nombre con el saludo. El botón Limpiar tiene otro evento `click` que asigna una cadena vacía al párrafo.

**Qué se practica:** selección de elementos del DOM, variables declaradas con `var`, eventos `click`, lectura de `value`, condición `if/else` y actualización de texto con `textContent`.

### 2. Contador de clics

**Qué hace:** comienza en cero. **Aumentar** suma un clic y **Reiniciar** vuelve el contador a cero. Cuando llega a 10 o más, el número aparece en verde; por debajo de 10 aparece en negro.

**Cómo funciona:** `numero` guarda el valor que cambia. Al pulsar Aumentar, el código suma uno, actualiza el párrafo y evalúa el número para aplicar su color. Al pulsar Reiniciar, vuelve a asignar cero, actualiza el párrafo y restaura el color negro.

**Qué se practica:** una variable cuyo valor cambia, operaciones aritméticas, eventos `click`, condiciones, `textContent` y el cambio de un estilo mediante `elemento.style.color`. En este ejercicio la variable cambiante se declara con `var`, como en los primeros ejercicios.

### 3. Vista previa de texto

**Qué hace:** copia en una vista previa el contenido del campo mientras se escribe o se borra.

**Cómo funciona:** el código selecciona el input y el párrafo de vista previa. El evento `input` se activa cada vez que cambia el valor del input. Su función lee `textoUsuario.value` y asigna ese contenido a `vistaPrevia.textContent`.

**Qué se practica:** evento `input`, lectura de campos de texto y sincronización inmediata del contenido de dos elementos HTML. Se usan variables `var` para guardar las referencias del DOM.

### 4. Cambiador de color

**Qué hace:** muestra una tarjeta y un menú para escoger azul, verde, amarillo o rosa. Cuando cambia la opción, cambia el fondo de la tarjeta; su título y texto permanecen.

**Cómo funciona:** el evento `change` escucha el selector. Al cambiar la selección, JavaScript lee su `value` y asigna ese color a `tarjeta.style.backgroundColor`.

**Qué se practica:** el elemento `<select>`, el evento `change`, lectura del valor seleccionado y modificación de estilos CSS desde JavaScript. La variable que guarda el color seleccionado también se declara con `var`.

### 5. Mensaje al presionar Enter

**Qué hace actualmente:** permite escribir un mensaje. Al presionar Enter dentro del campo, muestra `Tu mensaje: ` seguido por el texto en el párrafo de resultado. Las demás teclas no activan la acción.

**Cómo funciona:** el código escucha `keydown` en el input. El evento entrega un objeto llamado `evento`; la condición compara `evento.key` con `"Enter"`. Solo si coinciden, lee `mensaje.value` y actualiza el párrafo usando `textContent`.

**Qué se practica:** evento de teclado `keydown`, parámetro de evento, propiedad `key`, condición y lectura de texto. El código actual no limpia el campo después de mostrar el mensaje.

### 6. Calculadora de IMC

**Qué hace:** recibe peso en kilogramos y estatura en metros. El botón **Calcular IMC** muestra el resultado con dos decimales. Si falta un dato o alguno es cero o negativo, presenta un aviso en la página.

**Cómo funciona:** los inputs entregan sus valores como texto (`string`), por lo que el código los convierte a número con `Number(...)`. Primero comprueba que los campos no estén vacíos y luego comprueba que los números sean mayores que cero. Si pasan las revisiones, calcula `peso / (estatura * estatura)` y usa `toFixed(2)` para mostrar dos decimales.

**Qué se practica:** evento `click`, conversión a tipo `number`, condiciones, `return` para terminar la función si hay un error, fórmula matemática y actualización del resultado.

### 7. Verificador de contraseña

**Qué hace:** muestra una pista de fortaleza mientras se escribe: menos de 6 caracteres es muy corta; de 6 a 9 es aceptable; 10 o más es fuerte. Al borrar todo vuelve a la instrucción inicial. Cada estado usa un color.

**Cómo funciona:** el evento `input` vuelve a revisar el valor cada vez que cambia el campo. `value.length` obtiene la cantidad de caracteres. Una cadena de condiciones `if/else if/else` decide el mensaje y la clase CSS que se coloca en el párrafo. Las clases `corta`, `aceptable` y `fuerte` definen los colores.

**Qué se practica:** evento `input`, propiedad `length`, condiciones encadenadas y uso de clases CSS para representar estados.

### 8. Lista de compras

**Qué hace:** agrega productos escritos por la persona a una lista visible sin quitar los que ya se habían agregado. Después de agregar uno, limpia el campo. Si está vacío o solo contiene espacios, muestra un aviso en la página.

**Cómo funciona:** al hacer clic en **Agregar**, `trim()` elimina espacios al principio y al final del texto. Si el resultado queda vacío, el código muestra el aviso y termina esa acción. Si hay un nombre, `document.createElement("li")` crea un elemento, `textContent` le asigna el nombre y `appendChild` lo agrega al `<ul>`. Finalmente limpia el input y devuelve el foco a ese campo.

**Qué se practica:** evento `click`, cadenas de texto, creación e inserción de elementos en el DOM, validación sencilla y métodos `trim`, `appendChild` y `focus`.

### 9. Tarjeta de perfil en vivo

**Qué hace:** actualiza en una tarjeta el nombre y la profesión a medida que se escriben. También permite cambiar la foto usando una URL. La tarjeta inicia con textos y una imagen de ejemplo.

**Cómo funciona:** cada campo de texto escucha `input`. Si el campo está vacío o tiene solo espacios, la tarjeta vuelve a mostrar el texto de ejemplo; de lo contrario, muestra lo escrito. El campo de foto es de tipo `url`: si el valor no está vacío y el navegador lo considera válido, se asigna a `imagenPerfil.src`. Los eventos `load` y `error` muestran o limpian un aviso según se cargue la imagen.

**Qué se practica:** actualización inmediata del DOM, validación básica de URL del navegador, atributos de imagen y eventos `input`, `load` y `error`.

### 10. Semáforo interactivo

**Qué hace:** ofrece botones rojo, amarillo y verde. Al pulsar uno, enciende la luz correspondiente, apaga las demás y muestra el mensaje **Detente**, **Precaución** o **Puedes avanzar**.

**Cómo funciona:** cada botón escucha `click`. Los tres manejadores llaman a `apagarLuces()`, que quita la clase `encendida` de todas las luces. Después, cada manejador añade esa clase a su luz y actualiza el mensaje de estado. CSS define la apariencia apagada y los colores brillantes de la luz encendida.

**Qué se practica:** funciones para reutilizar instrucciones, eventos `click`, `classList.add` y `classList.remove`, y texto dinámico con `textContent`.

### 11. Formulario de registro con validación

**Qué hace:** solicita nombre, correo y edad. Al pulsar **Registrarme**, revisa cada dato y muestra un mensaje debajo del campo que necesite corrección. Si el nombre no está vacío, el correo contiene `@` y la edad es de 18 años o más, muestra el mensaje de registro completado.

**Cómo funciona:** el formulario escucha el evento `submit`. `evento.preventDefault()` evita que el navegador recargue la página. Antes de revisar los datos, el código limpia los mensajes anteriores. La variable `formularioValido`, declarada con `let`, empieza en `true` y cambia a `false` si alguna regla falla. Cuando todo es válido, muestra el éxito y limpia el formulario con `reset()`.

**Qué se practica:** formularios, evento `submit`, evitar el envío tradicional, validaciones con condiciones, tipo `number`, método `includes()` para revisar el correo y variables booleanas.

### 12. Generador de tabla de multiplicar

**Qué hace:** recibe un número y presenta sus multiplicaciones desde 1 hasta 10. Si se genera otra tabla, la anterior se reemplaza. Si el campo está vacío, muestra un aviso.

**Cómo funciona:** el clic primero limpia el contenedor. Si hay un valor, lo convierte a número y crea una tabla HTML con JavaScript. Un ciclo `for` avanza del 1 al 10; en cada vuelta crea una fila y dos celdas, escribe la operación y su resultado y agrega esos elementos a la tabla.

**Qué se practica:** conversión de texto a número, ciclo `for`, creación dinámica de elementos (`table`, `tr`, `td`), multiplicación y limpieza de contenido con `textContent`.

### 13. Galería de imágenes con miniaturas

**Qué hace:** muestra una imagen principal con su título y tres miniaturas. Al elegir una miniatura, cambia la imagen grande y su título, y la miniatura activa queda marcada visualmente. Las imágenes son archivos SVG locales del proyecto.

**Cómo funciona:** `querySelectorAll()` obtiene todas las miniaturas y `forEach()` recorre cada una para asignarle un evento `click`. Los atributos `data-src` y `data-titulo` guardan los datos de cada imagen. Al hacer clic, se actualizan `src`, `alt` y el título. Luego se quita la clase `activa` de todas y se añade a la miniatura seleccionada.

**Qué se practica:** selección de varios elementos del DOM, atributos `data-*`, propiedades de imagen, ciclos `forEach`, eventos `click` y clases CSS.

### 14. Calculadora de presupuesto

**Qué hace:** permite guardar un presupuesto inicial, registrar gastos con nombre y valor, y ver el total gastado y el dinero restante. Si el total de los gastos supera el presupuesto, el saldo se muestra en rojo y aparece el aviso correspondiente.

**Cómo funciona:** `presupuestoInicial` y `presupuestoEstablecido` guardan el presupuesto y si ya fue confirmado. El arreglo `gastos` conserva los gastos como objetos con nombre y valor. Al agregar un gasto, se valida que haya presupuesto guardado, un nombre y un valor mayor que cero. `actualizarResumen()` recorre los gastos, suma sus valores y actualiza los tres totales. También compara el saldo para añadir o quitar la clase de saldo excedido.

**Qué se practica:** variables `let`, arreglos, objetos, funciones, ciclo `forEach`, suma y resta, validación, creación de elementos de lista y clases CSS condicionales.

### 15. Gestor de tareas con estado

**Qué hace:** agrega tareas con prioridad baja, media o alta. Cada una aparece con botones para completarla o eliminarla. Las tareas completadas permanecen en la lista con el texto tachado, el contador muestra solo las pendientes y un selector permite filtrar todas, pendientes o completadas. Al pasar el cursor sobre una tarea, aparece una breve descripción.

**Cómo funciona:** el arreglo `tareas` almacena objetos con `nombre`, `prioridad` y `completada`. Al agregar una tarea se valida el texto, se crea el objeto y se guarda con `push()`. `mostrarTareas()` reconstruye la lista desde el arreglo, cuenta las pendientes y respeta el filtro seleccionado. Los botones cambian el estado de la tarea o la quitan con `splice()`. Los eventos `mouseenter` y `mouseleave` actualizan el mensaje del cursor.

**Qué se practica:** arreglos y objetos, propiedades booleanas, funciones, ciclos, filtros con condiciones, eventos `click`, `change`, `mouseenter` y `mouseleave`, creación de controles HTML y actualización del contador.

## Variables: de `var` a `const` y `let`

En los ejercicios 1 al 5 se usa `var`, que es una forma antigua de declarar variables y aparece en el código con el que se empezó a trabajar. Desde el ejercicio 6 hasta el 15 se usan `const` y `let`, siguiendo la lectura de scope:

- **`const`** se usa para una referencia que no se va a reasignar, por ejemplo el botón, el input o el párrafo que se selecciona una vez del HTML. El elemento puede cambiar su contenido o estilo; `const` significa que la variable seguirá apuntando a ese mismo elemento.
- **`let`** se usa cuando la variable guardará un valor que se reasigna, como el estado de validación del registro, el presupuesto o una suma. En los ejercicios 6 al 15 muchas variables son referencias constantes del DOM, por eso basta con `const`; los valores calculados dentro de una acción se guardan en `const` si no necesitan reasignarse.

El **scope** es el alcance de una variable: indica en qué parte del código puede utilizarse. Por ejemplo, variables declaradas dentro de la función de un evento se usan dentro de esa función. La recomendación de estos ejercicios es empezar con `const` y elegir `let` si el valor realmente debe cambiar. En los ejercicios 6 al 15 no se usa `var`.

## Eventos y tipos de datos que aparecen

- `click`: se activa al pulsar un botón.
- `input`: se activa cuando cambia lo que se escribe en un campo.
- `change`: se activa cuando cambia la opción de un selector o el filtro de tareas.
- `keydown`: se activa cuando se presiona una tecla y permite revisar cuál fue con `evento.key`.
- `submit`: se activa al enviar un formulario; `preventDefault()` permite validar sin recargar la página.
- `mouseenter` y `mouseleave`: se activan al entrar o salir el cursor de una tarea.
- `load` y `error`: indican si una imagen terminó de cargar o no pudo cargarse.

Los campos de texto proporcionan valores de tipo **string**. Los ejercicios pueden mostrarlos como texto o convertirlos con `Number(...)` para hacer operaciones. Los resultados de comparaciones, como `numero >= 10`, son valores booleanos (`true` o `false`) que se usan en condiciones. El presupuesto y las tareas se guardan en arreglos (`array`) de objetos para mantener juntas varias piezas de información relacionada. Las etiquetas y botones que seleccionamos son objetos del DOM, con propiedades y métodos como `value`, `textContent`, `style` y `addEventListener`.

## Resumen de tecnologías

- **HTML:** crea inputs, botones, formularios, tablas, listas, tarjetas, imágenes y luces.
- **CSS:** define colores, tamaños y presentación, y representa los estados visuales.
- **JavaScript:** selecciona los elementos, escucha eventos, valida entradas y cambia el contenido o la apariencia.
- **DOM:** es la representación de la página que JavaScript puede consultar y actualizar mientras se usa.
