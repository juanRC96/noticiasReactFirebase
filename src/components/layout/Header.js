import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div className="header">
                <Link to="/"><img src="images/tecnonews.jpg" width="80" alt="tecnonews"/></Link>
                <Link to="/"><h1>TecnoNews</h1></Link>
            </div>
        </header>
    );
}
export default Header;