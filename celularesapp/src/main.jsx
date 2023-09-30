import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Producto from './components/Producto/Producto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Producto/>
  </React.StrictMode>,
)

