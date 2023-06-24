import { ContainerSecundario, ContainerPrincipal, Card, CriarNovaSalaButton } from "./styles"
import { v4 as uuidv4 } from "uuid";
import { salas, salasOcupadas } from "../components/salas"
import { FormNovaReserva } from "../components/FormNovaReserva/FormNovaReserva"
import { useState, useEffect } from "react"
import { CriarNovaSala } from "../components/CriarNovaSala/CriarNovaSala"

export function FazerNovaReserva() {

    const [showContainerForm, setShowContainerForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [showContainerCriar, setShowContainerCriar] = useState(false);
    const [salasCriadas, setSalasCriadas] = useState([]);
    const [salasReservadas, setSalasReservadas] = useState([]);
    const [salaSelecionada, setSalaSelecionada] = useState(null);



    const handleClick = (salaId) => {
        const salaReservada = salasCriadas.find((sala) => sala.id === salaId);
        if (salaReservada) {
          setSalaSelecionada(salaReservada);
          setSalasCriadas((salasCriadas) =>
            salasCriadas.filter((sala) => sala.id !== salaId)
          );
          setShowContainerForm(true);
        }
    };
      

    const handleFormClose = () => {
        setShowContainerForm(false);
    };
    
    const handleCriarSalaClick = () => {
        setShowContainerCriar(true);
    };
    
    const handleCriarSalaClose = () => {
    setShowContainerCriar(false);
    };

    const handleNovaSalaCriada = (formSubmitSala) => {
        const salaComId = { ...formSubmitSala, id: uuidv4() };
        setSalasCriadas((salasCriadas) => [...salasCriadas, salaComId]);
    };
      

    const handleNovaSalaReservada = (formSubmit) => {
        const salaComId = { ...salaSelecionada, id: uuidv4() };
        setSalasReservadas((salasReservadas) => [...salasReservadas, salaComId]);
        setSalaSelecionada(null);
    };
            
      
    console.log("Salas criadas:", salasCriadas);

    return (
        <ContainerPrincipal>
            {showContainerCriar ? (
                <CriarNovaSala onClose={handleCriarSalaClose} onNovaSalaCriada={handleNovaSalaCriada}/>
            ) : (
                <CriarNovaSalaButton onClick={(handleCriarSalaClick)}>Criar Nova Sala</CriarNovaSalaButton>
            )}
            <h3>Salas disponiveis:</h3>
            <p>Clique na sala para reservar</p>
                <ContainerSecundario>
                
                {salasCriadas.map((sala, index) => (
                    <Card key={index} onClick={() => handleClick(sala.id)}>{sala.nomeSala}</Card>
                ))}


                </ContainerSecundario>
                {showContainerForm && (
                    <>
                        <div id="overlay" onClick={(handleFormClose)}></div>
                        <FormNovaReserva onNovaSalaReservada={handleNovaSalaReservada} onClose={handleFormClose} nomeSala={selectedRoom}/>
                    </>
                )}
        </ContainerPrincipal>
        
    )
}