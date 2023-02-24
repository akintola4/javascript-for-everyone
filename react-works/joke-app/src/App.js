import jokeData from "./jokeData";
import Joke from "./Component/Joke";
export default function App() {
    const jokes = jokeData.map(joke => {
        return <Joke 
        setup= {joke.setup}
        punchline = {joke.punchline}
        />
        //reason why i used dot notation there is because we used map() method to access and loop through the array 
        //thus we only need to access our objects
    })
    return (
        <div className="conatainer">
         {jokes}
        </div>

    )
}

//the reason we used the above method is because in an instance we have data stored in a file we won't be 
//hard coding the data in and instead we will use this method to make it easy and more efficent

// import Joke from "./Component/Joke";
// export default function App() {
//     return (
//         <div className="conatainer">
//             <Joke
//                 setup="I got my daughter a fridge for her birthday."
//                 punchline="I can't wait to see her face light up when she opens it."

//             />
//             <Joke

//                 setup="How did the hacker escape the police?"
//                 punchline="He just ransomware!"
//             />
//             <Joke

//                 setup="Why don't pirates travel on mountain roads?"
//                 punchline="Scurvy."
//             />
//             <Joke

//                 setup="Why do bees stay in the hive in the winter?"
//                 punchline="Swarm."
//             />
//         </div>

//     )
// }