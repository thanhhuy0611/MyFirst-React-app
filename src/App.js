import React, { useState } from "react";
import './App.css';
import ChoiceCard from './component/ChoiceCard';

export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

export const getRandomChoice = () => {  // get value for: const computerChoice = getRandomChoice().name;
  var keys = Object.keys(CHOICES); // make new array (keys) that contain keys of CHOICES
  return CHOICES[keys[(keys.length * Math.random()) << 0]]; // random index in Object keys => make new CHOICES
};

export const getRoundOutcome = (userChoice) => { // get value for: const [result, compChoice] = getRoundOutcome(playerChoice);
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  console.log('result:', result, '  compChoice:', computerChoice);
  return [result, computerChoice];
};

function App() {
  // declaration variable
  const [prompt, setGamePrompt] = useState('Start')
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  //---------

  const onPlayerChoose = (playerChoice) => { // get vualue from button choice of player
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <div className={'container'}>
              <button
                className={'btn btn success btn-lg'}
                onClick={() => onPlayerChoose('rock')}
              >
                Rock
              </button>
              <button
                className={'btn btn success btn-lg'}
                onClick={() => onPlayerChoose('scissors')}
              >
                Scissors
              </button>
              <button
                className={'btn btn success btn-lg'}
                onClick={() => onPlayerChoose('paper')}
              >
                Paper
              </button>
            </div>

            <ChoiceCard 
              title={'You'} 
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />
            <h1>{prompt}</h1>
            <ChoiceCard 
              title={'Computer'} 
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
