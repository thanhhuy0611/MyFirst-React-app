import React, { useState } from "react";
import './App.css';
import MainPage from './component/MainPage';

function SignInPage(props) {
  return (
    <div>
      <input></input>
      <input></input>
      <button className={'btn btn-success btn-lg'} onClick={() => props.setIsSignIn(true)}>Sign in</button>
    </div>
  )
}

function App() {
  const [isSignIn, setIsSignIn] = useState(false)
  return (
    <div>
      {isSignIn &&
        <MainPage
          setIsSignIn={setIsSignIn}
        />
      }
      {!isSignIn && <SignInPage
        setIsSignIn={setIsSignIn}
      />}

    </div>
  )
}

export default App;

