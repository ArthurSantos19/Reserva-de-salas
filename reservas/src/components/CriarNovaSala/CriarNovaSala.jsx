import { ContainerForm, ContainerButton, DivButton } from "../FormNovaReserva/styles"
import { ButtonReserva } from "../styles"
import { CancelButton } from "../styles"

export function CriarNovaSala() {
    return (
        <ContainerForm>
            <h4>Dados da sala</h4>
            <input placeholder="Nome da sala" style={{margin: '10px'}} />
            <input placeholder="Seu Nome" style={{margin: '10px'}} />
            <ContainerButton>
                
                <DivButton>
                    <ButtonReserva type="submit" >Criar sala</ButtonReserva>
                    <CancelButton style={{ marginLeft: '10px' }} >Cancelar</CancelButton>
                </DivButton>
            </ContainerButton>
        </ContainerForm>
    )
}