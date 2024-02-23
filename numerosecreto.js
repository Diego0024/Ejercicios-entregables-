function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function obtenerNumeroUsuario() {
    let numero = prompt("Intenta adivinar el número secreto (del 1 al 100):");

    // Verificar si el valor ingresado es un número válido
    while (isNaN(numero) || numero < 1 || numero > 100) {
        numero = prompt("Error: Debes ingresar un número válido del 1 al 100. Por favor, intenta de nuevo:");
    }

    return parseInt(numero);
}

function juegoAdivinarNumero() {
    const numeroSecreto = generarNumeroSecreto();
    const intentos = [];

    while (true) {
        const intento = obtenerNumeroUsuario();
        intentos.push(intento);

        if (intento === numeroSecreto) {
            console.log("Felicidades, adivinaste el número secreto.");
            console.log("Lista de números introducidos:", intentos.join(", "));
            break;
        } else {
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    }
}

juegoAdivinarNumero();
