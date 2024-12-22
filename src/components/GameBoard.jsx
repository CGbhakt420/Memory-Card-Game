/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import "./GameBoard.css"

const GameBoard = (props)=>{
    return(
        <div className="game-board">
            {props.cards.map((card)=>(
                <Card key={card.id} id={card.id} name={card.name} image={card.image} onClick={props.onCardClick}/>
            ))}
        </div>
    )
}

export default GameBoard

