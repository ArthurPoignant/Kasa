import logo from "../LOGO2.png";
import "./Footer.scss"


function Footer() {
    return <>
        <div className="footer">
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </>
}

export default Footer