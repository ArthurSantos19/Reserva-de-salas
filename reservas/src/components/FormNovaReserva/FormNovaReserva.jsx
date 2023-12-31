import { ContainerForm, InputContainer, Input, InputRadio, DivButton, StyledDatePicker, ContainerButton, IconLixeira } from "./styles"
import { ptBR } from 'date-fns/locale';
import { ButtonReserva, CancelButton } from "../styles";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';



export function FormNovaReserva({nomeSala, onClose, onNovaSalaReservada, deletaSala, setSalaSelecionada, salaSelecionada, setSalasCriadas} ) {

    const [nome, setNome] = useState("");
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("")
    const [data, setData] = useState(null)
    const [modalAberto, setModalAberto] = useState(true);
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState("")
    const formattedDate = data ? format(data, 'yyyy-MM-dd', { locale: ptBR }) : null;

    const enviarDadosParaBackend = async (formSubmit) => {
        try {
          const url = `http://127.0.0.1:8000/salas/reservar/${salaSelecionada.id}/`;
          const response = await axios.patch(url, formSubmit);
          console.log("Resposta do servidor:", response.data);
          onNovaSalaReservada(response.data);
          onClose();
        } catch (error) {
          console.error("Erro ao enviar dados para o backend:", error);
        }
      };

      const apagarSala = async () => {
        try {
          const url = `http://127.0.0.1:8000/salas/apagar/${salaSelecionada.id}/`;
          await axios.delete(url);
          setSalasCriadas((salasCriadas) => salasCriadas.filter(sala => sala.id !== salaSelecionada.id));
          onClose();
        } catch (error) {
          console.error("Erro ao apagar sala:", error);
        }
      };

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

        if (nome.trim() === "" || opcaoSelecionada === "" || data === null) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const formSubmit = {
            nome: nome,
            opcaoSelecionada: opcaoSelecionada,
            disponivel: false,
            data: formattedDate,
        }
        console.log("Dados a serem enviados:", formSubmit);
        enviarDadosParaBackend(formSubmit)
        onClose();
    }

    const handleCancel = () => {
        setSalasCriadas((salasCriadas) => [...salasCriadas, salaSelecionada]);
        onClose();
    };
      
    return (
        <>
            {modalAberto && (
                <ContainerForm>
                    <h4>Reserve a: {nomeSala}</h4>
                    <Input placeholder="Seu nome" value={nome} type="text" onChange={handleNomeChange} />
                    <InputContainer>
                        <InputRadio
                            type="radio"
                            name="opcao"
                            value="Manha"
                            checked={opcaoSelecionada === "Manha"}
                            onChange={handleChange}
                        />
                        <label>Manhã</label>
                        <InputRadio
                            type="radio"
                            name="opcao"
                            value="Tarde"
                            checked={opcaoSelecionada === "Tarde"}
                            onChange={handleChange}
                        />
                        <label>Tarde</label>
                        <InputRadio
                            type="radio"
                            name="opcao"
                            value="Noite"
                            checked={opcaoSelecionada === "Noite"}
                            onChange={handleChange}
                        />
                        <label>Noite</label>
                    </InputContainer>
                    <label>Data da reserva</label>
                    <StyledDatePicker  style={{ width: '50%' }} selected={data} onChange={handleDataChange} locale={ptBR} dateFormat="dd/MM/yyyy" />
                    <ContainerButton>
                        <DivButton>
                            <ButtonReserva type="submit" onClick={handleSubmit}>Reservar</ButtonReserva>
                            
                            <CancelButton onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancelar</CancelButton>
                            
                        </DivButton>
                    </ContainerButton>
                    <IconLixeira onClick={apagarSala}></IconLixeira>
                </ContainerForm>
            )}
        </>

        
    )
}
