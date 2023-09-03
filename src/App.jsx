import {useState} from "react"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import GameAdd from './components/GameAdd'

import games from "./assets/games-list"

function App() {
  const [gamesData, setGamesData] = useState(games)
  const [isGameAdding, setIsGameAdding] = useState(false)

  function toggleFav(id){
    setGamesData(prevGamesData => {
      let newGamesData = [...prevGamesData]
      
      for (let i = 0; i < newGamesData.length; i++) {
        if (newGamesData[i].id == id){
          newGamesData[i] = {...newGamesData[i], isFavorite: !newGamesData[i].isFavorite}
        }
      }
      console.log(id)
      return newGamesData
    })
  }


  const gamesList = gamesData.map(game =>
    <Card key={game.id}
          game={game}
          id={game.id}
          toggleFav={toggleFav}
    />)
   
  function closeGameAdd(){
    setIsGameAdding(false)
  }
  return (
    
    <div>
            {isGameAdding && <GameAdd close={closeGameAdd} gamesData={gamesData} setGamesData={setGamesData}/>}
            <Navbar />
            <Hero />
            <button className="add-game-button" onClick={() => setIsGameAdding(true)}>Add a game</button>
            <section className="cards--list">       
              {gamesList}
            </section>
            <footer>
              <div className='footer--text'>
                Made by: <a href="https://github.com/flou-ainan">Flou Ainan</a>
                <p className='project'><a href="https://github.com/flou-ainan/my-games-catalog/tree/main#my-games-catalog">Access the project</a> </p>
              </div>
            </footer>
    </div>
  )
}

export default App
