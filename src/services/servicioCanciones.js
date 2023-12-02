export async function obtenerCancionesTop(token) {
    const URL_TOPTRACKS_SERVICE = 'https://api.spotify.com/v1/artists/{id}/top-tracks'
    const PETICION_CANCIONES = {
        method : "GET",
        headers:"Authorization:"+token
    }
    let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICION_CANCIONES)
    let canciones = respuestaServicio.json()
    return canciones()
    
}
