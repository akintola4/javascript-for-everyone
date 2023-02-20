
import Card from "./Component/Card";
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
export default function App() {
    return(
        <div className="container">
            <Nav />
            <Hero />
            <Card />
        </div>
    )
}