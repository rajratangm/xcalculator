import { useState } from 'react'

import './App.css'
import Keyboard from './Component/keyboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      React Calculator
    </h1>
    <Keyboard/>
    
   
    </>
  )
}

export default App
