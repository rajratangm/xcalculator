import React, { Component } from 'react';


const Keyboard=()=>{

    return (
        <div className="button">

           <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
          <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
          <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>




          <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
          <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
          <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
          <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
  
  
          <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
          <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
          <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
  
  
  
          
  
  
          <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
          <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
          <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
          <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
        </div>
      )
}


export default Keyboard;