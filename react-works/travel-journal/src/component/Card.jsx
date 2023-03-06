
export default function Card(props) {
    
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img src={`/${props.item.img}`} alt="" />
                </div>
                <div className="card-info">
                    <div className="card-locations">
                        <img className="location-image" src="/location.png" alt="" />
                        <p className="location">{props.item.location}</p>
                        <a className="location-link" href={`${props.item.googleMapUrl}`}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.item.title}</h1>
                    <h5 className="card-time">{props.item.startDate} {props.item.endDate} </h5>
                    <p className="card-decription">{props.item.description} </p>
                </div>
            </div>
        </div>

    )
}