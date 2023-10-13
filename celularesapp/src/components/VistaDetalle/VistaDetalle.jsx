/*eslint-disable*/
import React from 'react'
import { useLocation } from 'react-router-dom';

export default function VistaDetalle() {

    const location= useLocation()
    let item = location.state
    console.log(item);
    return (
        <>   
    <table className="table">
    <thead>
    <tr>
        <th scope="col">{item.title} </th>
        <th scope="col">Fecha De Envio</th>
        <th scope="col">Costo</th>
        <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>{randomDate} </td>
        <td>{item.price}</td>
        <td>@mdo</td>
    </tr>
    </tbody>
</table>
    </>
    
    )
}


console.log(location.state);