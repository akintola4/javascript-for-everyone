
import MainContent from "./Component/MainContent";
import Nav from "./Component/Nav"
import Footer from "./Component/Footer";
export default function App() {
    return(
        <div className="container">
            <Nav />
            <MainContent />
            <Footer />
        </div>
    )
}