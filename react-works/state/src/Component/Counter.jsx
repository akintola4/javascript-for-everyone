import { useState } from "react";
export default function counter() {
    const [count, setCount] = useState(0)
/* 
if you ever need the old value of a state to help you determine the new value of state,
you should pass a callback function instead of using state directly. this callback function 
will receive the old value of state as its parmeter , which you can then use to determine 
your new value of state
*/
    function add() {
        // setCount( count + 1)

        //we can also write it in a callback function

        setCount((prevCount) => prevCount + 1)
    }
    function minus() {
        // setCount(count -  1)

        setCount((prevCount) => prevCount - 1)
    }

    //testing my mind
    // function add() {
    //     setCount((oldCount) => oldCount + 1)
    // }
    // function minus() {
    //     setCount((oldCount) => oldCount - 1)
    // }
    return(
        <div className="counter">
            <button onClick={minus} className="counter-minus">-</button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter-plus">+</button>
        </div>
    )
}