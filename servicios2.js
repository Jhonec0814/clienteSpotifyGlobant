import {URI, PARAMETROS_PETICION} from "./CONSTANTES.js"

// Función para consumir APIS (DATOS)
// de cualquier servidor con JS PURO

async function consumirAPI(){
    let respuesta = await fetch(URI,PARAMETROS_PETICION)
    let canciones = respuesta.json()
    return(canciones) 
}

export let resultado = await consumirAPI()

