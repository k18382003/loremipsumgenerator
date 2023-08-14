import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data'
import Footer from './footer';

function App() {
  const [paragraphs, setParagraphs] = useState(['']);
  const [number, setNumber] = useState('');

  const handleClick = () => {
    if (number !== '') {
      setParagraphs(data.slice(0, Number(number)))
    }
  }

  return (
    <>
      <div className="App">
        <h2 className='title'>No boring lorem ipsum but princesses</h2>
        <div className='form'>
          <span>Paragraphs: </span>
          <input type='number'
            min={1}
            max={10}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onKeyDown={(event) => {
              event.preventDefault();
            }} />
          <button type='button' onClick={handleClick}>Generate</button>
        </div>
        <div className='content'>
          {paragraphs.map((p, i) => {
            return (
              <>
                <p key={i}>{p}</p>
                <br />
              </>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
