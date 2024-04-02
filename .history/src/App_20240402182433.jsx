import { useState } from 'react'

// import './App.css'
import Keyboard from './Component/Keyboard'

function App() {
  const [count, setCount] = useState(0)
  
  const clickedButton=(event)=>{
     setCount(event)

  }

  return (
    <>
    <h1>
      React Calculator
    </h1>
    <p>{count}</p>
    <Keyboard onClick={clickedButton}/>
    
    
   
    </>
  )
}

export default App
