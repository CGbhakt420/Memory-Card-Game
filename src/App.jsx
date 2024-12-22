/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';
import './App.css'

function App(){
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((response)=>response.json())
      .then((data)=>{
        const formattedCards = data.results.map((item, index)=>({
          id: index,
          name: item.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setCards(formattedCards);
      })
  },[])

  const Shuffle = (array) => {
    const shuffledArray = [...array]; // Copy the original array to avoid mutating it
    for (let i = 0; i < shuffledArray.length; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledArray.length); // Random index
      // Swap elements at index i and randomIndex
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temp;
    }
    return shuffledArray;
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setBestScore(Math.max(bestScore, newScore));
      setClickedCards([...clickedCards, id]);
    }

    // Shuffle the cards each time a card is clicked
    setCards(Shuffle(cards));
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
