import { Link } from "react-router-dom"
import '../../styles/Error.css'

function Error(){
return(
    <div className="container d-flex flex-column text-center">
    <h1 className="title404">404</h1>
    <p className="sousTitle">Oups! La page que vous demandez n'existe pas.</p>
    <Link to ='/'className="errorPageLink">Retourner sur la page d'accueil</Link>
    </div>
)
}

export default Error