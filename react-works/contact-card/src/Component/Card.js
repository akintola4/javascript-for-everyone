
export default function Card() {
    return (
        <main className="card">
           <div className="card1">
           <img className="card-image" src={require("../images/avatar.png")} alt="avatar" />
                <div className='card-text'>
                <div className="card-text-1">
                    <img  src={require("../images/Star.png")} alt="avatar" />
                    <p className="rating">5.0 (6) USA</p>
                </div>
                <div className="card-text-2">
                    <p>Life lessons with Katie Zaferes
                    </p>
                </div>
                <div className="card-text-3">
                    <h2>From $136</h2>
                    <p>/ person</p>
                </div>
                </div>
            </div>
        </main>
    )
}