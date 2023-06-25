import { useState } from "react"
import { ContainerForm, ContainerButton, DivButton } from "../FormNovaReserva/styles"
import { ButtonReserva } from "../styles"
import { CancelButton } from "../styles"

export function CriarNovaSala({onClose, onNovaSalaCriada}) {

    const [nomeSala, setNomeSala] = useState("")
    const [nomeAdmin, setNomeAdmin] = useState("")

    const handleNomeSala = (event) => {
        setNomeSala(event.target.value);
      };

      const handleNomeAdmin = (event) => {
        setNomeAdmin(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        if (nomeSala.trim() === "" || nomeAdmin === "") {
          alert("Por favor, preencha todos os campos.");
          return;
        }

        const formSubmitSala = {
            nomeSala: nomeSala,
            nomeAdmin: nomeAdmin,
        }
        console.log("Dados a serem enviados para criar sala:", formSubmitSala);
        onNovaSalaCriada(formSubmitSala);
        onClose();
      }

      const handleCancel = () => {
        onClose();
      }

    return (
        <ContainerForm>
            <h4>Dados da sala</h4>
            <input onChange={handleNomeSala} placeholder="Nome da sala" style={{margin: '10px'}} />
            <input onChange={handleNomeAdmin} placeholder="Seu Nome" style={{margin: '10px'}} />
            <ContainerButton>
                
                <DivButton>
                    <ButtonReserva onClick={handleSubmit} type="submit" >Criar sala</ButtonReserva>
                    <CancelButton onClick={handleCancel} style={{ marginLeft: '10px' }} >Cancelar</CancelButton>
                </DivButton>
            </ContainerButton>
        </ContainerForm>
    )
}