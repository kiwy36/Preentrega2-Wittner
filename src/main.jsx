import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import ItemDetailContainerRoot from './routes/ItemDetailContainerRoot'
import CartWidget from './components/CartWidget/CartWidget'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/category/:id",
    element: <Root/>,
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainerRoot/>,
  },
  {
    path: "/cart",
    element: <CartWidget/>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
