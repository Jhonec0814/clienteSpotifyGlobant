// 1. Consumo de API desde un cliente JS

export const URI = "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US"

 const TOKEN ="Bearer BQCNnGLTVvbe-aAlaSpZaOGSeVGwpzanbngeCiKwMbeq5Z8f-d4lEQCyWgNWxMwjKouyRmXbdZO7NPnvn8yHrtPL021yaHCYEio1V6bhr4d7OtXCjEcqZ3Vw5LtWJ0XFii0otszJWkcCGfKB"


export const PARAMETROS_PETICION = {

    method:"GET", 
    headers:{ Authorization:TOKEN }

}