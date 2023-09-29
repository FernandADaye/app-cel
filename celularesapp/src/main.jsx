import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const telefonos= [
  {
    title: 'xiaomi',
    price:'10,000',
    mas:'celular xiaomi caro y hermoso azul marino',
  },
  {
    title: 'iphone',
    price:'30,000',
    mas:'celular iphone caro y hermoso negro',
  }, 
  {
    title: 'Galaxi',
    price:'20,000',
    mas:'celular Galaxi caro y hermoso morado',
  },
  {
    title: 'Motorola',
    price:'20,000',
    mas:'celular Motorola caro y hermoso azul',
    imagen: 'hola',
  },
  {
    title: 'Samsum',
    price:'10,000',
    mas:'celular Samsum caro y hermoso blanco',
  }
]

telefonos.forEach(items=>{
  console.log(items);
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <section className='celulares'>
      {
      telefonos.map((item, index)=>{
        // eslint-disable-next-line react/jsx-key
        return <Card item={item} key={index}/>
      })
      }
    </section>

  </React.StrictMode>,
)

