function calcularFactorial() {
    // Solicitar al usuario un número
    var numero;
    do {
        var input = prompt("Ingrese un número:");
        numero = parseFloat(input);
        if (isNaN(numero)) {
            console.error("Error: Ingresa un valor numérico válido.");
        }
    } while (isNaN(numero));

    // Calcular el factorial del número utilizando recursión
    var factorial = calcularFactorialRecursivo(numero);

    // Imprimir el resultado por consola o por el DOM
    console.log("El factorial de", numero, "es:", factorial);
}

function calcularFactorialRecursivo(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    return n * calcularFactorialRecursivo(n - 1);
}

// Llamar a la función para iniciar el programa
calcularFactorial();
