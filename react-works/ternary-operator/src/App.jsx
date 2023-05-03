import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //created a state function 
  const [isGoingOut,  setIsGoingOut] = useState(true)
  function toggleIsGoingOut() {
    //so here i will have to set the state value to the another value using a call back function
    setIsGoingOut((oldIsGoingOut) => !oldIsGoingOut)
    
  }
  return (
    <div className="App">
    <h1 className='state--title'>Do i feel like going out tonight?</h1>
    {/* here i created an onclick function that changes the state value when clicked */}
    <div onClick={toggleIsGoingOut} className='state--value'>
      {/* here i used a ternary operator to tell it what to display using those cconditions */}
      <h1>{isGoingOut === true ? "YES" : "NO"}</h1>
    </div>
    </div>
  )
}

export default App
