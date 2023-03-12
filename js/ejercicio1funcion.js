/*Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.*/
function ejer10() {
    let numero = prompt("ingrese un numero");
    esPar(numero);

}

function esPar(num) {
    if (num % 2 == 0) {
        document.getElementById("demo10").innerHTML = ("el numero es par");

    } else {
        document.getElementById("demo10").innerHTML = ("el numero es impar");

    }

}