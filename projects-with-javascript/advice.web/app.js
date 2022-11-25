
function projectAdvice() {
    var xhttp =new XMLHttpRequest();
    xhttp.open("GET", "https://api.adviceslip.com/advice", true)
    xhttp.send()
    xhttp.onload = function(){
        const json = JSON.parse(xhttp.responseText);
        console.log(json)
        let advice =  json.slip.advice
        console.log(advice)
        let id = json.slip.id
        document.getElementById("advice").innerHTML = advice;
        document.getElementById("adviceNumber").innerHTML = id;
      };
      
}
//document.getElementById("advice").innerHTML = this.slip;