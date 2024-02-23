import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario que ingrese una palabra o frase
        System.out.print("Por favor, ingresa una palabra o frase: ");
        String texto = scanner.nextLine();

        // Cerrar el objeto Scanner
        scanner.close();

        // Llamar al método para revertir la cadena y mostrar el resultado
        String resultado = revertirCadena(texto);
        System.out.println("El texto al revés es: " + resultado);
    }

    // Método para revertir una cadena
    public static String revertirCadena(String cadena) {
        // Crear un StringBuilder para almacenar el texto al revés
        StringBuilder reversed = new StringBuilder();

        // Recorrer la cadena de entrada de atrás hacia adelante
        for (int i = cadena.length() - 1; i >= 0; i--) {
            // Agregar cada carácter al StringBuilder en orden inverso
            reversed.append(cadena.charAt(i));
        }

        // Devolver el texto al revés como una cadena
        return reversed.toString();
    }
}
