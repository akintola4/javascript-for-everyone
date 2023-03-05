
export default function Card(props) {
    let badgeText;
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.country === "Online") {
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

                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img className="card-image" src={require(`../images/${props.info.img}`)} alt="avatar" />
                <div className='card-text'>
                    <div className="card-text-1">
                        <img src={require("../images/Star.png")} alt="avatar" />
                        {/* here inorder to source out the rating which is in a sub object of the main obejct (info) we use dot notation to do it 
                    props.(main-object).(sub-object).(object) */}
                        <p className="rating">{props.info.stats.rating} ({props.info.stats.reviewCount}) {props.info.country}</p>
                    </div>
                    <div className="card-text-2">
                        <p>{props.info.title}
                        </p>
                    </div>
                    <div className="card-text-3">
                        <h2>From ${props.info.price}</h2>
                        <p>/ Person</p>
                    </div>
                </div>
            </div>
        </main>
    )
}