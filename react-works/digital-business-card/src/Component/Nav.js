
import logo from "../images/logo.svg"
export default function Nav() {
    return (
        <nav className="navigation">
            <div className="logoSection">
                <img className="logo" src= {logo}  alt="react logo" />
                <h2 className="logoName">Made with React</h2>
            </div>
                <h3 className="nav-items">Digital business card</h3>
        </nav>
    )
}