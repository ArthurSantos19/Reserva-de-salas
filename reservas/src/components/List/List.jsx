import { CardContainer } from "./styles"
import { salas, salasOcupadas } from "../salas";

export function List() {
    const currentDate = new Date();
    return (
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