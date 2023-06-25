import { CardContainer } from "./styles";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SalasReservadasContext } from "../Context/SalasReservadasContext";

export function List() {
    const currentDate = new Date();
    const [salasReservadas, setSalasReservadas] = useState([]); // Alteração aqui

    useEffect(() => {
        async function fetchSalas() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/salas/listar_reservadas/");
                const todasSalas = response.data;
                const salasReservadas = todasSalas.filter(sala => !sala.disponivel);
                setSalasReservadas(salasReservadas);
            } catch (error) {
                console.error("Erro ao buscar as salas:", error);
            }
        }

        fetchSalas();
    }, []);

    return (
        <div>
            {salasReservadas && salasReservadas.map(salaReservada => (
                <CardContainer key={salaReservada.id}>
                    <h5>Sala: {salaReservada.nomeSala}</h5>
                    <h5>Criador: {salaReservada.nomeAdmin}</h5>
                    <h5>status: Sala reservada</h5>
                </CardContainer>
            ))}
        </div>
    );
}
