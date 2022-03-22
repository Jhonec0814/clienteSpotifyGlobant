import {pintarCanciones} from "./pintarCanciones.js"
import {identificarArtistas} from "./Artitas.js"
import {TOKEN} from "./generarToken.js"
import {consumirAPI} from "./servicios.js"

// Obtengo del DOM (HTML) el valor de opcion

// Recibir la opción deseada
let opcion=5
// Obtengo las constantes
let URI = identificarArtistas(opcion)

// Llamo al servicio
let resultado=await consumirAPI(URI,TOKEN)

pintarCanciones(resultado)


