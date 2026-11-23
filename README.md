# Ejercicios de DOM y eventos en JavaScript (1 al 10)

Este proyecto reúne los primeros diez ejercicios de la actividad de **DOM y eventos**. Con ellos se practica cómo conectar elementos HTML con JavaScript para responder a clics, escritura y cambios de selección, y cómo actualizar lo que ve la persona en la página.

Los ejercicios 1 al 5 se hicieron inicialmente con `var`. En los ejercicios 6 al 10 se empieza a usar JavaScript moderno con `const` y `let`, de acuerdo con las lecturas de clase. Cada ejercicio está separado en su propia carpeta y funciona en el navegador sin backend ni instalación adicional.

## Cómo abrir y recorrer el proyecto

Abre el archivo `index.html` que está dentro de la carpeta del ejercicio que quieras revisar. Por ejemplo, abre `ejercicio-01/index.html` para el saludo o `ejercicio-10/index.html` para el semáforo. También puedes abrir el `index.html` de la raíz si está configurado como página de entrada del proyecto.

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

## Variables: de `var` a `const` y `let`

En los ejercicios 1 al 5 se usa `var`, que es una forma antigua de declarar variables y aparece en el código con el que se empezó a trabajar. Desde el ejercicio 6 se usan `const` y `let`, siguiendo la lectura de scope:

- **`const`** se usa para una referencia que no se va a reasignar, por ejemplo el botón, el input o el párrafo que se selecciona una vez del HTML. El elemento puede cambiar su contenido o estilo; `const` significa que la variable seguirá apuntando a ese mismo elemento.
- **`let`** se usa cuando la variable guardará un valor que se reasigna, como un contador o un resultado que se calcula de nuevo. En los ejercicios 6 al 10 muchas variables son referencias constantes del DOM, por eso basta con `const`; los valores calculados dentro de una acción se guardan en `const` si no necesitan reasignarse.

El **scope** es el alcance de una variable: indica en qué parte del código puede utilizarse. Por ejemplo, variables declaradas dentro de la función de un evento se usan dentro de esa función. La recomendación de estos ejercicios es empezar con `const` y elegir `let` si el valor realmente debe cambiar. En los ejercicios 6 al 10 no se usa `var`.

## Eventos y tipos de datos que aparecen

- `click`: se activa al pulsar un botón.
- `input`: se activa cuando cambia lo que se escribe en un campo.
- `change`: se activa cuando cambia la opción de un selector.
- `keydown`: se activa cuando se presiona una tecla y permite revisar cuál fue con `evento.key`.
- `load` y `error`: indican si una imagen terminó de cargar o no pudo cargarse.

Los campos de texto proporcionan valores de tipo **string**. Los ejercicios pueden mostrarlos como texto o convertirlos con `Number(...)` para hacer operaciones. Los resultados de comparaciones, como `numero >= 10`, son valores booleanos (`true` o `false`) que se usan en condiciones. Las etiquetas y botones que seleccionamos son objetos del DOM, con propiedades y métodos como `value`, `textContent`, `style` y `addEventListener`.

## Resumen de tecnologías

- **HTML:** crea los inputs, botones, párrafos, listas, tarjeta y luces.
- **CSS:** define colores, tamaños y presentación, y representa los estados visuales.
- **JavaScript:** selecciona los elementos, escucha eventos, valida entradas y cambia el contenido o la apariencia.
- **DOM:** es la representación de la página que JavaScript puede consultar y actualizar mientras se usa.
