// import React from 'react'
// import Producto from '../Producto/Producto'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'


export default function home() {
    return (
<>
<Menu/>
<Outlet/>
</>
)
}
