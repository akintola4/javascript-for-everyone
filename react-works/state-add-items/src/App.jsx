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
  const [thingsArray, setThingsArray] = useState["Thing 1", "Thing 2"]
  
  
  function addItem() {
      // We'll work on this next
      // const newThingText = `Thing ${thingsArray.length + 1}`
      // thingsArray.push(newThingText)
      // document.getElementById()
      // console.log(thingsArray)
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
