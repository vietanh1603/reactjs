import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./components/ProductFrom/ProductForm.jsx";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/products',
        element:<Product/>
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
