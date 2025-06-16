// Selecciona el elemento con id "display" (donde se muestra el resultado de la calculadora)
const display = document.querySelector('#display');

// Selecciona todos los botones de la página
const buttons = document.querySelectorAll('button');

// Recorre todos los botones y les asigna una función cuando se hace clic
buttons.forEach((item) => {
    item.onclick = () => {
        // Si el botón tiene el id "clear", se borra todo el contenido del display
        if (item.id == 'clear') {
            display.innerText = "";
        }
        // Si el botón tiene el id "backspace", borra el último carácter del display
        else if (item.id == 'backspace') {
            let string = display.innerText.toString(); // Convierte el texto a string por seguridad
            display.innerText = string.substr(0, string.length - 1); // Elimina el último carácter
        }
        // Si hay texto en el display y se presiona el botón "equal", evalúa la expresión
        else if (display.innerText != "" && item.id == 'equal') {
            display.innerText = eval(display.innerText); // eval() ejecuta la expresión matemática
        }
        // Si no hay nada en el display y se presiona "equal", muestra "Null" temporalmente
        else if (display.innerText == "" && item.id == 'equal') {
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000); // Limpia el display después de 2 segundos
        }
        // Para cualquier otro botón (números y operadores), agrega su id al display
        else {
            display.innerText += item.id;
        }
    };
});

// ==================== CAMBIO DE TEMA ==================== //

// Selecciona el botón de cambio de tema
const themeToggleBtn = document.querySelector(".theme-toggler");

// Selecciona la calculadora para cambiarle el estilo
const calculator = document.querySelector(".calculator");

// Variable para saber si el tema actual es oscuro
let isDark = true;

// Cuando se hace clic en el botón de cambio de tema
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark"); // Alterna la clase "dark" para cambiar estilo
    themeToggleBtn.classList.toggle("active"); // Alterna una clase para animar o indicar el botón activo
    isDark = !isDark; // Cambia el valor de isDark al contrario (true → false, o false → true)
};
