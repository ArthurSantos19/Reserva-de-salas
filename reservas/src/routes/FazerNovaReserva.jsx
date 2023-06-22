import { ContainerSecundario, ContainerPrincipal, Card, CriarNovaSalaButton } from "./styles"
import { salas, salasOcupadas } from "../components/salas"
import { FormNovaReserva } from "../components/FormNovaReserva/FormNovaReserva"
import { useState } from "react"
import { CriarNovaSala } from "../components/CriarNovaSala/CriarNovaSala"

export function FazerNovaReserva() {

    const [showContainerForm, setShowContainerForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [showContainerCriar, setShowContainerCriar] = useState(false);

    const handleClick = (nomeSala) => {
        setSelectedRoom(nomeSala)
        setShowContainerForm(true)
    };

    const handleClickCriar = () => {
        setShowContainerCriar(true)
    }


    return (
        <ContainerPrincipal>
            {showContainerCriar ? (
                <CriarNovaSala />
            ) : (
                <CriarNovaSalaButton onClick={() => setShowContainerCriar(true)}>Criar Nova Sala</CriarNovaSalaButton>
            )}
            <h3>Salas disponiveis:</h3>
            <p>Clique na sala para reservar</p>
                <ContainerSecundario>
                
                    {salas.map(sala => {
                        return <Card onClick={() => handleClick(sala.nome)} key={sala.id}>{sala.nome}</Card>
                    })}

                </ContainerSecundario>
                {showContainerForm && (
                    <>
                        <div id="overlay" onClick={() => setShowContainerForm(false)}></div>
                        <FormNovaReserva nomeSala={selectedRoom}/>
                    </>
                )}
        </ContainerPrincipal>
        
    )
}