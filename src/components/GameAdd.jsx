import { useState } from "react"
import Card from "./Card"
export default function GameAdd(props) {
    const {close} = props
    const [newGame, setNewGame] = useState({
        title:"",
        producer:"",
        year:"",
        coverURL:"",
        rating: 0,
        platforms: [""]

    })

    /*
    (parameter) game: {
    id: number;
    title: string;
    rating: string;
    coverImage: string;
    platforms: string[];
    year: string;
    producer: string;
    isFavorite: boolean;
}
    */
    let game = {
        id: 888,
        title: newGame.title,
        rating: newGame.rating,
        coverImage: newGame.coverURL,
        platforms: newGame.platforms,
        year: newGame.year,
        producer: newGame.producer,
        isFavorite: newGame.rating > 4
    }


    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        setNewGame(
            (prevGame) => ({...prevGame, 
                            [name]: value
                            })
        )

    }
    function handlePlaformChange(){
        console.log("platforms changed")
    }

    let platforms = ""
    return(
        <div className="modal">
            <div className="game-add">
                <h3>Add Your Game</h3>
                <div className="gameadd-cardholder">
                    <Card className="flex-center"
                        game={game}
                    />
                </div>
                <form className="game-add-form">
                    <input  
                            name="title"
                            type="text"
                            placeholder="Game Title"
                            value={newGame.title}
                            onChange={handleChange}
                    /><br/>
                    <input  
                            name="producer"
                            type="text"
                            placeholder="Producer"
                            value={newGame.producer}
                            onChange={handleChange} 
                    /><br/>
                    <input  
                            name="year"
                            type="text"
                            placeholder="Year"
                            value={newGame.year}
                            onChange={handleChange}
                    /><br/>
                    <input  
                            name="coverURL"
                            type="text"
                            placeholder="Cover Image URL"
                            value={newGame.coverURL}
                            onChange={handleChange}
                    /><br />
                    <input 
                            name="platforms"
                            type="text"
                            placeholder="Platform A, Plat B, Plat C"
                            value={platforms}
                            onChange={handlePlaformChange}
                    /><br />
                    <input  
                            name="rating"
                            type="range"
                            min="0" max="5" step={0.5}
                            value={newGame.rating}
                            onChange={handleChange}
                            className="range-input"
                    /> <span>{newGame.rating+" ⭐"}</span>
                </form>
                <button onClick={close}>Cancel</button>
            </div>
        </div>
    )
}