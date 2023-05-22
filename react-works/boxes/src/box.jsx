import { useState } from "react";
export default function Box(props) {
    //this method has an issue why you may ask it doent change the state of the main state in app.jsx but only changes the state in box.jsx
//     //here i created a new state using the prop
//     const [on, setOn] = useState(props.on)
//     //here i created a arrow function inside a variable
// const toggle = () => {
//     //here we just set the property of on to the opposite of it
//         setOn(!on)
// }
    //here we crearted a dynmaic style that uses tenary to check is the on property is true or false
    //and then displays
 //we can aslo create dynmaic styles in here 
    const styles = {
        backgroundColor: props.on ? "#222222" : "orange"
    }

    return (
        // reason why i called it has a props was becuase i saved it has a prop in the main app.jsx
        // <div style={styles} className="box" onClick={props.toggle}></div>

        //new method to get the id number
        <div style={styles} className="box" onClick={()=>props.toggle(props.id)}></div>
    )

}
