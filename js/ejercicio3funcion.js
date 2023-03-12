/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */
function ejer13() {
    let ladoA = 0;
    let ladoB = 0;
    do {
        if (isNaN(ladoA) || isNaN(ladoB)) {

            window.alert("alguno de los datos ingresados no es un numero, ingrese un numero");

        }
        ladoA = parseInt(prompt("ingre lado largo del rectangulo"));
        ladoB = parseInt(prompt("ingre lado corto del rectangulo"));
    } while (isNaN(ladoA) || isNaN(ladoB));

    calcularPerimetro(ladoA, ladoB);

}
function calcularPerimetro(largo, corto) {

    document.getElementById("demo13").innerHTML = ("el perimetro es: " + (2 * (largo + corto)));
}