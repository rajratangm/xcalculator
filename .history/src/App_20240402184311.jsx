import { useState } from 'react'

// import './App.css'
import Keyboard from './Component/Keyboard'

function App() {
  const [count, setCount] = useState(0)
  
  const clickedButton=(event)=>{
     setCount(event.target.value)

  }

  return (
    <>
    <h1>calculator</h1>
   
    </>
  )
}

export default App
