export default function GameAdd(props) {
    const {close} = props
    return(
        <div className="modal">
            <div className="game-add">
                <h1>Add Your Game</h1>
                <form>
                    <input  
                            name="title"
                            type="text"
                            placeholder="Game Title" 
                    /><br/>
                    <input  
                            name="studio"
                            type="text"
                            placeholder="Studio or Author" 
                    /><br/>
                    <input  
                            name="year"
                            type="text"
                            placeholder="Year" 
                    /><br/>
                    <input  
                            name="cover"
                            type="text"
                            placeholder="Cover Image URL" 
                    />
                </form>
                <button onClick={close}>Cancel</button>
            </div>
        </div>
    )
}