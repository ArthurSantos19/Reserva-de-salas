import { ContainerSecundario, ContainerPrincipal, Card, CriarNovaSalaButton } from "./styles"
import { salas, salasOcupadas } from "../components/salas"
import { FormNovaReserva } from "../components/FormNovaReserva/FormNovaReserva"
import { useState } from "react"
import { CriarNovaSala } from "../components/CriarNovaSala/CriarNovaSala"

export function FazerNovaReserva() {

    const [showContainerForm, setShowContainerForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [showContainerCriar, setShowContainerCriar] = useState(false);
    const [salasCriadas, setSalasCriadas] = useState([]);

    const handleClick = (nomeSala) => {
        setSelectedRoom(nomeSala)
        setShowContainerForm(true)
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
        setSalasCriadas((salasCriadas) => [...salasCriadas, formSubmitSala]);
    };


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
                    <Card key={index} onClick={() => handleClick(sala.nomeSala)}>{sala.nomeSala}</Card>
                ))}


                </ContainerSecundario>
                {showContainerForm && (
                    <>
                        <div id="overlay" onClick={(handleFormClose)}></div>
                        <FormNovaReserva onClose={handleFormClose} nomeSala={selectedRoom}/>
                    </>
                )}
        </ContainerPrincipal>
        
    )
}