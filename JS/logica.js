/* console.log("javascript funciona :D") */

/**
 * javascript es tipado dinamico
 */

/* let nombre = "luis"
console.log("mi nombre es: ", nombre)

nombre = 20
console.log("valor: ", nombre) */

function analizar_cadena() {
    let texto = document.getElementById("input_buscar").value
    console.log("enviado desde la pagina: ", texto)
    
    let resultado = true;

    // verificar que la cadena contenga caracteres validos
    for (let i=0; i<texto.length; i++) {
        let caracter = texto[i].charCodeAt()
        // verificar si es una letra o numero
        if ((caracter >= 48 && caracter <= 60) || (caracter >= 97 && caracter <= 122) || (caracter == 32)) {
            console.log("numero o letra :)")
        } else {
            resultado = false;
            break;
        }
    }

    if (resultado) {
        console.log("Cadena valida :D")
    } else {
        console.log("Error en cadena escrita")
    }

}