
import memeData from "../memeData"
export default function Main(props) {
    console.log(click())
    function click() {
        // alert("it was clicked")
        const memeArray = memeData.data.memes
        const random =  Math.floor(Math.random() * memeArray.length)
        const url = memeArray[random].url
        return url
    }
    return (
        <main className="container">
            <div className="input-section">
                <div className="input-box">
                    <input type="text" className="input" />
                    <input type="text" className="input" />
                </div>
                <div className="input-submit">
                    {/* instead of using the normal method to call which is click()
                    we are going to just call it like a value click without the () 
                    reason why is for it not to load immediate but wait till it has been clicked
                    */}
                    <button onClick={click} className="submit">
                        Get a new meme image  🖼
                    </button>
                </div>
            </div>
            <img className="img" src={click()} alt="" />
        </main>
    )
}