//always start with this to be able to use state
import { useState } from 'react'
//we imported the box data to use in this file
import boxes from "./boxes"
import './App.css'
import Box from './box'

function App(props) {
    //here i access the js data 
    const [squares, setSquares] = useState(boxes)

    //then map it so i dont write iver but create a copy i can then use
    const sqaureElement = squares.map(squares => (
        //we can aslo create dynmaic styles in here 
        <Box key={squares.id}  on={squares.on} />
    ))
    return (
        <main>
           {sqaureElement}
        </main>
    )
}

export default App
