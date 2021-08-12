class Patern {
    constructor(color, size, form) {
        this.color = color.toLowerCase();
        this.size = parseInt(size);
        this.form = form.toLowerCase();
    }

    changeColor() {
        this.color = prompt(
            "Ingrese un color: (Rojo / Azul / Verde)"
        ).toLowerCase();
        console.log(this.color);
        if (
            this.color == "rojo" ||
            this.color == "verde" ||
            this.color == "azul"
        ) {
            alert("Ha seleccionado el color " + this.color);
        } else {
            alert("Ha ingresado una opcion incorrecta");
        }
    }

    changeSize() {
        this.size = parseInt(
            prompt(
                "Elija uno de los siguentes tamaños: (32 / 64 / 128 / 256 / 512 / 1024 / 2048 / 4086)"
            )
        );
        if (
            this.size == 32 ||
            this.size == 64 ||
            this.size == 128 ||
            this.size == 256 ||
            this.size == 512 ||
            this.size == 1024 ||
            this.size == 2048 ||
            this.size == 4086
        ) {
            alert("Ha seleccionado el tamaño " + this.size);
        } else {
            alert("Ha ingresado una opcion incorrecta");
        }
    }

    changeForm() {
        this.form = prompt(
            "Ingrese una forma: (Rectangulo, Circulo)"
        ).toLowerCase();
        console.log(this.form);
        if (this.form == "circulo" || this.form == "rectangulo") {
            alert("Ha seleccionado la forma " + this.form);
        } else {
            alert("Ha ingresado una opcion incorrecta");
        }
    }
}

function createPatern() {
    let res = prompt("Quiere crear un nuevo patron? (Si/No)");
    res = res.toLowerCase();
    if (res == "si") {
        const patern1 = new Patern("", "", "");
        patern1.changeColor();
        patern1.changeSize();
        patern1.changeForm();
        console.log(patern1);
    }
}

alert("Bienvenido");
createPatern();
