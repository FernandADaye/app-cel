import './Card.css'

function Card(props){
    return(
        <div className='card-style'>            
            <img className='imagenCel' src="https://m.media-amazon.com/images/I/51iJx7YWDOL.__AC_SY445_SX342_QL70_ML2_.jpg" alt="" />
            <h2 className='text'>{props.item.title}</h2>
            <p className='text'>{props.item.mas}</p>
            <p className='text'><strong className='text'>{props.item.price}</strong></p>
        </div>
    )
}
export default Card