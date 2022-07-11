import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/layout/Footer.css"

const Footer = (props) =>{
    return(
        <footer>
            <div className="redes">
                <a href=""><img src="images/footer/fb.png"></img></a>
                <a href=""><img src="images/footer/ig.png"></img></a>
                <a href=""><img src="images/footer/wa.png"></img></a>
                <a href=""><img src="images/footer/ln.png"></img></a>
            </div>
            <div className="derechos">
                <p>Derechos reservados. TecnoNews año 2022</p>
            </div>
            <div className="administrador">
                <Link to="login">Administrar</Link>
            </div>
        </footer>
    );
}

export default Footer;