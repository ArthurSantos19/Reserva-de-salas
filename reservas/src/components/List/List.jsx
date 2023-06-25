import { CardContainer } from "./styles"
import { salas, salasOcupadas } from "../salas";
import React, { useContext } from "react";
import { SalasReservadasContext } from "../Context/SalasReservadasContext";

export function List() {
    const currentDate = new Date();
    const {salasReservadas} = useContext(SalasReservadasContext);

    return (
        // <div>
        //     {salasReservadas &&  salasReservadas.map( salaReservada => {
        //         return <CardContainer>
        //         <p>{salaReservada.nome}</p>
        //         <p>{salaReservada.status}</p>
                
        //     </CardContainer>
        //     })}
            
        // </div>
        <div>
            {salasOcupadas.map( salaOcupada => {
                return <CardContainer>
                <p>{salaOcupada.nome}</p>
                <p>{salaOcupada.status}</p>
                <p>{currentDate.toLocaleDateString()}</p>
                
            </CardContainer>
            })}
            
        </div>
        
    )
}