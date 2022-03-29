import {pintarCanciones} from "./pintarCanciones.js"
import { generarURI } from "./generarArtistas.js"
import {generarToken} from "./generarToken.js"
import {consumirAPI} from "./servicios.js"



let card = document.getElementById("6M2wZ9GZgrQXHCFfjv46we")
card.addEventListener("click",function(evento){
evento.preventDefault()

    let artistaChoose = document.getElementById("cardDuaLipa").value

    let URI = generarURI(artistaChoose)

    async function activarAPI(){

        let token=await generarToken()
        console.log(token)

        let resultado= await consumirAPI(URI,token)
    
        console.log(resultado)
        pintarCanciones(resultado)
        }
        
        activarAPI()
        cards.innerHTML=""


})

let cards = document.getElementById("contenedorCanciones")

/*let boton = document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let artistaSeleccionada = document.getElementById("artista").value
    

    let URI = generarURI(artistaSeleccionada)
    
    

    async function activarAPI(){

    let token=await generarToken()
        console.log(token)

    let resultado= await consumirAPI(URI,token)

    console.log(resultado)
    pintarCanciones(resultado)
    }
    
    activarAPI()
    cards.innerHTML=""
})*/






