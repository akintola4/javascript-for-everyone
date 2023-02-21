export default function Contact(props) {
    return(
        <div className="contacts">
        
        <div className="contact-card">
            <img src={props.image}alt="cat-avatar" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("../images/Mail.png")} alt="mail"/>
                <p>{props.email}</p>
            </div>
            <div className="info-group">
                <img src={require("../images/phone.png")} alt="phone" />
                <p>{props.phone}</p>
            </div>
        </div>
        </div>
    )
}