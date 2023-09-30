import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';
import Productotel from './Producto.json'

function Producto() {





    return (
        <>
        <section className='celulares'>
        {
        Productotel.telefonos.map((item, index)=>{
        return <Card item={item} key={index}/>
        })
        }
    </section>
        </>
    )
}

export default Producto

