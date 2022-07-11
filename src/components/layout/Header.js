import React from "react";
import "../../styles/components/layout/Header.css"

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <img src="images/newspaperlogo.png" width="80" alt="TecnoNews"/>
                <h1>TecnoNews</h1>
            </div>
        </header>
    );
}
export default Header;