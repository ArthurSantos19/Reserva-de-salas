import { ContainerForm, InputContainer, DivButton } from "./styles"
import { DateAndTimePickers } from "./DateAndTimePickers";
import { ButtonReserva } from "../styles";
import { useState } from "react";
import { adicionarReserva } from "./teste";


export function FormNovaReserva() {

    const [nome, setNome] = useState("");
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

    const handleChange = (event) => {
        const valorSelecionado = event.target.value;
        if(opcaoSelecionada === valorSelecionado) {
            setOpcaoSelecionada("")
        }else {
            setOpcaoSelecionada(valorSelecionado)
        }
      };

      const handleNomeChange = (event) => {
        setNome(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        const formSubmit = {
            nome: nome,
            opcaoSelecionada: opcaoSelecionada,
        }
        console.log("Dados a serem enviados:", formSubmit);
        adicionarReserva(formSubmit);
      }

    return (
        
        
        <ContainerForm>
            <h4>Reserve a sala ...</h4>
            <input placeholder="Seu nome" value={nome} type="text" onChange={handleNomeChange} />
            <InputContainer>
                <input
                    type="radio"
                    name="opcao"
                    value="opcao1"
                    checked={opcaoSelecionada === "opcao1"}
                    onChange={handleChange}
                />
                <label>Manhã</label>
                <input
                    type="radio"
                    name="opcao"
                    value="opcao2"
                    checked={opcaoSelecionada === "opcao2"}
                    onChange={handleChange}
                />
                <label>Tarde</label>
                <input
                    type="radio"
                    name="opcao"
                    value="opcao3"
                    checked={opcaoSelecionada === "opcao3"}
                    onChange={handleChange}
                />
                <label>Noite</label>
            </InputContainer>
            
            <DateAndTimePickers />
            <DivButton>
                <ButtonReserva type="submit" onClick={handleSubmit}>Reservar</ButtonReserva>
            </DivButton>
            
        </ContainerForm>
    

        
    )
}
