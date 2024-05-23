import { Link } from "react-router-dom"
import "./Error.css"

export default function Error() {
    return (
        <>
            <div className="error">
                <h1>404</h1>
                <p className="error-p">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/"><p className="error-link">Retourner sur la page d'accueil</p></Link>
            </div>
        </>
    )
}
