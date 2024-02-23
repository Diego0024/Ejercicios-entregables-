function calcularFibonacci(n) {
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    return fibonacciSeries;
}

function obtenerNumeroUsuario() {
    let numero = prompt("Por favor, ingresa un número para generar la serie de Fibonacci:");

    // Verificar si el valor ingresado es un número válido
    while (isNaN(numero)) {
        numero = prompt("Error: Debes ingresar un número válido. Por favor, intenta de nuevo:");
    }

    return parseInt(numero);
}

function mostrarResultado(resultado) {
    console.log(resultado.join(", "));
}

function generarSerieFibonacci() {
    const numero = obtenerNumeroUsuario();
    const serieFibonacci = calcularFibonacci(numero);
    mostrarResultado(serieFibonacci);
}

generarSerieFibonacci();
