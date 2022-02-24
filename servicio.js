// Pasos para consumir de un API con JS puro

// 1. La URI del SERVICIO (Pa' onde vas)

const URI="https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US"

// 2. Necesito los permisos
const TOKEN="Bearer BQBN6XMyCV8_aDTcvc4CohWXFD6feYovlfT7XWuhMn4DoNX4fF8brGFNN860_ugtf6w4tSSIkUdYUh-_fOw73q5LxlklqsyDEvsyRnGeNgpoPiX-8jzp_IWeCmCP_CAHoSR1M5Nsl6Vspq_j"

// Configuro método, cabeceras y cuerpo de la petición
let parametrosPeticion={
    method:"GET", 
    headers:{Authorization:TOKEN}
}

// 4. Consumo el API (Arranco pal restaurate) (Le toco la puerta al servidor)
fetch(URI,parametrosPeticion)

 .then(respuesta=> respuesta.json())
    

 .then(respuestaJSON=> console.log(respuestaJSON.tracks))
    

 .catch(respuestaERROR=> console.log(respuestaERROR))

