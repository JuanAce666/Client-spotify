export async function obtenerCancionesTop(token){

    const URL_TOPTRACKS_SERVICE="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=us"

    const PETICON_CANCIONES={
        method:"GET",
        headers:{"Authorization":token}
    }


    let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICON_CANCIONES)
    let canciones = await respuestaServicio.json()
    return canciones

}