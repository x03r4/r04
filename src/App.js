import { useEffect, useRef, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handleChoice
  const handleChoice = (card) => { 
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card)
    
  }
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (choiceOne && choiceTwo) {
	    // let first = choiceOne
	    // let second = choiceTwo
	    // first.src === second.src && first.id !== second.id ? console.log('ok') : console.log('nope')
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {

        resetTurn()
      }
      // resetTurn()
}
  }, [choiceTwo]);

  console.log(cards)
  //reset choices & increase turn
  const resetTurn = () => { 
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns + 1)
   }

   
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
      {cards.map((card) => (
        <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
          ))}
      </div>
    </div>
  );
}

export default App;