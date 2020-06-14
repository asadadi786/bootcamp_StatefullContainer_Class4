import React, { useState } from 'react';
import './App.css';
import { Message } from './Message'

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);

  return (

    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <br />
      <button onClick={
        () => setCount(++count)
        //alert('Button Pressed')
      }>
        Updated Counter
        </button>

      <button onClick={
        () => setMorning(!isMorning)
      }>
        Convert Day
        </button>
    </div>
  );
}

//export default App;
