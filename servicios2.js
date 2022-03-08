// 1. Consumo de API desde un cliente JS

const URI = "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US"

const TOKEN ="Bearer BQBvkjzRAfrWKE3iV3jbdwgLWMQ_NqIv3Aoet6K8V1UxefJ8GPwlkSR3aTAGmd9Zk-Ki2aTeUAZGscBbpDH6dqjE1UrpX1-CdjVQqBXR6ZRXXFDfaL3ZxJNJMZCblIIFupVOHj6CVhBu930A"


const PARAMETROS_PETICION = {

    method:"GET", 
    headers:{ Authorization:TOKEN }

}

// Función para consumir APIS (DATOS)
// de cualquier servidor con JS PURO

async function consumirAPI(){
    let respuesta = await fetch(URI,PARAMETROS_PETICION)
    let canciones = respuesta.json()
    return(canciones) 
}

let resultado = await consumirAPI()
console.log(resultado)

