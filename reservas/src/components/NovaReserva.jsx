import { ButtonReserva } from "./styles"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { List } from "./List/List";

export function NovaReserva() {
    return(
        <div>
            <Link to='/fazernovareserva'>
                <ButtonReserva>
                    Nova Reserva
                </ButtonReserva>
            </Link>
            <h3>Salas reservadas:</h3>
            
           
            
        </div>

        
    )
}