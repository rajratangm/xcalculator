import { useState } from 'react'

// import './App.css'
import Keyboard from './Component/Keyboard'

function App() {
  const [count, setCount] = useState(0)
  
  const clickedButton=(event)=>{
    count = event

  }

  return (
    <>
    <h1>
      React Calculator
    </h1>
    <Keyboard onClick={clickedButton}/>
    
   
    </>
  )
}

export default App
