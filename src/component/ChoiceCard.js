import React from 'react'


export default function ChoiceCard(props) {
  const DEFAULT_IMG =
    "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";
  
    const winnerOrLoser = ((props.result === 'Tie' || props.result === "") ? '' : ( 
      props.result === 'win' ? 'winner' : 'loser'))
  return (
    <div className={`choice-card ${winnerOrLoser}` }
    >
      <h1>{props.title}</h1>
      <img src={props.imgURL || DEFAULT_IMG} alt={props.title}></img>
      <h3>{props.result}</h3>
    </div>
  )
}
