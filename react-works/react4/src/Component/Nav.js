import React from "react"
import logo from "../images/logo.svg"
export default function Nav() {
    return (
        <nav className="navigation">
            <div className="logoSection">
                <img className="logo" src= {logo}  alt="react logo" />
                <h2 className="logoName">ReactFacts</h2>
            </div>

            <ul className="nav-items">
                <h3>React Fun Facts</h3>
            </ul>
        </nav>
    )
}