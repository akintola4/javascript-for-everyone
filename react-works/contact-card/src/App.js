import Contact from "./Component/Contact";
export default function App() {
    return(
        <div className="conatainer">
        <Contact 
        image= {require("../src/images/cat1.png")}
        name= "mr. donats"
        phone= "080607960393"
        email= "donats.gmail.com"
        />
        <Contact 
        image= {require("../src/images/cat2.png")}
        name= "mr. james"
        phone= "080679604393"
        email= "james.gmail.com"
        />
        <Contact 
        image= {require("../src/images/cat3.png")}
        name= "mr. ronal"
        phone= "080645660393"
        email= "ronal.gmail.com"
        />
        <Contact 
        image= {require("../src/images/cat4.png")}
        name= "mr. felic"
        phone= "081257960393"
        email= "felic.gmail.com"
        />
        </div>

    )
}

