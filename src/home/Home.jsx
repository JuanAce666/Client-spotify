import './Home.css'
import{obtenerTokenSpotify} from '../services/serviciosSpotify.js'


export function Home() {
    obtenerTokenSpotify()
    return(
        <>
            <section className = "banner">

            </section>
        </>
    )
}
