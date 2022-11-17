// function timeout() {
//     console.log("Erst nach 3 Sekunden")
// }
//Der Timeout-Handler ruft die Funktion erst nach 3000ms auf
// setTimeout(timeout, 3000);

//============================================

//Neues Objekt erstellt vom Constructor Date und in die Variable date1 gespeichert
// function getTime() {
//     let date1 = new Date();
//     console.log(date1.toLocaleTimeString("de-De"));
// }
// Ruft die Funktion jede Sekunde erneut auf
// setInterval(getTime, 1000);
//============================================


let i = 10;

function counter() {
    console.log(i);
    i--;

    if (i < 0) {
        clearInterval(myInterval);
        console.log("Feierabend!")
    }
}

let myInterval = setInterval(counter, 1000);