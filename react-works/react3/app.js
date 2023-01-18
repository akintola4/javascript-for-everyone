 //we are wrirting in pasacal case
 //we are goung to be creating our JSX in function 

 function Content() {
    return (
        <div>
            <header>
                <nav>
                <img src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" width="100px" />
                <h1>Reasons why i want to learn React</h1>
                </nav>
            </header>
        <ol>
            <li>Major step after javascript</li>
            <li>It a very popular library</li>
           <li>very use for frontend development</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ol>
        <footer>"©️ 20xx Akintola Tope Akinfolarin development All rights reserved"</footer>
    </div>
    )
 } 
 //we can call it in two ways 
 //Content() or <Content />
ReactDOM.render(<Content />, document.getElementById("maincontent"))