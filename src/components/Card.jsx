import { useState } from "react"
export default function Card(props){

    
    let game = props.game
    let {toggleFav} = props
    /* 
    //  Object Format Example
    const game = {
        rating: 4.9,
        coverImage: "cover.jpg",
        title: "Castlevania Symphony of the Night",
        platforms: ["Playstation", "Sega Saturn"],
        year: "1997",
        producer: "Konami"

    } */

   // game.rating = game.rating? game.rating : 0
    

    let platforms = game.platforms.map(platform => <span key={platform}>{platform}</span>)
    const starState = game.isFavorite? "filled" : "empty"

    console.log(game.coverImage)
    return(
        <div className="card">
            <div className="card--cover">
                <h3 className="card--badge"> {game.rating} ⭐</h3>
                <div onClick={() => toggleFav(game.id)} className="card--favorite">
                    <img className="card--favstar"src={`./images/star-${starState}.png`}></img>
                </div>
                <img  className="cover-img" src={`${game.coverImage}`}/>
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