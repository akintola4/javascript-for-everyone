export default function Main(props) {
    return (
        <main className="container">
            <form className="input-section">
                <div className="input-box">
                    <input type="text" className="input" />
                    <input type="text" className="input" />
                </div>
                <div className="input-submit">
                    <input className="submit" type="button" value="Get a new meme image  🖼"  />
                </div>
            </form>
            <img className="img" src="/memeimg.png" alt="" />
        </main>
    )
}