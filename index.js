// Solicitar al usuario 3 números
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));
var num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Identificar el número mayor, el número del centro y el número menor
var mayor, medio, menor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    medio = (num2 >= num3) ? num2 : num3;
    menor = (num2 <= num3) ? num2 : num3;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    medio = (num1 >= num3) ? num1 : num3;
    menor = (num1 <= num3) ? num1 : num3;
} else {
    mayor = num3;
    medio = (num1 >= num2) ? num1 : num2;
    menor = (num1 <= num2) ? num1 : num2;
}

// Imprimir los números ordenados de mayor a menor
console.log("Ordenados de mayor a menor:", mayor + ", " + medio + ", " + menor);

// Imprimir los números ordenados de menor a mayor
console.log("Ordenados de menor a mayor:", menor + ", " + medio + ", " + mayor);

// Verificar si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}
