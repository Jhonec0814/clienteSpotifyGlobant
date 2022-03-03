// 1. Consumo de API desde un cliente JS

const URI = "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US"

const TOKEN ="Bearer BQBW72GRMJI1cf_PtPuCYYugnOIuF-D86O_U4MrGe_ykh5i8v9cLnMA3F90VPXbV7sgLZ0up_qQtKqJvMDbG-QNkb9lxkBBpN9Nw9SV94eOOgniQQujyyQhSlpFSxv9ibNpERuCPQrIRzil9"


const PARAMETROS_PETICION = {

    method:"GET", 
    headers:{ Authorization:TOKEN }

}

// 2. Ir a tocarle la puerta al servidor
fetch(URI,PARAMETROS_PETICION)

.then(function(respuesta){                          //1. Verificar el formato JSON de la respuesta

    return(respuesta.json())
})

.then(function(respuesta){                          //2. Hago lo que quiera con la respuesta

    /*console.log(cancion.name)
    console.log(cancion.preview_url)
    console.log(cancion.album.images[0].url)*/

    let contenedorCanciones = document.getElementById("contenedorCanciones")

    respuesta.tracks.forEach(function(cancion){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-60")
        imagen.classList.add("p-4")
        imagen.src = (cancion.album.images[0].url)

        let separador = document.createElement("hr")
        separador.classList.add("w-75")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")
        
        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = cancion.name

        let preview = document.createElement("audio")
        preview.classList.add("text-center")
        preview.setAttribute("controls","controls")
        preview.src = cancion.preview_url
        

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(preview)

        columna.appendChild(tarjeta)
        contenedorCanciones.appendChild(columna)

    })

    
})

.catch(function(respuesta){                         //3. Mostrar el mensaje de error de la respuesta
    console.log("ups..."+respuesta)

})

// _____________________________________________________________________________________

// Función pintar - Función encargada de recoger los datos y pintarlos en pantalla

function pintarCanciones(canciones){

    console.log("estamos pintando...")
    console.log(canciones)
}

