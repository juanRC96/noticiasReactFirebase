import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Footer = () =>{
    return(
        <AuthContext.Consumer>
            {
                context =>(
                    <footer>
                    <div className="redes">
                        <a href="https://www.facebook.com/juan.cuesta.3192"><img src="images/footer/fb.png" alt=""></img></a>
                        <a href="https://www.instagram.com/juanirc1996/"><img src="images/footer/ig.png" alt=""></img></a>
                        <a href="https://www.whatsapp.com/"><img src="images/footer/wa.png" alt=""></img></a>
                        <a href="https://github.com/juanRC96"><img src="images/footer/gh.png" alt=""></img></a>
                        <a href="https://www.linkedin.com/in/juan-ignacio-cuesta/"><img src="images/footer/ln.png" alt=""></img></a>
                        <Link to={"/contacto"}><img src="images/footer/contact.png" alt=""></img></Link>
                    </div>
                    <div className="derechos">
                        <p>Derechos reservados. TecnoNews año 2022</p>
                    </div>
                    {
                        !context.userLogin &&
                        <div className="administrador">
                            <Link to="login">Administrar</Link>
                        </div>
                    }
                </footer>
                )
            }
        </AuthContext.Consumer>
    );
}

export default Footer;