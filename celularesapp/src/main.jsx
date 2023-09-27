import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='celulares'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </section>

  </React.StrictMode>,
)
