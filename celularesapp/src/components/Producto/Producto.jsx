/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';
import { useEffect, useState } from 'react';

export default function Producto() {
    
    const [Producto,setProducto] = useState()
    const [isLoading, setIsLoading]= useState(true )

    useEffect(()=> {
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => { 
            setProducto(data)
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <h3> Cargando...</h3>
        }else{
    return(
        <>
        <section className='celulares'>
        {
        Producto.celulares.map((item, index) => {
        return <Card item={item} key={index} />
        
        })
        }
    </section>
        </>
    )
    }
        
    }

