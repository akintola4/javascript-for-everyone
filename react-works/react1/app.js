ReactDOM.render(<h1>Hello my Name is akintola tope</h1>, document.getElementById("root"))
ReactDOM.render(<h2>My first react project</h2>, document.getElementById("root2"))
ReactDOM.render(<p>getting started with react!</p>, document.getElementById("root3"))

ReactDOM.render(<ul>
    <li>firstly write more javascript codes</li>
    <li>understand javascript syntax </li>
    <li>html and css is a must</li>
    </ul>, document.getElementById("root4"))


function maincontent(){
    return (
        <p>
            welcome to my journey on using react to improve my frontend skills
            thank you for joining us!
        </p>
    )
}
    ReactDOM.render(
        <div>
            <maincontent />
        </div>,
        document.getElementById("maincontent")
    )

const footer = (
    <div>
        <p>this is the footer of the page </p>
    </div>
)
ReactDOM.render(footer, document.getElementById("footer"))