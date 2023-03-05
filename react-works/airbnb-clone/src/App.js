import data from "./data";
import Card from "./Component/Card";
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
export default function App() {
    const card = data.map((info) => {
        return <Card
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{require("../images/avatar.png")}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            info={info} //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our card component
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