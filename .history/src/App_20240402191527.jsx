import {useState} from 'react'
import Button from './Component/Button/Button'
import Input from './Component/Input/Input'
import './App.css'
// import Keyboard from './Component/Keyboard'

function App() {
  const [text, setText]= useState('')
  const [result, setResult]= useState()
  

  return (
    <div className='App'>
    
    <div className='calculator-wrapper'>
      <Input/>
   <div className='row'>
    <Button symbol='7'/>
    <Button symbol='8'/>
    <Button symbol='9'/>
    <Button symbol='+'/>

   </div>
   <div className='row'>
   <Button symbol='4'/>
    <Button symbol='5'/>
    <Button symbol='6'/>
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
