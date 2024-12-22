/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "./Scoreboard.css"


const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <h2>Memory Card Game</h2>
      <div className="score">
        <p>Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
