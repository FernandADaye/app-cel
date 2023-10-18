/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';
import { useEffect, useState } from 'react';


export default function Producto() {
    
    const [Producto,setProducto] = useState()
    const [isLoading, setIsLoading]= useState(true)
    const [searchState, setSearchState] = useState('')
    const[ productoFilterState, setProductoFilterState]=useState()


    useEffect(()=> {
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => { 
            setProducto(data)
            setIsLoading(false)
            setProductoFilterState(data.celulares)
        })
    },[])

    const handlerSearch=(event)=>{
setSearchState(event.target.value)
let filterProducto= Producto.celulares.filter(item=>item.title.toLowerCase().includes(searchState.toLowerCase()))
console.log(filterProducto);
setProductoFilterState(filterProducto)

    }
    if (isLoading) {
        return <h3> Cargando...</h3>
        }else{
    return(
        <>
<div>
<form className="d-flex" role="search">
<input onChange={handlerSearch} className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"></input>
</form>
</div>


        <section className='celulares'>
        {productoFilterState.map((item, index) => {
        return <Card item={item} key={index} />
        
        })
        }
    </section>
        </>
    )
    }
        
    }

