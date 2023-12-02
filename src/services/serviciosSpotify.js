export async function obtenerTokenSpotify() {
    //1- preparar pa donde voy? a hacer que? y con que datos?
    const URL_TOKEN_SERVICE="https://accounts.spotify.com/api/token"
    const METODO_HTTP="POST"
    const CLIENT_ID="0b3d187653ac49d69791bdab14c5e14a"
    const CLIENT_SECRET="38230343c69948218edfbe05f90edaa8"
    const GRANT_TYPE="client_credentials"

    const PETICION_TOKEN={
        method:METODO_HTTP,
        headers:{
            "content-type":"application/X-WWW-form-urlencoded"
        },
        body:`grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }


    //2- iniciar la comunicacion e ir hasta el back con la peticion
    let respuestaServidor=await fetch(URL_TOKEN_SERVICE,PETICION_TOKEN)
    let tokenrespuesta=await respuestaServidor.json()

    //3- entregar el resultado al componente para que se lo pinte al usuario
    console.log("good")
    return tokenrespuesta
}
