import React, { useState } from "react";
import './App.css';
import ChoiceCard from './component/ChoiceCard';
import { get } from "http";
import { CHOICES, getRoundOutcome} from "./utils";
import ChoiceButtons from './component/ChoiceButtons';


function App() {
  //---declaration varible-------------------
  let [prompt, setPrompt] = useState('START');
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [resul, setResult] = useState("");
  const [histories, setHistories] = useState([]);
  //--------------------------------------------------
  const onPlayerChoose = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newComputerChoice = CHOICES[compChoice];
    const newPlayerChoice = CHOICES[playerChoice];

    setComputerChoice(newComputerChoice);
    setPlayerChoice(newPlayerChoice);
    setResult(result);
    setPrompt(
      result === 'Tie' ? 'You tied' : (
        result === 'win' ? 'You won!' : 'You losed')
    );
    setHistories([...histories,result]);

    if (result === 'win') {
      setPreviousWinner('You')
    } else if (result === 'lose') {
      setPreviousWinner('Computer')
    } else { setPreviousWinner('Tie') }
  }
  console.log('history' ,histories)

  return (
    <div className={'App'}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            
            <ChoiceButtons
              onPlayerChoose={onPlayerChoose}
            />

            <ChoiceCard
              title={'Computer'}
              imgURL={computerChoice !== null && computerChoice.url}
              result={resul=== ""? '' : (
                resul === 'Tie' ? 'Tie' : (
                  resul === 'win' ? 'lose' : 'win'))} 
            // If u miss understand, please call 0778697924.
            />
            <h2>{prompt}</h2>
            <ChoiceCard
              title={'You'}
              imgURL={playerChoice !== null && playerChoice.url}
              result={resul}
            />
          </div>
          <div className="col-md-4 themed-grid-col">
            {/* History */}
            <h3>HISTORY</h3>
            <ul>
              {histories.map((history) =>{
                  return <li>{history}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App;

