//we are goung to be creating our JSX in function 
//react component are codes that return react elements 


//we are wrirting in pasacal case first letter should be capital letter

//we are going to use class to style in css so we need to give them classes but to do that we need to use the JSX way for 
//classes which is (className)

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


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