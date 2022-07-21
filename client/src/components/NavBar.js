import React from "react";
import classes from "../css/navBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul className="NavList">
                {/* pending <Link to = "{route}" components */}
                <li>    
                    Home
                </li>
                <li>
                    Explore
                </li>
                <li>
                    Login
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;