import { useState } from 'react'
import Button from './Component/Button/Button'

import './App.css'
import Keyboard from './Component/Keyboard'

function App() {
  

  return (
    <div className='App'>
    
    <div className='calculator-wrapper'>
   <div className='row'>
    <Button symbol={8}/>
    <Button/>
    <Button/>

   </div>
   <div className='row'>
    <Button/>
    <Button/>
    <Button/>

   </div>
   <div className='row'>
    <Button/>
    <Button/>
    <Button/>

   </div>
    </div>
   
    </div>
  )
}

export default App
