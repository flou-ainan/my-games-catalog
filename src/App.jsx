import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import games from "./assets/games-list"
console.log(games);

function App() {
  /* const game = {
    ratting: 4.9,
    coverImage: "castlevania.jpg",
    title: "Castlevania Symphony of the Night",
    platforms: ["Playstation", "Sega Saturn"],
    year: "1997",
    producer: "Konami"
  } */
  let gamesList = games.map(game => <Card key={game.key} game={game}/>)
   
  return (
    
    <div>
            <Navbar />
            <Hero />
            <section className="cards--list">       
              {gamesList}
            </section>
            <footer>
              <div className='footer--text'>
                Made by: <a href="https://github.com/flou-ainan">Flou Ainan</a>
                <p className='project'><a href="https://github.com/flou-ainan/my-games-catalog/tree/main#my-games-catalog">Acces the project</a> </p>
              </div>
            </footer>
    </div>
  )
}

export default App
