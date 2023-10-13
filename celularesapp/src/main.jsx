import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './components/Home/home';
// import Menu from './components/menu/Menu';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Producto from './components/Producto/Producto';

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>, 
    children:[
      {
        path:"/",
        element:<Producto/>
      },
      {
        path:"/pantallas",
        element:<><h1>pantallas </h1></>
      },
      {
          path:"/about",
          element:<> <h1>About us</h1></>
        }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

