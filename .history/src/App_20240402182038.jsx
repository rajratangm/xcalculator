import { useState } from 'react'

// import './App.css'
import Keyboard from './Component/Keyboard'

function App() {
  const [count, setCount] = useState(0)4

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
