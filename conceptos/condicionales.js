// MISIÓN 6: ESTRUCTURAS CONDICIONALES

const edadUsuario = 15;

if (edadUsuario >= 18) {
    console.log("Puedes registrarte en el torneo de mayores.");
} else if (edadUsuario >= 13) {
    console.log("Bienvenido a la categoría juvenil.");
} else {
    console.log("Necesitas ser mayor de 13 años.");
}

// MISIÓN 7: FUNCIONES

function calcularPuntajeTotal(puntosNivel1, puntosNivel2) {
    let total = puntosNivel1 + puntosNivel2;

    return "Puntaje Final: " + total;
}

const resultado = calcularPuntajeTotal(450, 320);

console.log(resultado);