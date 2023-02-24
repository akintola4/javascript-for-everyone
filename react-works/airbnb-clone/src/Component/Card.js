
export default function Card(props) {
    return (
        <main className="card">
           <div className="card1">
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