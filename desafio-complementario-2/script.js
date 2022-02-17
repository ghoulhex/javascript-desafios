class auto {
	constructor(marca, modelo) {
		this.marca = marca;
		this.modelo = modelo;
	}
}

const auto1 = new auto("Toyota", "AE86")
const auto2 = new auto("Honda", "Civic")

let arrayAutos = [auto1, auto2]

for (let i = 0; i < arrayAutos.length; i++) {
    console.log(arrayAutos[i]);
}