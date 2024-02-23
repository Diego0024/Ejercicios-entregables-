function convertirTemperatura() {
    // Solicitar la temperatura en grados Celsius al usuario
    var temperaturaCelsius;
    do {
        var input = prompt("Ingrese la temperatura en grados Celsius:");
        temperaturaCelsius = parseFloat(input);
        if (isNaN(temperaturaCelsius)) {
            console.error("Error: Ingresa un valor numérico válido.");
        }
    } while (isNaN(temperaturaCelsius));

    // Convertir la temperatura a grados Fahrenheit y Kelvin
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    var temperaturaKelvin = temperaturaCelsius + 273.15;

    // Imprimir los resultados por consola o por el DOM
    console.log("Grados Fahrenheit:", temperaturaFahrenheit.toFixed(2));
    console.log("Grados Kelvin:", temperaturaKelvin.toFixed(2));
}

// Llamar a la función para iniciar el programa
convertirTemperatura();
