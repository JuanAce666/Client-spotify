import './Home.css'
import{obtenerTokenSpotify} from '../services/serviciosSpotify.js'
import { obtenerCancionesTop } from '../services/servicioCanciones.js'
import { useEffect, useState } from 'react'

//optimize las lineas 
//las funciones y los dos servicios para controlar la excepcion cuando tenga el fetch
//en el home como hacer para que esos puntos then se vuelvan a wait, si dejo los then tengo que poner los catch
//opcion de que pueda tener una caja para escribir y que cuando escriba me aparezca el artista
//hacer un home bonito que se parezca a spotify y que alguna manera tenga un selector de artistas, solo 10 fijos y que aparezcan las canciones del artista
//hay un servicio que tiene un banner es decir que aparezca la foto del artista

export function Home() {

    const[carga, setCarga]=useState(true)
    const[canciones, setCanciones]=useState(null)
    
    useEffect(function(){
        obtenerTokenSpotify()
        .then(function(respuestaToken){
            obtenerCancionesTop(respuestaToken)
            .then(function(respuestaCanciones){
                console.log(respuestaCanciones)
                setCarga(false)   //interpolar
                setCanciones(respuestaCanciones.tracks)
            })
        }) //traducir a metodo wait
    },[])

    if(carga){
        return(
            <>
            <h1>cargando...</h1>
            </>
        )
    }else{
        return(
            <>
            <section className="banner">

            </section>
            <section className="container" >
                <div className="row row-cols-1 row-cols-md-5">
                    {
                        canciones.map(function(cancion){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow">
                                    <h3>{cancion.name}</h3>
                                    <audio src={cancion.preview_url} controls className='w-100'></audio>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            </>
        )
    }
}
