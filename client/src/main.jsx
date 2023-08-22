import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Context/context.jsx';
import CartContextProvider from './User/CartContext/context.jsx';
import './style.css'
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <CartContextProvider>
        <ToastContainer />
          <App />
        </CartContextProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)