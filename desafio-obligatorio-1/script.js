// Saludar al cliente
// Mencionar las peliculas disponibles
// En base a lo que eligio, calcular el precio
// Informar al cliente el costo que debe abonar
// Cobrar el servicio

const saludar = () => {
    alert("Bienvenido a Blockbuster")
};

const peliculasDisponibles = () => {
    let peliculaID;

    do {
        peliculaID = parseInt(
            prompt("Que pelicula alquilara?\n1) El Padrino \n2) Greenbook\n3) Harry Potter\n4) Relatos Salvajes")
            )
    } while (peliculaID < 1 || peliculaID > 4 || isNaN(peliculaID));

    let peliculaTitulo;

    switch (peliculaID) {
        case 1:
            peliculaTitulo = "El Padrino";
            break;
        case 2:
            peliculaTitulo = "Greenbook";
            break;
        case 3:
            peliculaTitulo = "Harry Potter";
            break;
        case 4:
            peliculaTitulo = "Relatos Salvajes";
            break;          
    }
    return peliculaTitulo
}

const calcularPrecio = (peliculaTitulo) => {
	if (peliculaTitulo === "El Padrino") {
		return 150;
	} else if (peliculaTitulo === "Greenbook") {
		return 200;
	} else if (peliculaTitulo === "Harry Potter") {
		return 174;
	} else {
		return 500;
	}
};

let texto = ""
let total = 0

const informarProducto = (peliculaTitulo, precioAlquiler) => {
texto += `Pelicula : ${peliculaTitulo}\ nAlquiler: $${precioAlquiler}\n`;
total += precioAlquiler;
let seguir = confirm("Desea alquilar otra pelicula?");
if (seguir === true) {
	let peliculaTitulo = peliculasDisponibles();
	let precioAlquiler = calcularPrecio(peliculaTitulo);
	informarProducto(peliculaTitulo, precioAlquiler);
} else {
    alert("Usted lleva:")
    alert(texto)
    alert(`El total para abonar es de $${total}`)
}



}

saludar();
let peliculaTitulo = peliculasDisponibles();
let precioAlquiler = calcularPrecio(peliculaTitulo);
informarProducto(peliculaTitulo, precioAlquiler)
