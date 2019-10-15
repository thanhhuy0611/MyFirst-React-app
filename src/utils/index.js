import React from 'react'

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
  
  export const getRandomChoice = () => {
    const listChoice = Object.keys(CHOICES);
    let compChoice = listChoice[Math.floor(Math.random() * listChoice.length)];
    return compChoice;
  }
  
  export const getRoundOutcome = (userChoice) => {
    const compChoice = getRandomChoice();
    let result;
  
    if (userChoice === compChoice) {
      result = 'Tie';
    } else if (userChoice === 'rock') {
      result = compChoice === 'paper' ? 'lose' : 'win';
    } else if (userChoice === 'paper') {
      result = compChoice === 'scissors' ? 'lose' : 'win';
    } else if (userChoice === 'scissors') {
      result = compChoice === 'rock' ? 'lose' : 'win';
    }
    console.log(result, ' compChoice:', compChoice);
    return [result, compChoice];
  }
  