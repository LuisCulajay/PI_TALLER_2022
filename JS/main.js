/**
 * SECUENCIA DE EXPLICACION
 *  1. Mostrar página html y explicar
 *  2. Formas de ejecutar JS (consola y navegador)
 *  3. Colocar funcion en click de boton
 *  4. Código JS
 */

// console.log("hola mundo :D")
// window.alert("abc")

/**
 * JS es tipado dinamico
 */

// let a, b, c;
// var a, b, c;

/**
 * Diferencia entre LET y VAR
 * https://www.w3schools.com/js/js_let.asp
 */

/* let palabra = "perro"
a = 5;
console.log(a)
a = "hola";
console.log(a)
 */

/**
 * onchange	        An HTML element has been changed
 * onclick	        The user clicks an HTML element
 * onmouseover  	The user moves the mouse over an HTML element
 * onmouseout   	The user moves the mouse away from an HTML element
 * onkeydown    	The user pushes a keyboard key
 * onload   	    The browser has finished loading the page
 */

// --------------------------------------------------------------------

function evaluar_cadena() {
    // Aceptar solo letras y numeros
    var cadena = document.getElementById("input_buscar").value
    
    cadena = cadena.toLowerCase();
    resultado = true;
    let caracter;
    
    for (let i=0; i<cadena.length; i++) {
        caracter = cadena[i].charCodeAt()
        if (!((caracter >= 48 && caracter <= 57) || (caracter >= 97 && caracter <= 122))) {
            resultado = false
            break
        }
    }
    
    if (resultado) {
        window.alert("Correcto")
    } else {
        window.alert("Incorrecto x")
    }
    
}

function automata() {
    var cadena = document.getElementById("input_buscar").value

    cadena = cadena.toLowerCase()
    resultado = true
    let caracter;
    let estado = 0      // 5 estado de error 

    for(let k=0; k<cadena.length; k++) {
        if (resultado) {
            caracter = cadena[k].charCodeAt()
            switch(estado) {
                case 0:
                    switch(caracter) {
                        case 47:
                            estado = 1
                            break
                        default:
                            resultado = false
                    }
                    break;
                case 1:
                    switch(caracter) {
                        case 42:
                            estado = 2
                            break
                        default:
                            resultado = false
                    }
                    break;
                case 2:
                    switch(caracter) {
                        case 42:
                            estado = 3
                            break
                    }
                    break;
                case 3:
                    switch(caracter) {
                        case 47:
                            estado = 4
                            break
                        case 42:
                            estado = 3
                            break
                        default:
                            estado = 2
                    }
                    break;
                case 4:
                    // Cadenas con mas caracteres al final
                    resultado = false
                    break;
            }
        } else {
            break
        }
    }

    if (resultado && estado == 4) {
        window.alert("Válida :D")
    } else {
        window.alert("Incorrecto :/")
    }
}

console.log("funciona")