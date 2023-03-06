import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./component/Nav.jsx";
import Card from "./component/Card";
import data from "./data";
function App() {
  console.log(data)
  const card = data.map((item) => {
    return <Card
      //the unqiue id for the data a unqiue key prop
      key={item.id}
      //{require("../images/avatar.png")}
      // it like this info is an object containig all the data in the data.js file
      //we then put info() inside our prop thus when we want to soruce the data 
      //we use prop.info."name of the data"
      //remember info is an object so we use dot notation to source our data from it
      item={item} //this contains all the data we need 

    //we can also use the spread operator to access the object 
    // {...info}
    //if you use this method remove all the .info we used in our card component
    />
  })

  return (
    <div className="App">
      <Nav />
      <div className="card-section">
        {card}
      </div>

    </div>
  )
}

export default App
