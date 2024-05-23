import "./Card.scss"
import { Link } from "react-router-dom"

export default function Card({ title, picture, id }) {
    return (
        <div className="card">
            <Link to={"/logement/" + id}>
                <p>{title}</p>
                <img src={picture} alt="card" />
            </Link>
        </div>
    )
}