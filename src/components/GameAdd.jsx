import { useState } from "react"
import Card from "./Card"
export default function GameAdd(props) {
    const {close, gamesData, setGamesData} = props
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
        id: gamesData.length+1,
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
    function handlePlaformChange(event){
        let value = event.target.value
        let platformsArray = value.split(",").map(platform => platform.trim())
        console.log(platformsArray)
        setNewGame(
            (prevGame => ({...prevGame,
                            platforms:platformsArray
                            }))
        )
    }
    function addGame(){
        setGamesData(prevGamesData => {
            return [game, ...prevGamesData]
        })
        close()
    }

    function toggleFav(){
        alert("to be implemented")
    }
    console.log(game)
    return(
        <div className="modal">
            <div className="game-add">
                <h3>Add Your Game</h3>
                <div className="gameadd-cardholder">
                    <Card className="flex-center"
                        game={game}
                        toggleFav={toggleFav}
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
                            placeholder="Platforms"
                            onChange={handlePlaformChange}
                    /> <button 
                                style={{padding: "-1px 6px"}}
                                title={"Use comma separete values\nEx: Playstation, Windows, Xbox"}
                                onClick={(e) => {
                                    e.preventDefault()
                                    alert("Use comma separeted values\nEx: Playsation, Windows, Xbox")}
                                }
                                ><b>?</b>
                                </button><br />
                    <input  
                            name="rating"
                            type="range"
                            min="0" max="5" step={0.5}
                            value={newGame.rating}
                            onChange={handleChange}
                            className="range-input"
                    /> <span>{newGame.rating+" ⭐"}</span>
                </form>
                <div className="space-bet">
                    <button onClick={close}>Cancel</button>
                    <button onClick={addGame}>Add Game</button>
                </div>
            </div>
        </div>
    )
}