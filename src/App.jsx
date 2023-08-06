import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//import Card from './components/Card'

function App() {

  return (
    
    <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
               <h1>Cards goes here</h1>
            </section>
    </div>
  )
}

export default App
