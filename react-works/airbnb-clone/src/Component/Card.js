
export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.country === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <main className="card">
            
           <div className="card1">
            {/* we can use a conditional rendering in jsx using the &&
            so it means if openspots is eqaul to 0 render the html element 
            else if not dont render
            */}
           {/* {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>} */}

        {badgeText &&  <div className="card-badge">{badgeText}</div>}
           <img className="card-image" src={require(`../images/${props.img}`)} alt="avatar" />
                <div className='card-text'>
                <div className="card-text-1">
                    <img  src={require("../images/Star.png")} alt="avatar" />
                    <p className="rating">{props.rating} ({props.reviewCount}) {props.country}</p>
                </div>
                <div className="card-text-2">
                    <p>{props.title}
                    </p>
                </div>
                <div className="card-text-3">
                    <h2>From ${props.price}</h2>
                    <p>/ Person</p>
                </div>
                </div>
            </div>
        </main>
    )
}