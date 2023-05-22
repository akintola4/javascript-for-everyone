//always start with this to be able to use state
import { useState } from 'react'
//we imported the box data to use in this file
import boxes from "./boxes"
import './App.css'
import Box from './box'

function App() {
    //here i access the js data 
    const [squares, setSquares] = useState(boxes)
function toggle(id){
//  setSquares(prevSquares =>{
//   const newSquares = []

//   //then lets loop through the object for the key that was clicked and change it 
//   for (let i = 0; i < prevSquares.length; i++) {
//     const currentSquares = prevSquares[i];
//     if (currentSquares.id === id) {
//       //we can then create a new object 
//       const updateSquares = {
//         //we use the spread operator to copy that side object
//         ...currentSquares,
//         //we change the value of on to the oppsite of on
//         on: !currentSquares.on
//       }
//       //we push that new value into the old 
//       newSquares.push(updateSquares)
//     }else{
//       //else push the normal value of the current object without changing it if the id does not match
//       newSquares.push(currentSquares)
//     }
//   }
//   //then we return that new object
//   return newSquares
//  })

//we can use a more less code in here using tenary and mao 

setSquares(prevSquares =>{
  return prevSquares.map((squares) =>{
    return squares.id === id ? {...squares, on: !squares.on} : squares
  })
})
}

    //then map it so i dont write over but create a copy i can then use
    const sqaureElement = squares.map(squares => (
       
        <Box 
        key={squares.id} 
        id={squares.id} 
        toggle={toggle} 
        on={squares.on} />
    ))
    return (
        <main>
           {sqaureElement}
        </main>
    )
}

export default App
