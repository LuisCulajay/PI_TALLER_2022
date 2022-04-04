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