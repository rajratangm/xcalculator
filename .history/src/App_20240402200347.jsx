import React, { useState } from 'react';
import Button from './Component/Button/Button';
import Input from './Component/Input/Input';
import { evaluate } from 'mathjs';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (val) => {
    setText((prevText) => prevText + val);
  };

  const resetInput = () => {
    setText('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(evaluate(text));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='App'>
      <div className='calculator-wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
          <Button symbol='7' handleClick={addToText} />
          <Button symbol='8' handleClick={addToText} />
          <Button symbol='9' handleClick={addToText} />
          <Button symbol='+' handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol='4' handleClick={addToText} />
          <Button symbol='5' handleClick={addToText} />
          <Button symbol='6' handleClick={addToText} />
          <Button symbol='-' handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol='1' handleClick={addToText} />
          <Button symbol='2' handleClick={addToText} />
          <Button symbol='3' handleClick={addToText} />
          <Button symbol='*' handleClick={addToText} />
        </div>
        <div className='row'>
          <Button symbol='C' handleClick={resetInput} />
          <Button symbol='0' handleClick={addToText} />
          <Button symbol='=' handleClick={calculateResult} />
          <Button symbol='/' handleClick={addToText} />
        </div>
      </div>
    </div>
  );
}

export default App;
