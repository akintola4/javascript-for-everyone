
function Time() {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay

    if (hours <12) {
        timeOfDay = "Morning"
    } else if (hours >12 && hours <18){
        timeOfDay = "Afternoon"
    } else{
        timeOfDay = "Night"
    }
    return(
        <h1>Good {timeOfDay}!</h1>
    )
}
ReactDOM.render(Time(), document.getElementById("root"))

//you also use numbers and array in props
//using the {} to tell jsx it is js we trying to pass in
//number phone={08060461839}
//array {[title:"learning javascript", author:"foster", date:"20-12-2001"]}