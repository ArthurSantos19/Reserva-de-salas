import { ContainerForm, InputContainer, DivButton, ContainerButton } from "./styles"
import { ptBR } from 'date-fns/locale';
import { ButtonReserva, CancelButton } from "../styles";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";


export function FormNovaReserva({nomeSala} ) {

    const [nome, setNome] = useState("");
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("")
    const [data, setData] = useState(null)
    const navigate = useNavigate();

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

      const handleDataChange = (date) => {
        setData(date);
      }

      const handleSubmit = (event) => {
        event.preventDefault();

        const formSubmit = {
            nome: nome,
            opcaoSelecionada: opcaoSelecionada,
            data: data,
        }
        console.log("Dados a serem enviados:", formSubmit);
      }

      const handleCancel = () => {
        navigate("/fazernovareserva")
      }

    return (
        
        
        <ContainerForm>
            <h4>Reserve a: {nomeSala}</h4>
            <input placeholder="Seu nome" value={nome} type="text" onChange={handleNomeChange} />
            <InputContainer>
                <input
                    type="radio"
                    name="opcao"
                    value="Manha"
                    checked={opcaoSelecionada === "Manha"}
                    onChange={handleChange}
                />
                <label>Manhã</label>
                <input
                    type="radio"
                    name="opcao"
                    value="Tarde"
                    checked={opcaoSelecionada === "Tarde"}
                    onChange={handleChange}
                />
                <label>Tarde</label>
                <input
                    type="radio"
                    name="opcao"
                    value="Noite"
                    checked={opcaoSelecionada === "Noite"}
                    onChange={handleChange}
                />
                <label>Noite</label>
            </InputContainer>
            <label>Data da reserva</label>
            <DatePicker  selected={data} onChange={handleDataChange} locale={ptBR} dateFormat="dd/MM/yyyy" />
            <ContainerButton>
                <DivButton>
                    <ButtonReserva type="submit" onClick={handleSubmit}>Reservar</ButtonReserva>
                    <CancelButton style={{ marginLeft: '10px' }} onClick={handleCancel}>Cancelar</CancelButton>
                </DivButton>
            </ContainerButton>
            
            
        </ContainerForm>
    

        
    )
}
