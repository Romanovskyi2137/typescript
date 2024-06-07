import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const message = "i`m alive";
  message(); //uncallable stuff
  const user = {
    name: "Name",
    age: 27
  };
  const location = user.location; //non-exeption failures (undefiened)
  message.toLowercase; //typos toLowerCase...
  function flipCoin () {
    return Math.random > 0.5  //uncalled func Math.random()
  }
  function showArgs (arg1: string, arg2: string, arg3) { // "any" type of argument
    console.log(`${arg1} and ${arg2}`);
    
  };
  showArgs("arg1"); // 1 arg instead of 2
  // and many other, just mouseover to see.
  function runTSstuff () {
    
    
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => runTSstuff()}>run ts stuff</button>
      </header>
    </div>
  );
}

export default App;
