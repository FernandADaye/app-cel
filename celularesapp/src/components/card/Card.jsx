/* eslint-disable */
import './Card.css'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Card(props){
    const [counter, setCounter]=useState(0)
function handlerConter () {
    setCounter(counter +1)
    
}

var [like, setLike]= useState(false)
function handlerLike(){
    setLike(!like)
}
    return(
        <div className='card-style'>            
            <img className='imagenCel' src={props.item.image} alt="vista previa del celular" />
            <div className='titleIcon'>
                <h2 className='textT'>{props.item.title}</h2>
                <div className='icons' onClick={handlerLike} >
                    {like ? <FaHeart className='heartIcon'></FaHeart> :<FaRegHeart className='heartIcon' ></FaRegHeart> }
            </div>
            </div>
            <p className='text'>{props.item.mas}</p>
            <p className='text'><strong className='text'>Costo {props.item.price}</strong></p>
            {/* <h4 className='textC'>  Contador: {counter}</h4> */}
            <button onClick={handlerConter} type="button" className="btn btn-dark" > <Link className ="enlaceBot" to="/detalle" state={props.item} >Detalles</Link>
</button>

        </div>
        
    )
}
export default Card

