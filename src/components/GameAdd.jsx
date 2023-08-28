export default function GameAdd(props) {
    const {close} = props
    return <div className="modal">
        <h1>Add Your Game</h1>
        <button onClick={close}>Cancel</button>
        </div>
}