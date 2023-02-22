export default function Joke(props) {
    return(
        <div className="contacts">
        
        <div className="contact-card">
            
            <h3>JOKES OF THE DAY</h3>
            <div className="info-group">
            <h5>{props.setup}</h5>
            </div>
            <div className="info-group">
                <p>{props.punchline}</p>
                
            </div>
        </div>
        </div>
    )
 }
// props are a major part of react and they are objects