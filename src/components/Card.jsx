export default function Card(props){

    
    let game = props.game
    
    /* 
    //  Object Format Example
    const game = {
        ratting: 4.9,
        coverImage: "cover.jpg",
        title: "Castlevania Symphony of the Night",
        platforms: ["Playstation", "Sega Saturn"],
        year: "1997",
        producer: "Konami"

    } */

    let autokey = 0
    let platforms = game.platforms.map(platform => <span>{platform}</span>)

    return(
        <div className="card">
            <div className="card--cover">
                <h3 className="card--badge"> {game.ratting} ⭐</h3>
                <img  className="cover-img" src={`./images/games/${game.coverImage}`}/>
            </div>

            <p className="card--title">{game.title}</p>
            
            <div className="card--platforms">
            
            <span>Platforms: </span>
                <div className="platforms-list">
                    {platforms}
                </div>
            </div>

            <div className="card--year-prod">
                <span className="card--year">🎂 {game.year}</span>
                <span className="card--prod">🚀 {game.producer}</span>
            </div>

        </div>
    )
}