
function store() {
    var email = document.getElementById("email")
var password = document.getElementById("password")
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)
    alert("Success")
}

function update() {
    var oldemail = document.getElementById("oldemail")
    var newpassword = document.getElementById("newpassword")
    localStorage.setItem("email", oldemail.value)
    localStorage.setItem("password", newpassword.value)
    alert("Successfully changed")
}

function check() {
    var storedEmail = localStorage.getItem("email")
    var storedPassword = localStorage.getItem("password")

    var newEmail = document.getElementById("email")
    var newPassword = document.getElementById("password")

    if (storedEmail == newEmail.value && storedPassword == newPassword.value) {
        alert("CORRECT LOGIN")
    } else {
        alert("NOT CORRECT LOGIN")
    }

}
function retrieve() {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
     var answer = `the email is ${email} and the password is ${password}`
    document.getElementById("retrieve").innerHTML = answer
}

function remove() {
    window.localStorage.removeItem("email")
    window.localStorage.removeItem("password")
    let answer = "the record has been removed"
    alert(answer)
}