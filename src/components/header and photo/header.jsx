import React from "react";
import pngegg from "../pngegg.png"

function Header() {

return (
    <nav >
        <a href="#">
        <img src= {pngegg} />
        </a>
        <ul className="header-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    </nav>
)
}

export default Header;