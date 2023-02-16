
import MainContent from "./Component/MainContent";
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
export default function App() {
    return(
        <div className="container">
            <Nav />
            <Hero />
            <MainContent />
        </div>
    )
}