// CONTADOR INICIAL

let contador = 0;

// SELECCIONAR ELEMENTOS

const valorPantalla = document.querySelector("#valor");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnRestar = document.querySelector("#btn-restar");

// CAMBIAR EL COLOR

function actualizarColor() {
    if (contador > 0) {
        valorPantalla.style.color = "#16a34a";
    } else if (contador < 0) {
        valorPantalla.style.color = "#dc2626";
    } else {
        valorPantalla.style.color = "#0f172a";
    }
}

// ACTUALIZAR LA PANTALLA

function actualizarPantalla() {
    valorPantalla.textContent = contador;
    actualizarColor();
}

// AUMENTAR

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarPantalla();
});

// DISMINUIR

btnRestar.addEventListener("click", () => {
    contador--;
    actualizarPantalla();
});

// MOSTRAR VALOR INICIAL

actualizarPantalla();