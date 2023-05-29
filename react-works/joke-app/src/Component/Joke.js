import { useState } from 'react'
export default function Joke(props) {

    const [isShown, setIsShown] = useState(false)

    function toggle(){

       setIsShown(prevIsShown => !prevIsShown)
    }
    return(
        <div className="contacts">
        
        <div className="contact-card">
            {/* the && checks if both element are both true just like a conditional statement   */}
            <h3>JOKES OF THE DAY</h3>
            <div className="info-group">
            {props.setup && <h5>{props.setup}</h5>}
            </div>
            <div className="info-group">
            {isShown && <p>{props.punchline}</p>}
            {/* we can also use ternary to toggle (conditonal render) between show or hide on our button */}
                <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>
                <hr />
            </div>
           
        </div>
        </div>
    )
 }
// props are a major part of react and they are objects