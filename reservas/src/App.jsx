import './App.css'
import { NovaReserva } from './components/NovaReserva'
import { Header } from './components/Header/Header'
import { List } from './components/List/List'
import { salas, salasOcupadas } from './components/salas'

function App() {
  

  return (
    <>
      {/* <Header /> */}
      <NovaReserva />
      <List />
    </>
  )
}

export default App
