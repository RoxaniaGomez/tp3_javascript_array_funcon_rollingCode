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
                contador[1] = ["en la suma el numero 1 se encontro: " + contador1 + " veces <br>"];

                break;
            case 2:
                contador2 = contador2 + 1;
                contador[2] = ["en la suma el numero 2 se encontro: " + contador2 + " veces <br>"];

                break;
            case 3:
                contador3 = contador3 + 1;
                contador[3] = ["en la suma el numero 3 se encontro: " + contador3 + " veces <br>"];

                break;
            case 4:
                contador4 = contador4 + 1;
                contador[4] = ["en la suma el numero 4 se encontro: " + contador4 + " veces<br>"];

                break;
            case 5:
                contador5 = contador5 + 1;
                contador[5] = ["en la suma el numero 5 se encontro: " + contador5 + " veces<br>"];

                break;
            case 6:
                contador6 = contador6 + 1;
                contador[6] = ["en la suma el numero 6 se encontro: " + contador6 + " veces<br>"];

                break;
            case 7:
                contador7 = contador7 + 1;
                contador[7] = ["en la suma el numero 7 se encontro: " + contador7 + " veces<br>"];

                break;
            case 8:
                contador8 = contador8 + 1;
                contador[8] = ["en la suma el numero 8 se encontro: " + contador8 + " veces<br>"];

                break;
            case 9:
                contador9 = contador9 + 1;
                contador[9] = ["en la suma el numero 9 se encontro: " + contador9 + " veces<br>"];

                break;
            case 10:
                contador10 = contador10 + 1;
                contador[10] = ["en la suma el numero 10 se encontro: " + contador10 + " veces<br>"];

                break;
            case 11:
                contador11 = contador11 + 1;
                contador[11] = ["en la suma el numero 11 se encontro: " + contador11 + " veces<br>"];

                break;
            case 12:
                contador12 = contador12 + 1;
                contador[12] = ["en la suma el numero 12 se encontro: " + contador12 + " veces<br>"];
                break;
            default:
                contador0 = contador0 + 1;
                contador[0] = ["en la suma el numero 0 se encontro: " + contador0 + " veces<br>"];
        }


    }


    document.getElementById("demo3").innerHTML = cajita;

    document.getElementById("demo3-2").innerHTML = contador;

}