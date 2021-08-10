//

function numeroAleatorio() {
    let randomN = Math.floor(Math.random() * 10) + 1;
    return randomN;
}

function compare(userN, RandN) {
    if (userN == RandN) {
        alert(
            "Felicitaciones! Acertaste! Podes sumar esto como uno de los grandes logros de tu vida :D."
        );
        return true;
    } else {
        alert("Casi! Pero no es el numero.");
        return false;
    }
}

function game() {
    let number = numeroAleatorio();
    let userTry = parseInt(
        prompt(
            "Adivina que numero estoy pensando. Ingresa un numero del 1 al 10. Tenes 3 intentos:"
        )
    );
    let tries = 2;
    let answer = compare(userTry, number);
    while (answer == false && tries != 0) {
        userTry = parseInt(prompt("Ingresa otro numero:"));
        answer = compare(userTry, number);
        tries--;
    }
    if (answer == false) {
        alert("Perdiste! Perdiste! No hay nadie peor que vos! :C .");
    }
}

function randomNumberGame() {
    let start = prompt(
        'Hola. Escribe "si" para empezar el juego o "no" para salir:'
    );
    while (start !== "no") {
        game();
        start = prompt("Queres jugar otra vez? si/no :");
        if (start !== "si" && start !== "no") {
            alert("Ingrsaste una opcion no valida.");
        }
    }
}

randomNumberGame();
