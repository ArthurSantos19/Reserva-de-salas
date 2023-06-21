import './App.css'
import { NovaReserva } from './components/NovaReserva'
import { Header } from './components/Header/Header'
import { List } from './components/List/List'
import { useState } from 'react'

function App() {
  const lists = [0,1,2]

  return (
    <>
      <Header />
      <NovaReserva />
      {lists.map(list => {
        return <List />
      })}
    </>
  )
}

export default App
