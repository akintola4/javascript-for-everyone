//here we imported state using the import method 
//you can also use the React.usesState() method
import { useState } from 'react'
//state is total different from props cause we fetch props data is not to be changed 
//state refers to a value that is managed by a component 
export default function test() {
  function handleClick() {
    setResult("No")
  }
  // here we destructure the array in the varaible declearation 
  //here put the first content of the array into the varaible called result
const [result, setResult] = useState("YES")

  return (
    <div className="App">
      <h1 className='state-title'>Is state important to know?</h1>
      <div>
        <h1 onClick={handleClick} className='state-value'> 
          {result}
           {/*  we have to destructure the array to get what we looking for which is the string called yes  */}
            {/* state contains two data in an array is state is an array
            ["yes", function()] 
            instead of desturcturing it here we destructure the array in the varaible declearation
            */}

        </h1>
      </div>
    </div>
  )
}

//the second method
// function App() {
  
//   const result = useState("yes")
//   console.log(result)
//     return (
//       <div className="App">
//         <h1>Is state important to know?</h1>
//         <div>
//           <h1>
//             {result[0]}
//             {/*  we have to destructure the array to get what we looking for which is the string called yes  */}
//             {/* state contains two data in an array is state is an array
//             ["yes", function()] */}
  
//           </h1>
//         </div>
//       </div>
//     )
//   }