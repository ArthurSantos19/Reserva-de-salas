import { ContainerSecundario, ContainerPrincipal, Card, CriarNovaSalaButton } from "./styles"
import { salas, salasOcupadas } from "../components/salas"
import { FormNovaReserva } from "../components/FormNovaReserva/FormNovaReserva"
import { useState } from "react"

export function FazerNovaReserva() {

    const [showContainerForm, setShowContainerForm] = useState(false)
    const handleClick = () => {
        setShowContainerForm(true)
    }
    return (
        <ContainerPrincipal>
            <CriarNovaSalaButton>Criar Nova Sala</CriarNovaSalaButton>
            <h3>Salas disponiveis</h3>
                <ContainerSecundario>
                {showContainerForm && (
                    <>
                        <div id="overlay" onClick={() => setShowContainerForm(false)}></div>
                        <FormNovaReserva />
                    </>
                )}
                    {salas.map(sala => {
                        return <Card onClick={handleClick} key={sala.id}>{sala.nome}</Card>
                    })}

                    
                </ContainerSecundario>
        </ContainerPrincipal>
        
    )
}