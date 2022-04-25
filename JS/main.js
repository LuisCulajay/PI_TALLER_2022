// window.alert("mensaje de JS")

console.log("hola mundo :D")

let nombre = "luis"
console.log(nombre)

let numero = 10
let arreglo = [1,2,3,4]

function analizar () {
    
    let texto = document.getElementById("input_buscar").value
    
    for (let i=0; i<texto.length; i++){
        console.log(texto[i])
    }

    let cuenta = 10
    while (cuenta > 0) {
        console.log("cuenta actual: ", cuenta)
        cuenta --
    }

    /* if (texto.length > 10) {
        window.alert("palabra muy grande")
    } else {
        window.alert("palabra correcta")
    } */
    
    switch(texto.length) {
        case 1:
            window.alert("tamaño 1")
            break
        case 2:
            window.alert("tamaño 2")
            break
        case 3:
            window.alert("tamaño 3")
            break
        default:
            window.alert("cadena enorme mayor a 4 caracteres")
    }
}

