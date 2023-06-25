import { ContainerSecundario, ContainerPrincipal, Card, CriarNovaSalaButton } from "./styles"
import { v4 as uuidv4 } from "uuid";
import { salas, salasOcupadas } from "../components/salas"
import { FormNovaReserva } from "../components/FormNovaReserva/FormNovaReserva"
import { useState, useEffect } from "react"
import { CriarNovaSala } from "../components/CriarNovaSala/CriarNovaSala"
import axios from "axios";

export function FazerNovaReserva() {

    const [modalContent, setModalContent] = useState(null);
    const [salasCriadas, setSalasCriadas] = useState([]);
    const [salasReservadas, setSalasReservadas] = useState([]);
    const [salaSelecionada, setSalaSelecionada] = useState(null);

    useEffect(() => {
        async function fetchSalasCriadas() {
          try {
            const response = await axios.get("http://127.0.0.1:8000/salas/");
            setSalasCriadas(response.data);
          } catch (error) {
            console.error("Erro ao buscar as salas criadas:", error);
          }
        }
    
        fetchSalasCriadas();
      }, []);


    const handleAbrirModal = (conteudoModal) => {
        setModalContent(conteudoModal);
    };
    
      const handleFecharModal = () => {
        setModalContent(null);
    };

    const handleClick = (salaId) => {
        const salaReservada = salasCriadas.find((sala) => sala.id === salaId);
        if (salaReservada) {
          setSalaSelecionada(salaReservada);
          setSalasCriadas((salasCriadas) =>
            salasCriadas.filter((sala) => sala.id !== salaId)
          );
          
        }
    };

    const handleNovaSalaCriada = (formSubmitSala) => {
        const salaComId = { ...formSubmitSala, id: uuidv4() };
        setSalasCriadas((salasCriadas) => [...salasCriadas, salaComId]);
    };
      

    const handleNovaSalaReservada = (formSubmit) => {
        const salaComId = { ...salaSelecionada, id: uuidv4(), disponivel: true };
        setSalasReservadas((salasReservadas) => [...salasReservadas, salaComId]);
        setSalaSelecionada(null);
        handleFecharModal();
        setSalasCriadas((salasCriadas) => [...salasCriadas.filter((sala) => sala.id !== salaComId.id)]);
    };

    const handleDeleteSala = (formSubmit) => {
        const salaComId = { ...salaSelecionada, id: uuidv4() };
        setSalasCriadas((salasCriadas) => [...salasCriadas.filter((sala) => sala.id !== salaComId.id)])
        setSalaSelecionada(null);
    }

    const salasDisponiveis = salasCriadas.filter((sala) => sala.disponivel);
            
    return (
        <ContainerPrincipal>
            {modalContent ? (
                modalContent
            ) : (
                <CriarNovaSalaButton onClick={() => handleAbrirModal(<CriarNovaSala onClose={handleFecharModal} onNovaSalaCriada={handleNovaSalaCriada} />)}>
                Criar Nova Sala
                </CriarNovaSalaButton>
            )}
            <h3>Salas disponiveis:</h3>
            <p>Clique na sala para reservar</p>
            <ContainerSecundario>
                {salasDisponiveis.map((sala, index) => (
                    <Card
                        key={index}
                        onClick={() => handleClick(sala.id)}
                        >
                        {sala.nomeSala}
                    </Card>
                ))}
            </ContainerSecundario>
                {salaSelecionada && (
                <FormNovaReserva
                    salaSelecionada={salaSelecionada}
                    onNovaSalaReservada={handleNovaSalaReservada}
                    onClose={() => setSalaSelecionada(null)}
                    nomeSala={salaSelecionada.nomeSala}
                    setSalaSelecionada={setSalaSelecionada}
                    setSalasCriadas={setSalasCriadas}
                    deletaSala={handleDeleteSala}
                />
            )}
            
        </ContainerPrincipal>
        
    )
}