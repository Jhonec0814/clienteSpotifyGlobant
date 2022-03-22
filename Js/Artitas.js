
export function identificarArtistas(opcion){
    let URI
    switch(opcion){

        case 1: 
            // Dua Lipa
            URI= "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US"
            break
        case 2:
            // Miley Cyrus
            URI="https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"
            break
        case 3:
            // Sia
            URI="https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN/top-tracks?market=US"
            break
        case 4:
            // Doja Cat
            URI="https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5/top-tracks?market=US"
            break
        case 5:
            // Christina Aguilera
            URI="https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS/top-tracks?market=US"    
            break   
        default:
            console.log("Ingrese una opción valida") 
            URI=""
            break   
    }
    
    return URI
    
}


