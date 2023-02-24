import data from "./data";
import Card from "./Component/Card";
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
export default function App() {
    const card = data.map((info) => {
        return <Card
        //{require("../images/avatar.png")}
            img= {info.img}
            rating={info.stats.rating}
            reviewCount={info.stats.reviewCount}
            country={info.country}
            title={info.title}
            price={info.price}
        />
    })
    return (
        <div className="container">
            <Nav />
            <Hero />
            <div className="card-section">
            {card}
            </div>
            
        </div>
    )
}