// let key = document.getElementById("title")
// let note = document.getElementById("note")
// localStorage.setItem("key", key.value)
// localStorage.setItem("note", note.value)


function create() {
    let title = document.getElementById("title")
    let note = document.getElementById("note")

    let info = {
        title: title.value,
        notes: note.value
    }
    window.localStorage.setItem(title.value, JSON.stringify(info))
    alert("Success")
}

function retrive() {

    let key = document.getElementById("key").value
    console.log(key)

    let title = localStorage.getItem(key)
    console.log(typeof (title), "is ")
    const noteObject = JSON.parse(title)
        console.log(noteObject)

    //conditional statement to find print it out on screen
    if (title !== null) {
        
        let name = noteObject.title
        console.log(name)
        let notes = noteObject.notes
        console.log(notes)
        document.getElementById("noteTitle").innerHTML = name
        document.getElementById("noteCreated").innerHTML = notes
        alert("Found it")
    } else if (title === null) {
        alert("Not Found")
    }

}
function remove() {
    let key = document.getElementById("key").value
    console.log(key)
    window.localStorage.removeItem(key)
    alert("it has been removed")
}

function update() {
    let title = document.getElementById("title")
    let note = document.getElementById("note")

    let info = {
        title: title.value,
        notes: note.value
    }
    window.localStorage.setItem(title.value, JSON.stringify(info))
    alert("Success")
}