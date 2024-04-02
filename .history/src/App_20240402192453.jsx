import {useState} from 'react'
import Button from './Component/Button/Button'
import Input from './Component/Input/Input'
import './App.css'
// import Keyboard from './Component/Keyboard'

function App() {
  const [text, setText]= useState('')
  const [result, setResult]= useState('')

  const addToText=(val)=>{

    setText((text)=>[...text, val +' '])
  }
  

  return (
    <div className='App'>
    
    <div className='calculator-wrapper'>
      <Input text= {text} result = {result}/>
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
    <Button symbol='-'/>

   </div>
   <div className='row'>
   <Button symbol='1'/>
    <Button symbol='2'/>
    <Button symbol='3'/>
    <Button symbol='*'/>

   </div>
 

   <div className='row'>
   <Button symbol='C'/>
    <Button symbol='0'/>
    <Button symbol='='/>
    <Button symbol='/'/>

   </div>
    </div>
   
    </div>
  )
  }
export default App
