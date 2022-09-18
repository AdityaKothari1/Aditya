import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Pin from './Components/Pin';
function App() {
  const[pininput,setPin]=useState("")

  return (
    <div className="App">
      <Pin length={4}  setPin={setPin} />
    </div>
  );
}

export default App;
