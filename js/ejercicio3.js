/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
 Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array
 el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

function ejer3() {


    let cajita = [];
    let sumas = [];
    let contador = [];
    let contador0 = 0, contador1 = 0, contador2 = 0, contador3 = 0, contador4 = 0, contador5 = 0, contador6 = 0, contador7 = 0, contador8 = 0, contador9 = 0, contador10 = 0, contador11 = 0, contador12 = 0;
    let valor = 0;
    let valor2 = 0;
    let suma;

    for (let index = 1; index <= 50; index++) {


        if (index % 5 == 0) {
            cajita[index] = ["[" + (valor = Math.floor(Math.random() * 7)), (valor2 = Math.floor(Math.random() * 7)) + "]<br>"];
            (suma = (valor + valor2));
            sumas[index] = suma;
        } else {
            cajita[index] = ["[" + (valor = Math.floor(Math.random() * 7)), (valor2 = Math.floor(Math.random() * 7)) + "]"];
            (suma = (valor + valor2));
            sumas[index] = suma;
        }

        switch (sumas[index]) {
            case 1:
                contador1 = contador1 + 1;
                if (contador1 == 1) {
                    contador[1] = ["<br>El numero 1 se encontro " + contador1 + " ves"];
                } else {
                    contador[1] = ["<br>El numero 1 se encontro " + contador1 + " veces"];
                }


                break;
            case 2:
                contador2 = contador2 + 1;
                if (contador2 == 1) {
                    1
                    contador[2] = ["<br>El numero 2 se encontro " + contador2 + " ves"];
                } else {
                    contador[2] = ["<br>El numero 2 se encontro " + contador2 + " veces "];
                }


                break;
            case 3:
                contador3 = contador3 + 1;
                if (contador3 == 1) {
                    contador[3] = ["<br>El numero 3 se encontro " + contador3 + " ves"];
                } else {
                    contador[3] = ["<br>El numero 3 se encontro " + contador3 + " veces"];
                }


                break;
            case 4:
                contador4 = contador4 + 1;
                if (contador4) {
                    contador[4] = ["<br>El numero 4 se encontro " + contador4 + " ves"];
                } else {
                    contador[4] = ["<br>El numero 4 se encontro " + contador4 + " veces"];
                }


                break;
            case 5:
                contador5 = contador5 + 1;
                if (contador5 == 1) {
                    contador[5] = ["<br>El numero 5 se encontro " + contador5 + " ves"];
                } else {
                    contador[5] = ["<br>El numero 5 se encontro " + contador5 + " veces"];
                }
                break;
            case 6:
                contador6 = contador6 + 1;
                if (contador6 == 1) {
                    contador[6] = ["<br>El numero 6 se encontro " + contador6 + " ves"];
                } else {
                    contador[6] = ["<br>El numero 6 se encontro " + contador6 + " veces"];

                }
                break;
            case 7:
                contador7 = contador7 + 1;
                if (contador7 == 1) {
                    contador[7] = ["<br>El numero 7 se encontro " + contador7 + " ves"];

                } else {
                    contador[7] = ["<br>El numero 7 se encontro " + contador7 + " veces"];

                }
                break;
            case 8:
                contador8 = contador8 + 1;
                if (contador8 == 1) {
                    contador[8] = ["<br>El numero 8 se encontro " + contador8 + " ves"];

                } else {
                    contador[8] = ["<br>El numero 8 se encontro " + contador8 + " veces"];

                }
                break;
            case 9:
                contador9 = contador9 + 1;
                if (contador9 == 1) {
                    contador[9] = ["<br>El numero 9 se encontro " + contador9 + " ves"];

                } else {
                    contador[9] = ["<br>El numero 9 se encontro " + contador9 + " veces"];

                }
                break;
            case 10:
                contador10 = contador10 + 1;
                if (contador10 == 1) {
                    contador[10] = ["<br>El numero 10 se encontro " + contador10 + " ves"];

                } else {
                    contador[10] = ["<br>El numero 10 se encontro " + contador10 + " veces"];

                }

                break;
            case 11:
                contador11 = contador11 + 1;
                if (contador11 == 1) {
                    contador[11] = ["<br>El numero 11 se encontro " + contador11 + " ves"];

                } else {
                    contador[11] = ["<br>El numero 11 se encontro " + contador11 + " veces"];

                }
                break;
            case 12:
                contador12 = contador12 + 1;
                if (contador12 == 1) {
                    contador[12] = ["<br>El numero 12 se encontro " + contador12 + " ves"];

                } else {
                    contador[12] = ["<br>El numero 12 se encontro " + contador12 + " veces"];

                } break;
            default:
                contador0 = contador0 + 1;
                if (contador0 == 1) {

                    contador[0] = ["en la suma de cada par de dados :<br>El numero 0 se encontro " + contador0 + " ves"];
                } else {
                    contador[0] = ["en la suma de cada par de dados :<br>El numero 0 se encontro " + contador0 + " veces"];
                }

        }


    }


    document.getElementById("demo3").innerHTML = cajita;

    document.getElementById("demo3-2").innerHTML = contador;

}