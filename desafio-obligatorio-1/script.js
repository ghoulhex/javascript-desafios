const sumarNumeros = () => {

    let numero1 = parseFloat(prompt("Ingrese un numero"))
    let numero2 = parseFloat(prompt("Ingrese otro numero para sumarlo"))

    let suma = numero1 + numero2;

    alert(`La suma de los numeros ingresados es: ${suma}`)
}

sumarNumeros();