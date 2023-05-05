import { useState } from "react";
import memeData from "../memeData"
export default function Main(props) {

//here i created a a state to use in our webpage
//first is the variable name 
//second is used to update the state a callback function
// i state the usestate to an empty string
const [memeImage, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg"
})
const [allMemeImages, setAllMemeImages] = useState(memeData) 
function getMemeImage() {
    //this is to destructure the api data 
    const memeArray = allMemeImages.data.memes
    // this is used to get a random image
    const random =  Math.floor(Math.random() * memeArray.length)
    //reason why didnt use the previous string is cause i dont need it and set the state to the new one
    let url =memeArray[random].url
    setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url

    }))
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
                    <button onClick={getMemeImage} className="submit">
                        Get a new meme image  🖼
                    </button>
                </div>
            </div>
            {/* this is where the image will display here i set the src to the memeImage function where it constantly being 
            changed when the button is being clicked 
            */}
            <img className="img" src={memeImage.randomImage} alt="" />
        </main>
    )
}