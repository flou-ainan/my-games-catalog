import heroBanner from "../assets/hero-banner.png"
export default function Hero() {
    return(
        <section className="hero">
            <img className="hero--photo" src={heroBanner}/>
            <h1 className="hero--header">Find Your Game</h1>
            <p className="hero--text">The best classic games selected and rated by me and my wife with love and React ⚛️</p>
        </section>
    )
}