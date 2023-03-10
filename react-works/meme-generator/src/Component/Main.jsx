export default function Main(props) {
    function click(){
  alert("it was clicked")
    }
    return (
        <main className="container">
            <form className="input-section">
                <div className="input-box">
                    <input type="text" className="input" />
                    <input type="text" className="input" />
                </div>
                <div className="input-submit">
                    {/* instead of using the normal method to call which is click()
                    we are going to just call it like a value click without the () 
                    reason why is for it not to load immediate but wait till it has been clicked
                    */}
                    <input onClick={click} className="submit" type="button" value="Get a new meme image  🖼"  />
                </div>
            </form>
            <img className="img" src="/memeimg.png" alt="" />
        </main>
    )
}