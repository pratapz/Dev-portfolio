import React from "react"
import "./css/navbar.css"

function NavBar(params) {
    return(
        <div className="nav">
            <ol>
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Contact</li>
            </ol>
        </div>
    )
}

export default NavBar;