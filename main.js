"use strict";
function cargar() {
    let cont = [];
    let promedio = 0;
    series.forEach(function (serie) {
        document.getElementById(serie.id + "-1").innerHTML = String(serie.id);
        document.getElementById(serie.id + "-2").innerHTML = serie.name;
        document.getElementById(serie.id + "-3").innerHTML = serie.channel;
        document.getElementById(serie.id + "-4").innerHTML = String(serie.seasons);
        cont.push(serie.seasons);
    });
    cont.forEach(function (cont) {
        promedio += cont;
    });
    promedio = promedio / cont.length;
    document.getElementById("promedio").innerHTML = "Seasons average: " + String(promedio);
}
window.onload = cargar;
