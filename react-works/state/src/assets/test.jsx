import { useState } from 'react'
export default function test() {
      //here put the first content of the array into the varaible called result
let [result, setResult] = useState("yes")


function handleClick() {
  setResult("No")
} 
return(
  <div> 
         <h1 onClick={handleClick()} className='state-value'> 
          {result} 
             {/* we have to destructure the array to get what we looking for which is the string called yes  
             state contains two data in an array is state is an array
            ["yes", function()] 
            instead of desturcturing it here we destructure the array in the varaible declearation */}
            

         </h1>
      </div> 
)
}