import './Button.css'


const Button=({symbol, handlleClick})=>{
    return <button className='button-wrapper' onClick={()=>handlleClick(symbol)} >
{symbol}
    </div>
}

export default Button