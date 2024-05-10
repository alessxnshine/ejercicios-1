// Dados dos números. Luego, determina e imprime si el primer número es mayor, menor o igual que el segundo.

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return "El primer número es mayor que el segundo.";
    } else if (numero1 < numero2) {
        return "El segundo número es mayor que el primero.";
    } else {
        return "Los dos números son iguales.";
    }
    
}

var num1 = 5;
var num2 = 5;

var resultado = compararNumeros(num1, num2);
console.log(resultado)
