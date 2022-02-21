// ----------Constructor-----------

class Producto {
    constructor (id, nombre, artista, release, precio) {
        this.id = id,
        this.nombre = nombre,
        this.artista = artista,
        this.release = release,
        this.precio = precio
    }
}

// -----------Objetos-----------

const disco1 = new Producto(1, "American Football", "American Football", 1999, 8);
const disco2 = new Producto(2, "Rain in July", "Neck Deep", 2014, 5);
const disco3 = new Producto(3, "Dear Diary, My Teen Angst Has A Body Count", "From First to Last", 2004, 6);
const disco4 = new Producto(4, "Discovering the Waterfront", "Silverstein", 2005, 7);

//-------------- Array-------------

const discos = []
discos.push(disco1, disco2, disco3, disco4);

// -----------Funciones----------

let nombre = prompt("Ingrese su Nombre.")
let seleccion, x = null;

function saludo() {
    alert(`Bienvenido a la tienda de discos ${nombre}.`)
}

saludo();

do {

    seleccion = parseInt(prompt(`Seleccion una opción: 
    1) Buscar Disco
    2) Mostrar Disco
    3) Mostrar Discos
    4) Salir`))

    switch (seleccion) {
        case 1:
            x = parseInt(prompt("Ingrese la ID del disco que quiera buscar:"));
            for (let i = 0; i < discos.length; i++) {
                if (discos[i].id == x) {
                    console.log(discos[i]);
                }                
            }

            break;
        
        case 2:
            seleccion = parseInt(prompt(`Seleccione el disco que quiere ver:
            1) American Football - American Football
            2) Rain in July - Neck Deep
            3) Dear Diary, My Teen Angst Has A Body Count
            4) Discovering the Waterfront - Silverstein`))
            
            if (seleccion == 1) {
                console.log(discos[0])
            } else if (seleccion == 2) {
                console.log(discos[1])
            } else if (seleccion == 3) {
                console.log(discos[2])
            } else if (seleccion == 4) {
                console.log(discos[3])
            } else if (seleccion == 5) {
                break
            }

        case 3:
            console.log(discos);

        default:
            break;
    }




} while (seleccion != 4);

