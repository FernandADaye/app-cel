import './Card.css'
import { useState } from 'react'

function Card(props){
    const [counter, setCounter]=useState(0)
function handlerConter () {
    setCounter(counter +1)
    
}

    return(
        <div className='card-style'>            
            <img className='imagenCel' src="https://m.media-amazon.com/images/I/51iJx7YWDOL.__AC_SY445_SX342_QL70_ML2_.jpg" alt="" />
            <h2 className='text'>{props.item.title}</h2>
            <p className='text'>{props.item.mas}</p>
            <p className='text'><strong className='text'>{props.item.price}</strong></p>
            <h4>contador: {counter}</h4>
            <button onClick={handlerConter}>push me</button>
        </div>
    )
}
export default Card