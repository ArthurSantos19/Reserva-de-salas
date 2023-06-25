import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import { Header } from './components/Header/Header.jsx'
import './index.css'
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FazerNovaReserva } from './routes/FazerNovaReserva.jsx'
import { SalasReservadasProvider } from './components/Context/SalasReservadasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Header />
    <SalasReservadasProvider>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/fazernovareserva' element={<FazerNovaReserva />} />
      </Routes>
    </SalasReservadasProvider>
  </BrowserRouter>
    
  </React.StrictMode>,
)
