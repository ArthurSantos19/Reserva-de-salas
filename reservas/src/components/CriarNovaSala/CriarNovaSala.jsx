import { useState } from "react"
import { ContainerForm, ContainerButton, DivButton } from "../FormNovaReserva/styles"
import { ButtonReserva } from "../styles"
import { CancelButton } from "../styles"
import axios from "axios";

export function CriarNovaSala({onClose, onNovaSalaCriada}) {

    const [nomeSala, setNomeSala] = useState("")
    const [nomeAdmin, setNomeAdmin] = useState("")

    const handleNomeSala = (event) => {
        setNomeSala(event.target.value);
      };

      const handleNomeAdmin = (event) => {
        setNomeAdmin(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();

        if (nomeSala.trim() === "" || nomeAdmin === "") {
          alert("Por favor, preencha todos os campos.");
          return;
        }

        const formSubmitSala = {
            nomeSala: nomeSala.toString(),
            nomeAdmin: nomeAdmin.toString(),
            disponivel: true,
        }

        try {
          const response = await axios.post("http://127.0.0.1:8000/salas/criar/", formSubmitSala);
          if (response.status === 200) {
            onNovaSalaCriada(formSubmitSala);
            onClose();
          }
        } catch (error) {
          console.error(error);
          // Trate o erro adequadamente, exiba uma mensagem de erro ao usuário, etc.
        }
              

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