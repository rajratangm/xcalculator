import React from 'react';


const Keyboard=()=>{

    return (
        <div>

           <button value="7" onClick={e =>  e.target.value}>7</button>
          <button value="8" onClick={e =>   e.target.value}>8</button>
          <button value="9" onClick={e =>   e.target.value}>9</button>
          <button value="+" onClick={e =>   e.target.value}>+</button><br/>


          
          <button value="4" onClick={e =>   e.target.value}>4</button>
          <button value="5" onClick={e =>   e.target.value}>5</button>
          <button value="6" onClick={e =>   e.target.value}>6</button>
          <button value="-" onClick={e =>   e.target.value}>-</button><br/>

          <button value="1" onClick={e =>   e.target.value}>1</button>
          <button value="2" onClick={e =>   e.target.value}>2</button>
          <button value="3" onClick={e =>   e.target.value}>3</button>
          <button value="*" onClick={e =>   e.target.value}>*</button><br/>




          <button value="C" onClick={e =>   e.target.value}>C</button>
          <button value="zero" onClick={e =>   e.target.value}>0</button>
          <button value="=" onClick={e =>   e.target.value}>=</button>
          <button value="/" onClick={e =>   e.target.value}>/</button><br/>
  
  
         
  
  
  
          
  
  
          <button value="." onClick={e =>   e.target.value}>.</button>
          <button value="0" onClick={e =>   e.target.value}>0</button>
          <button value="=" onClick={e =>   e.target.value}>=</button>
          <button value="/" onClick={e =>   e.target.value}>÷</button><br/>
        </div>
      )
}


export default Keyboard;