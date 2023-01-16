
function store() {
    var key = document.getElementById("key")
    var email = document.getElementById("email")
var username = document.getElementById("username")
var content = document.getElementById("content")

    const report = {
        email: email.value,
        username: username.value,
        content: content.value,
    }

    window.localStorage.setItem(key.value, JSON.stringify(report))
}