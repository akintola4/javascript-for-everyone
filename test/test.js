function greet(name) {
    const date = new Date()
    const time = date.getHours() 
    // const minute = date.getMinutes()

    // let fullTime = time + ":" +minute
let timeOfDay
    if(time >= 4 && time < 12 ){
        timeOfDay = "morning"
    } else if(time >= 12 && time < 17 ){
         timeOfDay = "afternoon"
     } else if(time >= 5 && time < 20 ){
         timeOfDay = "evening"
     } 
     else {
         timeOfDay = "night"
     } 
     return `Good ${timeOfDay}, ${name}`
}

console.log(greet("fola"))