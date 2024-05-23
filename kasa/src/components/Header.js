import { Link, NavLink } from "react-router-dom";
import logo from "../LOGO.jpg";
import "./Header.scss"

export default function Header() {
    return <>
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="header_button">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/About">A Propos</NavLink>
            </div>
        </div>
    </>
}