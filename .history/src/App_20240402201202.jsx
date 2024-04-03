import {useState} from 'react'
import Button from './Component/Button/Button'
import Input from './Component/Input/Input'
// import './App.css'
import { evaluate } from 'mathjs'
// import Keyboard from './Component/Keyboard'

function App() {
  const [text, setText]= useState('')
  const [result, setResult]= useState('')

  const addToText=(val)=>{

    setText((text)=>[...text, val +' '])
  }

  const resetInput=()=>{
    setText('');
    setResult('')
  }
  
  const calculateResult=()=>{
    const input= text.join('')
    setResult(evaluate(input))
  }

  return (
    <div className='App'>
    
    <div className='calculator-wrapper'>
      <Input text= {text} result = {result} />
      <p>{text}</p>
   <div className='row'>
    <Button symbol='7' handlleClick={addToText}/>
    <Button symbol='8'handlleClick={addToText}/>
    <Button symbol='9'handlleClick={addToText}/>
    <Button symbol='+' handlleClick={addToText}/>

   </div>
   <div className='row'>
   <Button symbol='4'handlleClick={addToText}/>
    <Button symbol='5' handlleClick={addToText}/>
    <Button symbol='6'handlleClick={addToText}/>
    <Button symbol='-'handlleClick={addToText}/>

   </div>
   <div className='row'>
   <Button symbol='1'handlleClick={addToText}/>
    <Button symbol='2'handlleClick={addToText}/>
    <Button symbol='3'handlleClick={addToText}/>
    <Button symbol='*'handlleClick={addToText}/>

   </div>
 

   <div className='row'>
   <Button symbol='C' handlleClick={resetInput}/>
    <Button symbol='0'handlleClick={addToText}/>
    <Button symbol='=' handlleClick={calculateResult}/>
    <Button symbol='/' handlleClick={addToText}/>

   </div>
    </div>
   
    </div>
  )
  }
export default App
