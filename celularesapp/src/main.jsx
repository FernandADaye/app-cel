import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card'
import './index.css'

const telefonos= [
  {
    title: 'xiaomi',
    price:'10,000',
  },
  {
    title: 'iphone',
    price:'30,000',
  }, 
  {
    title: 'Galaxi',
    price:'20,000',
  },
  {
    title: 'Motorola',
    price:'20,000',
  },
  {
    title: 'Samsum',
    price:'10,000',
  }
]

telefonos.forEach(items=>{
  console.log(items);
})

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
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

