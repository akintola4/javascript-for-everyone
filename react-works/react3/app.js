//we are goung to be creating our JSX in function 
//react component are codes that return react elements 


//we are wrirting in pasacal case first letter should be capital letter

//we are going to use class to style in css so we need to give them classes but to do that we need to use the JSX way for 
//classes which is (className)

function Header() {
    return (
        <header>
            <nav className="navigation">
                <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons why i want to learn React</h1>
            <ol>
                <li>Major step after javascript</li>
                <li>It a very popular library</li>
                <li>very use for frontend development</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>

    )
}

function Footer() {
    return (
        <footer className="footer">©️ 20xx Akintola Tope Akinfolarin development All rights reserved</footer>
    )
}
function Content() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
//we can call it in two ways 
//Content() or <Content />
ReactDOM.render(<Content />, document.getElementById("maincontent"))