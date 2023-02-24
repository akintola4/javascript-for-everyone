import data from "./data";
import Card from "./Component/Card";
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
export default function App() {
    const information =  data.map((info)=>{
        return 
    })
    return(
        <div className="container">
            <Nav />
            <Hero />
            <Card 
            img={require("./images/avatar.png")}
            rating={5.0}
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
            />
        </div>
    )
}