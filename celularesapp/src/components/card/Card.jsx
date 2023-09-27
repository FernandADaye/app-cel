import './Card.css'
function Card(props) {
    return(
        <div className='card-style'>            
            <img className='imagenCel' src="https://m.media-amazon.com/images/I/51iJx7YWDOL.__AC_SY445_SX342_QL70_ML2_.jpg" alt="" />
            <h2 className='text'>{props.name}</h2>
            <p className='text'>dato</p>
            <p className='text'> <strong className='text'> precio:$23,897.00</strong></p>
        </div>
    )
}
export default Card