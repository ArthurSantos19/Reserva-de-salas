import React, { createContext, useState } from "react"

export const SalasReservadasContext = createContext();

export function SalasReservadasProvider({children}) {
    const [salasReservadas, setSalasReservadas] = useState([]);

    const adicionarSalaReservada = (sala) => {
        setSalasReservadas((salas) => [...salas, sala]);
    };

    return (
        <SalasReservadasContext.Provider value={[salasReservadas, adicionarSalaReservada]}>
            {children}
        </SalasReservadasContext.Provider>
    )
}