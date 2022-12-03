import { useEffect, useRef, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
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
<<<<<<< HEAD

=======
>>>>>>> 29b4eb5d613375dea3fed0c1fce59952fa47b71d
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
<<<<<<< HEAD

    if (choiceTwo) {
	    let first = choiceOne
	    let second = choiceTwo
	    first.src === second.src && first.id !== second.id ? console.log('ok') : console.log('nope')
      resetTurn()
=======
if (choiceTwo) {
	    let first = choiceOne
	    let second = choiceTwo
	    first.src === second.src && first.id !== second.id ? console.log('ok') : console.log('nope')
	      setChoiceOne(null)
	      setChoiceTwo(null)
	      setTurns(turns + 1)
	     
>>>>>>> 29b4eb5d613375dea3fed0c1fce59952fa47b71d
}
  }, [choiceTwo]);

  //reset choices & increase turn
<<<<<<< HEAD
  const resetTurn = () => { 
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns + 1)
   }
=======
  // const resetTurn = () => { 
  //   setChoiceOne(null)
  //   setChoiceTwo(null)
  //   setTurns(turns + 1)
  //  }



>>>>>>> 29b4eb5d613375dea3fed0c1fce59952fa47b71d

   
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