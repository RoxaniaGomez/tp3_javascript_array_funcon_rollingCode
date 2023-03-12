/*Realiza un script que pida una cadena de texto y lo 
muestre poniendo el signo – entre cada carácter sin usar
 el método replace. */
function ejer14() {

    let num = 0;
    do {
        if (isNaN(num)) {

            window.alert("debe ingresar un numero");

        }
        num = parseInt(prompt("ingrese un numero"));
    } while (isNaN(num));
    hacerTabla(num);

}
function hacerTabla(numero) {
    let tabla = "";
    for (let index = 1; index <= 10; index++) {
        tabla += (numero + " * " + index + " = " + (numero * index)) + "<br>";

    }

    document.getElementById("demo14").innerHTML = (tabla);
}