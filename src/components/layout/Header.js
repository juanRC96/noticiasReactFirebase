import React from "react";
import "../../styles/components/layout/Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div className="holder">
                <Link to="/"><img src="images/newspaperlogo.png" width="80" alt="TecnoNews"/></Link>
                <Link to="/"><h1>TecnoNews</h1></Link>
            </div>
        </header>
    );
}
export default Header;