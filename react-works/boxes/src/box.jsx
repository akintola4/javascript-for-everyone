

export default function Box(props) {

console.log(props.on)
const styles = {
    backgroundColor: props.on ? "#222222" : "none"
}

return (
    <div style={styles} className="box"></div>
)
}
