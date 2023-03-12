/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */
function ejer13() {
    let frase;
    let ladoA = parseInt(prompt("ingre lado largo del rectangulo"));
    let ladoB = parseInt(prompt("ingre lado corto del rectangulo"));
    calcularPerimetro(ladoA, ladoB);

}
function calcularPerimetro(largo, corto) {

    document.getElementById("demo13").innerHTML = ("el perimetro es: " + (2 * (largo + corto)));
}