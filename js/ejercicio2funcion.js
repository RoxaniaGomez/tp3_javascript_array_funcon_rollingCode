/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.*/
function ejer11() {
    let texto = prompt("ingrese una oracion");
    tipoDeTexto(texto);
}
function tipoDeTexto(text) {

    let textoArray = text.split('');
    let banderaMayuscula = false;
    let banderaminuscula = false;
    for (let i = 0; i < textoArray.length; i++) {

        if (textoArray[i] === textoArray[i].toUpperCase() && textoArray[i] !== " ") {
            banderaMayuscula = true;

        } else if (textoArray[i] === textoArray[i].toLowerCase() && textoArray[i] !== " ") {
            banderaminuscula = true;

        }

    }
    if (banderaMayuscula && !banderaminuscula) {
        document.getElementById("demo11").innerHTML = ("la frase esta solo en mayuscula");

    } else if (!banderaMayuscula && banderaminuscula) {
        document.getElementById("demo11").innerHTML = ("la frase esta solo en minuscula");
    } else {
        document.getElementById("demo11").innerHTML = ("el texto tiene minuscula y mayuscula");
    }


}