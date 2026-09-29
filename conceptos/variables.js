// MISIÓN 2: VARIABLES

const nombreEstudiante = "Mariangel";
const anioNacimiento = 2008;

const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();

let edad = anioActual - anioNacimiento;

console.log("Nombre:", nombreEstudiante);
console.log("Año de nacimiento:", anioNacimiento);
console.log("Edad aproximada:", edad);

// TIPOS DE DATOS

const nombre = "Yesid";
let edadSofi = 20;
let precio = 19.99;
let esEstudiante = true;

console.log(nombre);
console.log(edadSofi);
console.log(precio);
console.log(esEstudiante);

// OPERADORES MATEMÁTICOS

let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 5;
let division = 50 / 2;
let residuo = 10 % 3;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Residuo:", residuo);

// COMPARADORES

console.log(10 > 5);
console.log(10 === 10);
console.log(10 !== 5);
console.log(5 <= 3);

// MISIÓN 3: CONTADOR DE CLICKS

let contador = 0;

const boton = document.querySelector("#btn-sumar");
const valor = document.querySelector("#valor");

boton.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
});

// MANIPULACIÓN DEL DOM

const titulo = document.querySelector("#titulo");
const botonCambiar = document.querySelector("#btn-cambiar");

botonCambiar.addEventListener("click", () => {
    titulo.textContent = "¡Texto cambiado!";
});
