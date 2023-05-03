import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize 
   * the state array with the same 2 items below
   * 
   * Don't worry about fixing `addItem` quite yet.
   */

  
  const [thingsArray, setThingsArray] = useState(["Things 1", "Things 2"])
  function addItem() {

      setThingsArray(
        //this is a callback function
        (prevThingsArray)=>{
        //here i will return a new array but firstly
        //i will copy the former array to create a copy of the said array 
        //then i will add a new item inside the copied array 
        //the reason i used preThingsArray.lenght is to get the fomer number of items in the array then add 1 to increase it
        return [...prevThingsArray, `Things ${prevThingsArray.length + 1}`]
      })
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}

export default App
