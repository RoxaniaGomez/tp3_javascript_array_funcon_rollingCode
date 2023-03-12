function ejer2() {
    let paises = [];
    let posicion = 0;
    let dibujo = "";
    do {

        paises[posicion] = prompt("Ingrese Pais:");
        posicion++;
    } while (confirm("desea ingresar otro pais?"));
    dibujo += ("<ul><li>lista: ");

    for (let item of paises) {
        dibujo += (item + "-");
    }
    dibujo += ("</li>");
    dibujo += ("<li> cantidad de paises ingresados: " + paises.length + "</li>");
    dibujo += ("<li> primer pais: " + paises[0] + "</li>");
    dibujo += ("<li> tercer pais: " + paises[2] + "</li>");
    dibujo += ("<li> ultimo pais de la lista: " + paises[paises.length - 1] + "</li>");
    paises[posicion] = "paris";
    dibujo += ("<li> ingresar paris a la lista: ");
    for (let item of paises) {
        dibujo += (item + "-");
    }
    dibujo += ("<li> segunda posicion: " + paises[1] + "</li>");
    dibujo += ("<li>lista con barcelona sustituyendo la segunda posicion: ")
    paises[1] = "barcelona";
    for (let item of paises) {
        dibujo += (item + "-");
    }
    dibujo += ("</li></ul>");
    document.getElementById("demo2").innerHTML = (dibujo);

}