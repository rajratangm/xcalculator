import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult]= useState('')
  const handleClick=(e)=>{

  }
  return (
    <>
    <div className='container'>
      <form>
        <input type='text' value={result}/>
      </form>
      <div className='keypad'>
        <button  onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>

        <button>C</button>
        <button>0</button>
        <button>=</button>
        <button>/</button>

      </div>
    </div>
    
    </>
  );
}

export default App;
