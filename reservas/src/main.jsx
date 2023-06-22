import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Header/Header.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FazerNovaReserva } from './routes/FazerNovaReserva.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/fazernovareserva' element={<FazerNovaReserva />}/>
    </Routes>
    
  </BrowserRouter>
    
  </React.StrictMode>,
)
