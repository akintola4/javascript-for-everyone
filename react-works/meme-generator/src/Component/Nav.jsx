export default function Nav() {
    return (
        <nav className="navigation">
            
                <div className="logoSection">
                <img className="logo" src= "/react.svg" width="400px" alt="react logo" />
                    <h2 className="logoName">Made with React</h2>
                </div>
                <div className="logoSection">
                    <img className="logo" src="/TrollFace.png" width="100px" alt="" />
                    <h3 className="nav-items">Meme generator</h3>
                </div>
        </nav>
    )
}