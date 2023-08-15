import React, { EventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data'
import Footer from './footer';

function App() {
  const [paragraphs, setParagraphs] = useState(['']);
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: any | null) => {
    e.preventDefault();
    if (amount !== '') {
      setParagraphs(data.slice(0, Number(amount)))
    }
  }

  return (
    <>
      <div className="App">
        <h2 className='title'>No boring lorem ipsum but princesses</h2>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>Paragraphs: </label>
          <input type='number'
            name='amount'
            min={1}
            max={10}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type='submit'>Generate</button>
        </form>
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
