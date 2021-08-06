let clavos = parseInt(prompt("Cuantos clavitos clavó Pablito?"));

if (clavos == 0) {
    alert("Pablito no clavó ningun clavito");
} else {
    for (let i = 1; i <= clavos; i++) {
        if (i == 1) {
            alert("Pablito clavó " + i + " clavito");
        } else {
            alert("Pablito clavó " + i + " clavitos");
        }
    }
}
